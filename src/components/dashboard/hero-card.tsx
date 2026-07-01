"use client"
import { motion } from "framer-motion"; import { GlassCard } from "@/components/ui/glass-card"
import { XPRing } from "@/components/game/xp-ring"; import { LevelBadge } from "@/components/game/level-badge"
import { StreakBadge } from "@/components/game/streak-badge"; import { useGameStore } from "@/stores/game-store"
import { User, Coins, Swords } from "lucide-react"

function xpForLevel(lv: number) { const t=[0,300,750,1400,2200,3200,4500,6000,8000,10500,13500,17000,21000,25500,31000]; return t[Math.min(lv,t.length)-1]??0 }
const moodLabel: Record<string,string> = { happy:"Happy", neutral:"Calm", sleepy:"Tired", excited:"Energetic" }

export function HeroCard() {
  const s = useGameStore()
  const p = s.xpToNext>0?Math.min((s.xp%xpForLevel(s.level))/(xpForLevel(s.level+1)-xpForLevel(s.level)),1):0
  return <GlassCard className="relative overflow-hidden">
    <div className="flex flex-col sm:flex-row items-center gap-6">
      <div className="relative flex-shrink-0"><XPRing progress={p} size={140} strokeWidth={5}/>
        <div className="absolute inset-0 flex flex-col items-center justify-center"><div className="h-14 w-14 rounded-full bg-primary/20 flex items-center justify-center"><User className="h-7 w-7 text-primary"/></div><LevelBadge level={s.level} size="sm" className="mt-1"/></div></div>
      <div className="flex-1 text-center sm:text-left min-w-0">
        <motion.div initial={{opacity:0,y:4}} animate={{opacity:1,y:0}} transition={{duration:.35}}><h2 className="text-2xl font-semibold text-text">{s.username}</h2><span className="inline-flex items-center gap-1 rounded-full bg-primary/10 border border-primary/20 px-2.5 py-0.5 text-[11px] font-medium text-primary mt-1">{s.title}</span></motion.div>
        <div className="mt-1 text-[11px] text-slate-500">{s.streakDays}d streak · {s.companionName} is {moodLabel[s.companionMood]||"Calm"}</div>
        <motion.div initial={{opacity:0,y:4}} animate={{opacity:1,y:0}} transition={{delay:.05}} className="mt-4 flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1.5 rounded-xl bg-white/50 border border-slate-200 px-3 py-2"><span className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">XP</span><motion.span key={s.xp} initial={{scale:1.2}} animate={{scale:1}} className="text-sm font-bold tabular-nums text-text">{s.xp.toLocaleString()}</motion.span><span className="text-[10px] text-slate-500">/{s.xpToNext.toLocaleString()}</span></div>
          <div className="flex items-center gap-1.5 rounded-xl bg-white/50 border border-slate-200 px-3 py-2"><Coins className="h-3.5 w-3.5 text-mint"/><motion.span key={s.coins} initial={{scale:1.2}} animate={{scale:1}} className="text-sm font-bold tabular-nums text-text">{s.coins.toLocaleString()}</motion.span></div>
          <StreakBadge days={s.streakDays} size="sm"/>
          <div className="flex items-center gap-1.5 rounded-xl bg-white/50 border border-slate-200 px-3 py-2"><Swords className="h-3.5 w-3.5 text-primary"/><span className="text-sm font-bold tabular-nums text-primary">Lv.{s.level}</span></div>
        </motion.div></div></div></GlassCard>
}
