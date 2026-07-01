"use client"
import { Flame } from "lucide-react"
interface P { days: number; size?: "sm"|"md"|"lg" }
export function StreakBadge({ days, size = "md" }: P) {
  const m = { sm: { c: "h-7 px-2.5 text-[11px] gap-1", i: "h-3 w-3" }, md: { c: "h-9 px-3 text-xs gap-1.5", i: "h-3.5 w-3.5" }, lg: { c: "h-11 px-4 text-sm gap-2", i: "h-4 w-4" } }
  const s = m[size]; const f = days >= 7
  return <div className={`inline-flex items-center rounded-xl border font-bold ${s.c} ${f ? "border-primary/20 bg-primary/5 text-primary" : "border-slate-200/50 bg-white/30 text-slate-400"}`}><Flame className={s.i} fill={f?"currentColor":"none"}/><span className="tabular-nums">{days}</span><span className="font-normal text-slate-300">d</span></div>
}
