export type MapNodeStatus = "locked" | "available" | "active" | "completed"

export interface MapSkillNode {
  id: string
  name: string
  icon: string
  status: MapNodeStatus
  xp: number
  description: string
}

export interface MapBossNode {
  id: string
  name: string
  title: string
  icon: string
  hp: number
  maxHp: number
  status: MapNodeStatus
  defeated: boolean
  description: string
}

export interface MapStage {
  id: string
  name: string
  subtitle: string
  theme: string
  position: number
  nodes: MapSkillNode[]
  boss: MapBossNode
}

export const mockMapStages: MapStage[] = [
  {
    id: "stage-1",
    name: "Beginner Village",
    subtitle: "The journey begins",
    theme: "#34D399",
    position: 0,
    nodes: [
      { id: "html", name: "HTML", icon: "🏗️", status: "completed", xp: 150, description: "Structure of the web" },
      { id: "css", name: "CSS", icon: "🎨", status: "completed", xp: 150, description: "Styling & layout" },
      { id: "js", name: "JavaScript", icon: "⚡", status: "completed", xp: 200, description: "Bringing pages to life" },
    ],
    boss: { id: "boss-1", name: "Script Kiddie", title: "Tutorial Boss", icon: "👾", hp: 0, maxHp: 600, status: "completed", defeated: true, description: "Defeated by mastering the fundamentals" },
  },
  {
    id: "stage-2",
    name: "Forest of Logic",
    subtitle: "The React realm",
    theme: "#6C5CE7",
    position: 1,
    nodes: [
      { id: "react-basics", name: "React Basics", icon: "⚛️", status: "active", xp: 250, description: "Components & JSX" },
      { id: "state-props", name: "State & Props", icon: "🔄", status: "available", xp: 200, description: "Data flow mastery" },
      { id: "lifecycle", name: "Lifecycle", icon: "🕰️", status: "available", xp: 200, description: "Mount, update, unmount" },
    ],
    boss: { id: "boss-2", name: "Prop Driller", title: "Confusion Wyrm", icon: "🐉", hp: 400, maxHp: 1000, status: "available", defeated: false, description: "Defeat by building clean component trees" },
  },
  {
    id: "stage-3",
    name: "Mountain of State",
    subtitle: "Mastering data",
    theme: "#F59E0B",
    position: 2,
    nodes: [
      { id: "redux", name: "Redux", icon: "🏪", status: "locked", xp: 300, description: "Centralized state" },
      { id: "context", name: "Context API", icon: "📡", status: "locked", xp: 250, description: "React's built-in store" },
      { id: "hooks-mastery", name: "Hooks Mastery", icon: "🪝", status: "locked", xp: 300, description: "Custom hooks & patterns" },
    ],
    boss: { id: "boss-3", name: "State Hydra", title: "Chaos Serpent", icon: "🐍", hp: 1500, maxHp: 1500, status: "locked", defeated: false, description: "Each head represents a piece of state — cut them all down" },
  },
  {
    id: "stage-4",
    name: "Sky City of TypeScript",
    subtitle: "Type safety awaits",
    theme: "#00D2FF",
    position: 3,
    nodes: [
      { id: "type-system", name: "Type System", icon: "📋", status: "locked", xp: 300, description: "Primitives & inference" },
      { id: "generics", name: "Generics", icon: "🧬", status: "locked", xp: 350, description: "Reusable type patterns" },
      { id: "utility-types", name: "Utility Types", icon: "🔧", status: "locked", xp: 300, description: "Built-in type helpers" },
    ],
    boss: { id: "boss-4", name: "Any Dragon", title: "Type Void", icon: "🐲", hp: 2000, maxHp: 2000, status: "locked", defeated: false, description: "The final boss of type ignorance" },
  },
]

export const stageThemes: Record<string, { bg: string; text: string; border: string; glow: string }> = {
  "#34D399": { bg: "rgba(52,211,153,0.08)", text: "#34D399", border: "rgba(52,211,153,0.25)", glow: "rgba(52,211,153,0.15)" },
  "#6C5CE7": { bg: "rgba(108,92,231,0.08)", text: "#6C5CE7", border: "rgba(108,92,231,0.25)", glow: "rgba(108,92,231,0.15)" },
  "#F59E0B": { bg: "rgba(245,158,11,0.08)", text: "#F59E0B", border: "rgba(245,158,11,0.25)", glow: "rgba(245,158,11,0.15)" },
  "#00D2FF": { bg: "rgba(0,210,255,0.08)", text: "#00D2FF", border: "rgba(0,210,255,0.25)", glow: "rgba(0,210,255,0.15)" },
}
