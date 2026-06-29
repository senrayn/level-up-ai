import { create } from "zustand"

interface RewardAnimation {
  type: "xp" | "coins" | "level_up" | "loot" | "achievement"
  value?: number
  itemName?: string
  timestamp: number
}

interface GameState {
  pendingRewards: RewardAnimation[]
  addReward: (reward: Omit<RewardAnimation, "timestamp">) => void
  clearRewards: () => void
  popReward: () => RewardAnimation | undefined
}

export const useGameStore = create<GameState>((set, get) => ({
  pendingRewards: [],
  addReward: (reward) =>
    set((s) => ({
      pendingRewards: [...s.pendingRewards, { ...reward, timestamp: Date.now() }],
    })),
  clearRewards: () => set({ pendingRewards: [] }),
  popReward: () => {
    const rewards = get().pendingRewards
    if (rewards.length === 0) return undefined
    set({ pendingRewards: rewards.slice(1) })
    return rewards[0]
  },
}))
