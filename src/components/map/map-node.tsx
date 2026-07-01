"use client"
import { motion } from "framer-motion"; import { cn } from "@/lib/utils/cn"; import { ChevronRight } from "lucide-react"
import type { MapNodeStatus } from "@/lib/map-mock-data"

interface MapNodeProps { name: string; icon: string; status: MapNodeStatus; xp: number; description: string; onClick?: () => void }

const styles: Record<MapNodeStatus, string> = {
  completed: "border-mint/40 bg-mint/10 text-mint",
  active: "border-primary/40 bg-primary/10 text-primary shadow-card",
  available: "border-slate-300 bg-slate-50 text-slate-600",
  locked: "border-slate-200 bg-slate-50/60 text-slate-400",
}

export function MapNode({ name, icon, status, xp, description, onClick }: MapNodeProps) {
  const clickable = status === "active" || status === "available"
  return (
    <motion.button
      whileHover={clickable ? { scale: 1.03 } : undefined}
      onClick={clickable ? onClick : undefined}
      disabled={!clickable}
      className={cn("group relative flex flex-col items-center gap-1.5 rounded-2xl border p-4 transition-all", styles[status])}
    >
      <span className="text-2xl">{icon}</span>
      <span className="text-xs font-semibold">{name}</span>
      <span className="text-[10px] tabular-nums text-slate-500">+{xp} XP</span>
      {status === "active" && <div className="absolute -top-1.5 -right-1.5 h-3 w-3 rounded-full bg-primary soft-pulse" />}
    </motion.button>
  )
}
