"use client"
import { PageContainer } from "@/components/layout/page-container"; import { WorldHeader } from "@/components/layout/world-header"; import { GlassCard } from "@/components/ui/glass-card"
import { LevelBadge } from "@/components/game/level-badge"; import { StreakBadge } from "@/components/game/streak-badge"
import { useGameStore } from "@/stores/game-store"; import { mockAttributes } from "@/lib/mock-data"
import { motion } from "framer-motion"; import { User } from "lucide-react"

export default function ArchivePage() {
  const {username,title,level,streakDays}=useGameStore()
  return <PageContainer maxWidth="narrow">
    <WorldHeader title="Adventurer Archive" subtitle="The chronicle of your deeds. Every battle, every triumph."/>
    <motion.div initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{delay:.05}}><GlassCard className="mb-5"><div className="flex flex-col sm:flex-row items-center gap-5">
      <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center"><User className="h-10 w-10 text-primary"/></div>
      <div className="flex-1 text-center sm:text-left"><div className="flex items-center justify-center sm:justify-start gap-2 mb-1"><h2 className="text-xl font-semibold text-text">{username}</h2><LevelBadge level={level} size="sm"/><StreakBadge days={streakDays} size="sm"/></div><p className="text-[13px] text-slate-400">{title}</p></div></div></GlassCard></motion.div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <motion.div initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{delay:.1}}><GlassCard><h3 className="text-sm font-semibold text-text mb-4">Attributes</h3><div className="space-y-2">{Object.entries(mockAttributes).map(([k,v])=><div key={k} className="flex items-center justify-between"><span className="text-[12px] text-slate-500 capitalize">{k}</span><div className="flex items-center gap-2"><div className="h-1.5 w-20 rounded-full bg-slate-100 overflow-hidden"><div className="h-full rounded-full bg-primary" style={{width:`${v}%`}}/></div><span className="text-[12px] font-bold text-slate-600 w-6 text-right">{v}</span></div></div>)}</div></GlassCard></motion.div>
      <motion.div initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{delay:.15}}><GlassCard><h3 className="text-sm font-semibold text-text mb-4">Titles</h3><div className="flex flex-wrap gap-2">{[{label:"Code Apprentice",earned:true},{label:"Early Riser",earned:true},{label:"Streak Master",earned:true},{label:"Bug Hunter",earned:false}].map(b=><span key={b.label} className={`rounded-full px-3 py-1 text-[11px] font-medium border ${b.earned?"bg-primary/5 border-primary/20 text-primary":"bg-slate-50 border-slate-200 text-slate-300"}`}>{b.earned?"✦ ":"○ "}{b.label}</span>)}</div></GlassCard></motion.div>
    </div></PageContainer>
}
