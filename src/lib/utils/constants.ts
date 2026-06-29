export const APP_NAME = "Level Up"
export const APP_DESCRIPTION = "Turn real life into an RPG game."

export const DIFFICULTY_MULTIPLIERS = {
  easy: 1,
  medium: 2,
  hard: 3,
  epic: 5,
} as const

export const XP_PER_DIFFICULTY = {
  easy: 10,
  medium: 20,
  hard: 30,
  epic: 50,
} as const

export const COINS_PER_DIFFICULTY = {
  easy: 5,
  medium: 10,
  hard: 15,
  epic: 25,
} as const

export const MAX_STREAK_MULTIPLIER = 2.0
export const STREAK_BONUS_RATE = 0.02
export const BASE_LOOT_DROP_RATE = 0.05
export const MAX_LOOT_DROP_RATE = 0.20
export const PET_EVOLUTION_INTERVAL = 5

export const ATTRIBUTES = [
  "strength",
  "knowledge",
  "health",
  "creativity",
  "discipline",
  "communication",
] as const
