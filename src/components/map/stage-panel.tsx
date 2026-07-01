"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { GlassCard } from "@/components/ui/glass-card"
import { cn } from "@/lib/utils/cn"
import { MapNode } from "./map-node"
import { BossNode } from "./boss-node"
import { Target } from "lucide-react"
import type { MapStage } from "@/lib/map-mock-data"

interface StagePanelProps { stage: MapStage; stageIndex: number }

const themes = [
  { bg: "bg-mint/5", text: "text-mint-600", border: "border-mint/30" },
  { bg: "bg-primary/5", text: "text-primary", border: "border-primary/30" },
  { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-300" },
  { bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-300" },
]

export function StagePanel({ stage, stageIndex }: StagePanelProps) {
  const [expanded, setExpanded] = useState(stage.nodes.some(n => n.status === "active"))
  const isCurrent = stage.nodes.some(n => n.status === "active")
  const isCompleted = stage.nodes.every(n => n.status === "completed") && stage.boss.defeated
  const completedCount = stage.nodes.filter(n => n.status === "completed").length
  const theme = themes[stageIndex] ?? themes[0]

  return (
    <GlassCard className={cn("transition-all", isCurrent && "ring-1 ring-primary/20", isCompleted && "ring-1 ring-mint/20")}>
      <button onClick={() => setExpanded(!expanded)} className="flex w-full items-center justify-between text-left">
        <div className="flex items-center gap-3">
          <div className={cn("flex h-10 w-10 items-center justify-center rounded-xl text-lg font-bold", theme.bg, theme.text)}>
            {isCompleted ? "✓" : isCurrent ? <Target className="h-5 w-5" /> : stageIndex + 1}
          </div>
          <div>
            <h3 className={cn("text-sm font-semibold", isCompleted ? "text-mint" : isCurrent ? "text-primary" : "text-slate-500")}>{stage.name}</h3>
            <p className="text-[11px] text-slate-400">{stage.subtitle}</p>
          </div>
        </div>
        <span className="text-slate-300 text-sm">{expanded ? "▾" : "▸"}</span>
      </button>
      <AnimatePresence>
        {expanded && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="mt-4 pt-4 border-t border-slate-100">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {stage.nodes.map((node) => (
                <MapNode key={node.id} name={node.name} icon={node.icon} status={node.status} xp={node.xp} description={node.description} />
              ))}
            </div>
            <div className="mt-3">
              <BossNode boss={stage.boss} theme={{ bg: theme.bg, text: theme.text, border: theme.border, glow: "" }} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </GlassCard>
  )
}
