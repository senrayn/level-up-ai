"use client"
import { motion } from "framer-motion"; import type { AttributeName } from "@/types/game"; import { cn } from "@/lib/utils/cn"
const cols: Record<AttributeName, string> = { strength: "#D4A0A0", knowledge: "#6AA8E0", health: "#7EC8A0", creativity: "#A9A3FF", discipline: "#7EC8A0", communication: "#E0B0C0" }
interface P { attribute: AttributeName; value: number; max?: number; compact?: boolean }
export function AttributeBar({ attribute, value, max = 100, compact }: P) {
  const p = Math.min((value / max) * 100, 100); const c = cols[attribute]
  return <div className={cn("flex items-center", compact ? "gap-0" : "gap-3")}>
    {!compact && <span className="w-7 text-[11px] font-bold tabular-nums tracking-wider" style={{color:c}}>{attribute.slice(0,3).toUpperCase()}</span>}
    <div className={cn("flex-1 rounded-full bg-slate-100 overflow-hidden", compact ? "h-2" : "h-1.5")}><motion.div className="h-full rounded-full" style={{backgroundColor:c}} initial={{width:0}} animate={{width:`${p}%`}} transition={{duration:.7,ease:"easeOut"}}/></div>
    {!compact && <span className="w-8 text-right text-[11px] font-medium tabular-nums text-slate-400">{value}</span>}
  </div>
}
