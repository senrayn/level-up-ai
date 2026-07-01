"use client"
import { motion } from "framer-motion"; import { cn } from "@/lib/utils/cn"; import { Check } from "lucide-react"
import type { MapBossNode as BossNodeType } from "@/lib/map-mock-data"

interface BossNodeProps { boss: BossNodeType; theme: { bg: string; text: string; border: string; glow: string }; onClick?: () => void }

export function BossNode({ boss, theme, onClick }: BossNodeProps) {
  const hpPct = boss.maxHp > 0 ? Math.round((boss.hp / boss.maxHp) * 100) : 0
  const clickable = boss.status === "available" || boss.status === "active"
  return (
    <motion.button
      whileHover={clickable ? { scale: 1.03 } : undefined}
      onClick={clickable ? onClick : undefined}
      disabled={!clickable}
      className={cn("group relative flex flex-col items-center gap-2 rounded-2xl border-2 p-5 transition-all",
        boss.defeated ? "border-mint/30 bg-mint/10" : boss.status === "locked" ? "border-slate-200 bg-slate-50/60" : "border-primary/30 bg-primary/10 cursor-pointer hover:border-primary/50")}
    >
      <span className="text-[9px] font-bold uppercase tracking-widest text-primary">BOSS</span>
      <span className="text-3xl">{boss.icon}</span>
      <span className={cn("text-sm font-bold", boss.defeated ? "text-mint" : boss.status === "locked" ? "text-slate-400" : "text-text")}>{boss.name}</span>
      <span className="text-[10px] text-slate-500 italic">{boss.title}</span>
      {!boss.defeated && boss.status !== "locked" && (
        <div className="w-full space-y-1">
          <div className="flex justify-between text-[9px]"><span className="text-primary font-medium">HP {hpPct}%</span><span className="text-slate-500">{boss.hp}/{boss.maxHp}</span></div>
          <div className="h-1.5 w-full rounded-full bg-slate-200 overflow-hidden"><motion.div initial={{width:0}} animate={{width:`${hpPct}%`}} transition={{duration:.7}} className="h-full rounded-full bg-primary"/></div>
        </div>)}
      {boss.defeated && <div className="flex items-center gap-1 rounded-full bg-mint/10 px-2 py-0.5"><Check className="h-3 w-3 text-mint"/><span className="text-[10px] font-medium text-mint">Defeated</span></div>}
    </motion.button>
  )
}
