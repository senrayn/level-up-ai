"use client"
import { motion, AnimatePresence } from "framer-motion"; import { GlassCard } from "@/components/ui/glass-card"
import { Check, Star, Zap } from "lucide-react"; import { cn } from "@/lib/utils/cn"; import { difficultyConfig } from "@/lib/mock-data"; import { useGameStore } from "@/stores/game-store"

export function TodayQuests() {
  const quests = useGameStore(s => s.quests); const complete = useGameStore(s => s.completeQuest); const uncomplete = useGameStore(s => s.uncompleteQuest)
  const done = quests.filter(q => q.status === "completed").length
  const flow = done >= 6 ? "In Flow · Keep going!" : done >= 3 ? "Warming Up · Nearly there!" : done >= 1 ? "Good Start" : null

  return <GlassCard noPadding>
    <div className="flex items-center justify-between px-5 pt-4 pb-3"><h3 className="text-lg font-semibold text-text">Today&apos;s Commissions</h3><span className="text-sm text-slate-500">{done}/{quests.length}</span></div>
    {flow && <div className="mx-5 mb-1 flex items-center gap-2 rounded-lg bg-mint/10 border border-mint/20 px-3 py-1.5"><Zap className="h-3.5 w-3.5 text-mint"/><span className="text-[11px] font-medium text-mint">{flow}</span></div>}
    <div className="divide-y divide-slate-100">
      {quests.map((q,i)=>{
        const d=difficultyConfig[q.difficulty]; const ok=q.status==="completed"
        return <motion.button key={q.id} initial={{opacity:0,x:-4}} animate={{opacity:1,x:0}} transition={{delay:i*.03}} onClick={()=>{if(ok)uncomplete(q.id);else complete(q.id)}} className={cn("flex w-full items-center gap-4 px-5 py-3.5 text-left transition-colors",ok?"opacity-55 bg-slate-50/30":"hover:bg-slate-50/50")}>
          <motion.div whileTap={{scale:.9}} className={cn("flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border-2 transition-colors",ok?"border-mint bg-mint text-white":"border-slate-300 hover:border-primary/60")}>
            {ok && <motion.div initial={{scale:0}} animate={{scale:1}}><Check className="h-3 w-3"/></motion.div>}
          </motion.div>
          <div className="flex-1 min-w-0"><p className={cn("text-sm font-medium",ok?"text-slate-400 line-through":"text-text")}>{q.title}</p><div className="mt-0.5 flex items-center gap-2"><span className="text-[10px] rounded-full px-2 py-0.5 border font-medium" style={{borderColor:d.color,color:d.color}}>{d.label}</span><span className="text-[10px] text-slate-500 flex items-center gap-0.5"><Star className="h-2.5 w-2.5"/>+{q.xp_reward} XP</span></div></div>
        </motion.button>
      })}
    </div></GlassCard>
}
