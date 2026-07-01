"use client"
import { useState } from "react"; import { PageContainer } from "@/components/layout/page-container"; import { WorldHeader } from "@/components/layout/world-header"
import { GlassCard } from "@/components/ui/glass-card"; import { useGameStore } from "@/stores/game-store"
import { motion, AnimatePresence } from "framer-motion"; import { Star, Lock, Coins } from "lucide-react"

export default function ConstellationPage() {
  const skills = useGameStore(s => s.skills); const coins = useGameStore(s => s.coins); const unlock = useGameStore(s => s.unlockSkill)
  const [sel, setSel] = useState<string|null>(null)
  return <PageContainer maxWidth="narrow">
    <WorldHeader title="Constellation" subtitle="Stars of potential. Unlock each node — 100 coins per star."/>
    <div className="relative"><div className="absolute left-[17px] top-8 bottom-8 w-px bg-gradient-to-b from-primary/20 to-slate-200"/>
      <div className="space-y-0">{skills.map((sk,i)=>{
        const isS=sel===sk.name
        return <motion.div key={sk.name} initial={{opacity:0,x:-8}} animate={{opacity:1,x:0}} transition={{delay:.04+i*.04}} className="relative flex items-start gap-4 py-3.5">
          <button onClick={()=>setSel(isS?null:sk.name)} className="relative z-10 flex-shrink-0 mt-1"><div className={`flex h-9 w-9 items-center justify-center rounded-full border-2 transition-all ${sk.unlocked?"bg-primary/10 border-primary/30 text-primary":"bg-slate-50 border-slate-200 text-slate-400 hover:border-primary/30"}`}>{sk.unlocked?<Star className="h-4 w-4 fill-current"/>:<Lock className="h-3.5 w-3.5"/>}</div></button>
          <GlassCard className={`flex-1 transition-all ${isS?"ring-2 ring-primary/20":""}`}>
            <div className="flex items-start justify-between"><div><h3 className={`text-sm font-semibold ${sk.unlocked?"text-primary":"text-slate-600"}`}>{sk.name}</h3><p className="mt-0.5 text-[12px] text-slate-400">{sk.description}</p></div><div className="flex items-center gap-2 flex-shrink-0"><span className="text-[11px] text-slate-400">Lv.{sk.level}</span><span className="text-[11px] text-slate-400">{sk.xp} XP</span></div></div>
            <AnimatePresence>{isS&&!sk.unlocked&&<motion.div initial={{opacity:0,height:0}} animate={{opacity:1,height:"auto"}} exit={{opacity:0,height:0}} className="mt-3 pt-3 border-t border-slate-100">
              <div className="flex items-center justify-between"><div className="flex items-center gap-2"><Coins className="h-4 w-4 text-mint"/><span className="text-sm text-slate-600">100 coins</span><span className="text-[11px] text-slate-400">(Balance: {coins})</span></div><button onClick={()=>unlock(sk.name)} disabled={coins<100} className={`rounded-xl px-4 py-1.5 text-[12px] font-semibold transition-all ${coins>=100?"bg-primary text-white hover:bg-primary/90 active:scale-95":"bg-slate-100 text-slate-400 cursor-not-allowed"}`}>{coins>=100?"Unlock":"Need coins"}</button></div></motion.div>}</AnimatePresence></GlassCard></motion.div>})}
      </div></div></PageContainer>
}
