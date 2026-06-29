export type Difficulty = "easy" | "medium" | "hard" | "epic"
export type TaskCategory = "learn" | "fitness" | "work" | "read" | "code" | "build"
export type TaskStatus = "pending" | "in_progress" | "completed" | "skipped"
export type GrowthPathStatus = "active" | "completed" | "abandoned"
export type MilestoneStatus = "locked" | "active" | "completed"
export type PetSpecies = "fox" | "cat" | "robot" | "dragon"
export type PetMood = "happy" | "neutral" | "sleepy" | "excited"
export type ItemType = "equipment" | "consumable" | "cosmetic" | "title"
export type ItemRarity = "common" | "rare" | "epic" | "legendary"
export type ItemSlot = "head" | "weapon" | "armor" | "accessory" | "pet"
export type TeamRole = "owner" | "admin" | "member"
export type ChallengeStatus = "active" | "completed" | "failed"
export type FriendshipStatus = "pending" | "accepted" | "blocked"

export type AttributeName = "strength" | "knowledge" | "health" | "creativity" | "discipline" | "communication"

export interface UserProfile {
  id: string
  username: string
  avatar_type: string
  level: number
  xp: number
  xp_to_next: number
  coins: number
  streak_days: number
  longest_streak: number
  onboarding_completed: boolean
}

export interface Task {
  id: string
  user_id: string
  title: string
  description?: string
  difficulty: Difficulty
  category: TaskCategory
  xp_reward: number
  coin_reward: number
  attribute_rewards: Record<AttributeName, number>
  scheduled_date: string
  status: TaskStatus
  completed_at?: string
  ai_generated: boolean
}

export interface GrowthPath {
  id: string
  user_id: string
  title: string
  description: string
  goal_input: string
  category: TaskCategory
  target_completion: string
  status: GrowthPathStatus
  current_stage: number
  total_stages: number
  map_theme: string
}

export interface Milestone {
  id: string
  growth_path_id: string
  stage_number: number
  title: string
  description: string
  map_location: string
  xp_bonus: number
  boss_name?: string
  boss_hp?: number
  status: MilestoneStatus
}

export interface UserAttributes {
  strength: number
  knowledge: number
  health: number
  creativity: number
  discipline: number
  communication: number
}

export interface Pet {
  id: string
  user_id: string
  species: PetSpecies
  name: string
  evolution_stage: number
  xp: number
  mood: PetMood
}

export interface SkillNode {
  id: string
  parent_id?: string
  name: string
  category: string
  depth: number
  icon: string
  xp_required: number
  prerequisite_nodes: string[]
}

export interface UserSkill {
  skill_node_id: string
  progress: number
  unlocked: boolean
}

export interface Achievement {
  id: string
  key: string
  name: string
  description: string
  icon: string
  category: string
  rarity: ItemRarity
}

export interface InventoryItem {
  id: string
  key: string
  name: string
  type: ItemType
  rarity: ItemRarity
  slot?: ItemSlot
  attributes_bonus?: Partial<UserAttributes>
  icon: string
}

export interface DailyReport {
  id: string
  user_id: string
  report_date: string
  tasks_completed: number
  tasks_total: number
  completion_rate: number
  xp_earned: number
  coins_earned: number
  peak_focus_time?: string
  ai_analysis: string
  ai_suggestions: string
  mood_rating?: number
}
