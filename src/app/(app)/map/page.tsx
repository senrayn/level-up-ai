"use client"
import { PageContainer } from "@/components/layout/page-container"; import { WorldHeader } from "@/components/layout/world-header"; import { GlassCard } from "@/components/ui/glass-card"
import { StagePanel } from "@/components/map/stage-panel"; import { mockMapStages } from "@/lib/map-mock-data"
import { motion } from "framer-motion"; import { Trophy, Target, Swords } from "lucide-react"

export default function MapPage() {
  const t=mockMapStages.reduce((a,s)=>a+s.nodes.length,0);const c=mockMapStages.reduce((a,s)=>a+s.nodes.filter(n=>n.status==="completed").length,0);const b=mockMapStages.filter(s=>s.boss.defeated).length
  return <PageContainer maxWidth="narrow">
    <WorldHeader title="World Map" subtitle="The realm stretches before you. Where will your journey lead?"/>
    <motion.div initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{delay:.05}} className="mb-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
      <GlassCard className="flex items-center gap-3 py-3"><div className="flex h-8 w-8 items-center justify-center rounded-xl bg-mint/10"><Trophy className="h-4 w-4 text-mint"/></div><div><p className="text-[11px] text-slate-400">Skills Mastered</p><p className="text-base font-semibold text-text">{c}<span className="text-slate-400 text-sm font-normal">/{t}</span></p></div></GlassCard>
      <GlassCard className="flex items-center gap-3 py-3"><div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10"><Swords className="h-4 w-4 text-primary"/></div><div><p className="text-[11px] text-slate-400">Bosses Defeated</p><p className="text-base font-semibold text-text">{b}<span className="text-slate-400 text-sm font-normal">/4</span></p></div></GlassCard>
      <GlassCard className="flex items-center gap-3 py-3"><div className="flex h-8 w-8 items-center justify-center rounded-xl bg-soft-purple/10"><Target className="h-4 w-4 text-soft-purple"/></div><div><p className="text-[11px] text-slate-400">Current Stage</p><p className="text-base font-semibold text-primary">2<span className="text-slate-400 text-sm font-normal">/4</span></p></div></GlassCard>
    </motion.div>
    <div className="space-y-2">{mockMapStages.map((s,i)=><motion.div key={s.id} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.08+i*.06}}><StagePanel stage={s} stageIndex={i}/></motion.div>)}</div>
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.4}} className="mt-6 pb-12 text-center"><p className="text-sm text-slate-400">Complete <span className="text-mint font-medium">{t-c} skills</span> and defeat <span className="text-primary font-medium">{4-b} bosses</span>.</p></motion.div></PageContainer>
}
