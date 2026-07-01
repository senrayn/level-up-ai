import { create } from "zustand"
import { mockQuests, difficultyConfig } from "@/lib/mock-data"
import type { Task, TaskStatus, PetMood } from "@/types/game"

const XP_THRESHOLDS = [0, 300, 750, 1400, 2200, 3200, 4500, 6000, 8000, 10500, 13500, 17000, 21000, 25500, 31000]
function levelForXp(xp: number) { for (let i = XP_THRESHOLDS.length - 1; i >= 0; i--) if (xp >= XP_THRESHOLDS[i]) return i + 1; return 1 }
function xpForLevel(level: number) { return XP_THRESHOLDS[Math.min(level, XP_THRESHOLDS.length) - 1] ?? 0 }

interface RewardAnimation { type: "xp"|"coins"|"level_up"|"achievement"; value?: number; itemName?: string; timestamp: number }

const defaultSkills = [
  { name: "HTML", unlocked: true, level: 5, xp: 500, description: "The foundation of the web." },
  { name: "CSS", unlocked: true, level: 4, xp: 400, description: "The art of styling." },
  { name: "JavaScript", unlocked: true, level: 3, xp: 300, description: "The language of the web." },
  { name: "React", unlocked: false, level: 2, xp: 200, description: "The component magic." },
  { name: "TypeScript", unlocked: false, level: 1, xp: 100, description: "The shield of types." },
  { name: "Next.js", unlocked: false, level: 1, xp: 100, description: "The full-stack gateway." },
  { name: "AI Integration", unlocked: false, level: 1, xp: 100, description: "The wisdom of machines." },
  { name: "Deployment", unlocked: false, level: 1, xp: 100, description: "Share your creation." },
]

interface GameState {
  username: string; title: string; level: number; xp: number; xpToNext: number; coins: number
  streakDays: number; levelJustUp: boolean
  quests: (Task & { id: string })[]; completedQuestIds: string[]
  companionName: string; companionSpecies: string; companionMood: PetMood
  companionEnergy: number; companionFriendship: number; companionEvolution: number
  skills: typeof defaultSkills; unlockedSkillCount: number
  pendingRewards: RewardAnimation[]
  completeQuest: (questId: string) => void; uncompleteQuest: (questId: string) => void
  acknowledgeLevelUp: () => void; unlockSkill: (skillName: string) => void
  careForCompanion: (action: "feed"|"play"|"rest"|"train") => void
  addReward: (r: Omit<RewardAnimation,"timestamp">) => void; clearRewards: () => void; popReward: () => RewardAnimation|undefined
}

export const useGameStore = create<GameState>((set, get) => ({
  username: "Adventurer", title: "Code Apprentice", level: 12, xp: 2450, xpToNext: 3000, coins: 1840, streakDays: 7, levelJustUp: false,
  quests: mockQuests, completedQuestIds: mockQuests.filter(q => q.status === "completed").map(q => q.id),
  companionName: "Lumi", companionSpecies: "Forest Sprite", companionMood: "happy", companionEnergy: 78, companionFriendship: 42, companionEvolution: 1,
  skills: defaultSkills, unlockedSkillCount: defaultSkills.filter(s => s.unlocked).length, pendingRewards: [],

  completeQuest: (questId) => {
    const s = get(); const quest = s.quests.find(q => q.id === questId); if (!quest || quest.status === "completed") return
    const newXp = s.xp + quest.xp_reward; const newCoins = s.coins + quest.coin_reward
    const newLevel = levelForXp(newXp); const didLevelUp = newLevel > s.level
    const newEnergy = Math.min(100, s.companionEnergy + 5); const newFriendship = s.companionFriendship + 1
    let newMood: PetMood = newEnergy > 70 ? "happy" : newEnergy > 40 ? "neutral" : "sleepy"; if (didLevelUp) newMood = "excited"
    const totalDone = s.completedQuestIds.length + 1
    const updatedSkills = s.skills.map((sk, i) => { if (sk.unlocked) return sk; const thresh = 3 + i * 3; return totalDone >= thresh ? { ...sk, unlocked: true } : sk })
    const rewards: Omit<RewardAnimation,"timestamp">[] = [{ type: "xp", value: quest.xp_reward }, { type: "coins", value: quest.coin_reward }]
    if (didLevelUp) rewards.push({ type: "level_up", value: newLevel })
    if (updatedSkills.filter((sk, i) => sk.unlocked && !s.skills[i].unlocked).length > 0) rewards.push({ type: "achievement", itemName: "Skill Unlocked!" })
    set({ xp: newXp, level: newLevel, xpToNext: xpForLevel(newLevel + 1) - newXp, coins: newCoins, levelJustUp: didLevelUp,
      companionEnergy: newEnergy, companionFriendship: newFriendship, companionMood: newMood, skills: updatedSkills,
      unlockedSkillCount: updatedSkills.filter(sk => sk.unlocked).length, completedQuestIds: [...s.completedQuestIds, questId],
      quests: s.quests.map(q => q.id === questId ? { ...q, status: "completed" as TaskStatus, completed_at: new Date().toISOString() } : q),
      pendingRewards: [...s.pendingRewards, ...rewards.map(r => ({ ...r, timestamp: Date.now() }))] })
  },

  uncompleteQuest: (questId) => set(s => ({ quests: s.quests.map(q => q.id === questId ? { ...q, status: "pending" as TaskStatus, completed_at: undefined } : q) })),
  acknowledgeLevelUp: () => set({ levelJustUp: false }),

  unlockSkill: (name) => set(s => {
    const i = s.skills.findIndex(sk => sk.name === name); if (i === -1 || s.skills[i].unlocked || s.coins < 100) return s
    const updated = [...s.skills]; updated[i] = { ...updated[i], unlocked: true }
    return { skills: updated, unlockedSkillCount: updated.filter(sk => sk.unlocked).length, coins: s.coins - 100 }
  }),

  careForCompanion: (action) => set(s => {
    let e = s.companionEnergy, f = s.companionFriendship, xp = s.xp
    if (action === "feed") e = Math.min(100, e + 20)
    else if (action === "play") { e = Math.min(100, e + 10); f += 2 }
    else if (action === "rest") e = 100
    else if (action === "train") { xp += 25; f += 1; e = Math.max(0, e - 10) }
    let mood: PetMood = e > 70 ? "happy" : e > 40 ? "neutral" : "sleepy"; if (f >= 50 && s.companionEvolution < 2) mood = "excited"
    return { companionEnergy: e, companionFriendship: f, companionMood: mood, xp, companionEvolution: f >= 50 ? 2 : s.companionEvolution }
  }),

  addReward: (r) => set(s => ({ pendingRewards: [...s.pendingRewards, { ...r, timestamp: Date.now() }] })),
  clearRewards: () => set({ pendingRewards: [] }),
  popReward: () => { const rs = get().pendingRewards; if (rs.length === 0) return undefined; set({ pendingRewards: rs.slice(1) }); return rs[0] },
}))
