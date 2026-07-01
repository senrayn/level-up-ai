"use client"
import { PageContainer } from "@/components/layout/page-container"; import { WorldHeader } from "@/components/layout/world-header"; import { GlassCard } from "@/components/ui/glass-card"
import { useGameStore } from "@/stores/game-store"; import { motion } from "framer-motion"; import { Heart, Sun, Moon, Sparkles, PawPrint } from "lucide-react"

const moodMap: Record<string,{label:string;color:string;bg:string}>={happy:{label:"Happy",color:"text-mint",bg:"bg-mint/10"},neutral:{label:"Calm",color:"text-primary",bg:"bg-primary/10"},sleepy:{label:"Tired",color:"text-soft-purple",bg:"bg-soft-purple/10"},excited:{label:"Energetic",color:"text-primary",bg:"bg-primary/15"}}

export default function CompanionPage() {
  const name=useGameStore(s=>s.companionName);const species=useGameStore(s=>s.companionSpecies);const mood=useGameStore(s=>s.companionMood)
  const energy=useGameStore(s=>s.companionEnergy);const fship=useGameStore(s=>s.companionFriendship);const evo=useGameStore(s=>s.companionEvolution)
  const care=useGameStore(s=>s.careForCompanion);const md=moodMap[mood]??moodMap.happy
  return <PageContainer maxWidth="narrow">
    <WorldHeader title="Spirit Companion" subtitle="A faithful friend walks beside you. Care for them, and together you will grow stronger."/>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <motion.div initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{delay:.05}}><GlassCard className="flex flex-col items-center py-8">
        <div className="h-36 w-36 rounded-full bg-gradient-to-br from-primary/10 via-mint/10 to-soft-purple/10 border-2 border-white/80 flex items-center justify-center shadow-card mb-3"><PawPrint className="h-16 w-16 text-primary/40"/></div>
        <h3 className="text-lg font-semibold text-text">{name}</h3><p className="text-[12px] text-slate-400">{species}</p>
        <div className={`mt-3 flex items-center gap-2 rounded-full border px-4 py-1.5 ${md.bg} border-primary/10`}><span className={`text-[11px] font-medium ${md.color}`}>{md.label}</span></div></GlassCard></motion.div>
      <div className="lg:col-span-2 space-y-5">
        <motion.div initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{delay:.1}}><GlassCard><h3 className="text-sm font-semibold text-text mb-4">Status</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">{[{label:"Friendship",value:`Lv.${Math.floor(fship/10)+1}`,icon:Heart,color:"text-primary"},{label:"Energy",value:`${energy}/100`,icon:Sun,color:"text-mint"},{label:"Evolution",value:`Stage ${evo}`,icon:Sparkles,color:"text-soft-purple"},{label:"Mood",value:mood.charAt(0).toUpperCase()+mood.slice(1),icon:Moon,color:"text-primary"}].map(s=>{const I=s.icon;return <div key={s.label} className="text-center"><I className={`h-4 w-4 ${s.color} mx-auto mb-1`}/><p className="text-[11px] text-slate-400">{s.label}</p><p className="text-sm font-semibold text-text">{s.value}</p></div>})}</div></GlassCard></motion.div>
        <motion.div initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{delay:.15}}><GlassCard><h3 className="text-sm font-semibold text-text mb-4">Care for {name}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">{[{label:"Feed",icon:Heart,action:"feed"as const,desc:"+20 Energy"},{label:"Play",icon:Sun,action:"play"as const,desc:"+10 Energy +2 Bond"},{label:"Rest",icon:Moon,action:"rest"as const,desc:"Full Energy"},{label:"Train",icon:Sparkles,action:"train"as const,desc:"+25 XP +1 Bond"}].map(a=>{const I=a.icon;return <motion.button key={a.label} whileTap={{scale:.97}} onClick={()=>care(a.action)} className="flex flex-col items-center gap-1 rounded-xl bg-slate-50/60 border border-slate-200/40 px-3 py-3 transition-colors hover:bg-white hover:border-slate-300"><I className="h-5 w-5 text-primary"/><span className="text-[12px] font-medium text-slate-600">{a.label}</span><span className="text-[10px] text-slate-400">{a.desc}</span></motion.button>})}</div></GlassCard></motion.div>
      </div></div></PageContainer>
}
