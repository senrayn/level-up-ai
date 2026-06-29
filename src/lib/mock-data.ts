import type { UserAttributes, Task, Difficulty } from "@/types/game"

export const mockUser = {
  username: "Adventurer",
  level: 12,
  xp: 2450,
  xp_to_next: 3000,
  coins: 1840,
  streak_days: 7,
  title: "Code Apprentice",
  avatar: "⚔️",
}

export const mockAttributes: UserAttributes = {
  strength: 15,
  knowledge: 42,
  health: 28,
  creativity: 35,
  discipline: 31,
  communication: 22,
}

export const mockQuests: (Task & { id: string })[] = [
  {
    id: "q1",
    user_id: "u1",
    title: "Complete React tutorial chapter 4",
    description: "Learn about hooks and state management",
    difficulty: "medium" as Difficulty,
    category: "learn",
    xp_reward: 80,
    coin_reward: 40,
    attribute_rewards: { knowledge: 5, discipline: 2, strength: 0, health: 0, creativity: 0, communication: 0 },
    scheduled_date: new Date().toISOString().split("T")[0],
    status: "pending",
    ai_generated: true,
  },
  {
    id: "q2",
    user_id: "u1",
    title: "30-minute morning workout",
    description: "Push-ups, squats, and stretching routine",
    difficulty: "easy" as Difficulty,
    category: "fitness",
    xp_reward: 40,
    coin_reward: 20,
    attribute_rewards: { strength: 3, health: 4, knowledge: 0, creativity: 0, discipline: 2, communication: 0 },
    scheduled_date: new Date().toISOString().split("T")[0],
    status: "in_progress",
    ai_generated: true,
  },
  {
    id: "q3",
    user_id: "u1",
    title: "Read 10 pages of Deep Work",
    description: "Focus chapter — environment design for deep concentration",
    difficulty: "easy" as Difficulty,
    category: "read",
    xp_reward: 30,
    coin_reward: 15,
    attribute_rewards: { knowledge: 3, discipline: 4, strength: 0, health: 0, creativity: 1, communication: 0 },
    scheduled_date: new Date().toISOString().split("T")[0],
    status: "completed",
    completed_at: new Date().toISOString(),
    ai_generated: true,
  },
  {
    id: "q4",
    user_id: "u1",
    title: "Build a small Next.js component",
    description: "Create a reusable card component with Tailwind CSS",
    difficulty: "hard" as Difficulty,
    category: "code",
    xp_reward: 120,
    coin_reward: 60,
    attribute_rewards: { knowledge: 8, creativity: 5, discipline: 3, strength: 0, health: 0, communication: 0 },
    scheduled_date: new Date().toISOString().split("T")[0],
    status: "pending",
    ai_generated: true,
  },
  {
    id: "q5",
    user_id: "u1",
    title: "Write a daily reflection journal",
    description: "Write 200 words about today's progress and learnings",
    difficulty: "easy" as Difficulty,
    category: "build",
    xp_reward: 25,
    coin_reward: 10,
    attribute_rewards: { communication: 4, discipline: 2, strength: 0, health: 0, creativity: 3, knowledge: 1 },
    scheduled_date: new Date().toISOString().split("T")[0],
    status: "pending",
    ai_generated: false,
  },
]

export const mockWeeklyData = [
  { day: "Mon", xp: 320, tasks: 5 },
  { day: "Tue", xp: 280, tasks: 4 },
  { day: "Wed", xp: 410, tasks: 6 },
  { day: "Thu", xp: 190, tasks: 3 },
  { day: "Fri", xp: 360, tasks: 5 },
  { day: "Sat", xp: 150, tasks: 2 },
  { day: "Sun", xp: 0, tasks: 0 },
]

export const mockAISuggestion = {
  message: "You're making great progress on React! Based on your learning pace, try adding a small TypeScript project this weekend to solidify your skills. Your discipline stat is growing well.",
  tips: [
    "Best focus time: 9 AM - 11 AM",
    "You complete 85% more tasks on weekdays",
    "Knowledge stat is your fastest-growing attribute",
  ],
}

export const mockMapNodes = [
  { name: "HTML", completed: true },
  { name: "CSS", completed: true },
  { name: "JavaScript", completed: true },
  { name: "React", completed: false, active: true },
  { name: "Next.js", completed: false },
  { name: "TypeScript", completed: false },
]

export const difficultyConfig = {
  easy: { label: "Easy", color: "#34D399", xp: 10 },
  medium: { label: "Medium", color: "#FBBF24", xp: 20 },
  hard: { label: "Hard", color: "#F87171", xp: 30 },
  epic: { label: "Epic", color: "#6C5CE7", xp: 50 },
} as const
