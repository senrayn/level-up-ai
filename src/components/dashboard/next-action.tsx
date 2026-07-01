"use client"
import { useGameStore } from "@/stores/game-store"; import { motion } from "framer-motion"; import { Star, Zap, Flame } from "lucide-react"

function streakLabel(d: number) { if (d>=14) return "Unstoppable"; if (d>=7) return "Streak Master"; if (d>=3) return "Building"; return "Starting" }

export function NextAction() {
  const qs = useGameStore(s => s.quests); const lv = useGameStore(s => s.level)
  const xp = useGameStore(s => s.xp); const xpn = useGameStore(s => s.xpToNext); const d = useGameStore(s => s.streakDays)
  const done = qs.filter(q => q.status === "completed").length; const left = qs.filter(q => q.status !== "completed").length
  const xpr = xpn - xp
  let msg = ""; const Icon = done >= 3 ? Zap : Star
  if (done >= 6) msg = "In flow state — keep this energy!"
  else if (done >= 3) msg = "On a streak! One more quest?"
  else if (done >= 1) msg = "Good start — keep the momentum"
  else msg = "Begin your first commission today"

  return <motion.div initial={{opacity:0,y:-4}} animate={{opacity:1,y:0}} className="flex flex-col sm:flex-row items-start sm:items-center gap-3 rounded-2xl bg-white/60 border border-slate-200 px-5 py-3 shadow-card">
    <div className="flex items-center gap-2"><Icon className="h-3.5 w-3.5 text-primary"/><span className="text-[12px] font-medium text-slate-700">{msg}</span></div>
    <div className="hidden sm:block w-px h-4 bg-slate-200"/>
    <div className="flex items-center gap-2"><Star className="h-3.5 w-3.5 text-mint"/><span className="text-[12px] text-slate-600">{xpr} XP to Lv.{lv+1} · {left} quest{left!==1?"s":""} left</span></div>
    <div className="flex items-center gap-2"><Flame className="h-3.5 w-3.5 text-primary"/><span className="text-[12px] text-slate-600">{streakLabel(d)} · {d}d</span></div>
  </motion.div>
}
