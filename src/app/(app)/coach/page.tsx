"use client"
import { PageContainer } from "@/components/layout/page-container"; import { WorldHeader } from "@/components/layout/world-header"; import { GlassCard } from "@/components/ui/glass-card"
import { useGameStore } from "@/stores/game-store"; import { motion } from "framer-motion"; import { Wand2, Lightbulb, Target, Heart } from "lucide-react"

export default function MentorPage() {
  const lv=useGameStore(s=>s.level);const d=useGameStore(s=>s.streakDays);const qs=useGameStore(s=>s.quests);const done=qs.filter(q=>q.status==="completed").length
  const tips=[
    done===0?{icon:Target,title:"Begin Today",text:"No commissions yet. Start small — 5 minutes matters.",color:"text-primary",bg:"bg-primary/5"}:{icon:Heart,title:"Good Progress",text:`${done} completed today!`,color:"text-mint",bg:"bg-mint/5"},
    d>=7?{icon:Lightbulb,title:"Streak Master",text:`${d} days — legendary discipline.`,color:"text-primary",bg:"bg-primary/5"}:{icon:Lightbulb,title:"Stay Consistent",text:"Every day is a new opportunity.",color:"text-soft-purple",bg:"bg-soft-purple/5"},
    {icon:Target,title:"Growth Path",text:lv<10?"Master easy commissions first.":"Try harder commissions for greater rewards.",color:"text-primary",bg:"bg-primary/5"},
    {icon:Heart,title:"Gentle Reminder",text:"Progress is showing up. You're doing great.",color:"text-mint",bg:"bg-mint/5"},
  ]
  return <PageContainer maxWidth="narrow">
    <WorldHeader title="Ancient Mentor" subtitle="Wisdom flows from those who walked before."/>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <motion.div initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{delay:.05}}><GlassCard className="flex flex-col items-center py-8">
        <div className="h-32 w-32 rounded-full bg-gradient-to-br from-primary/10 via-soft-purple/10 to-mint/10 border-2 border-white/80 flex items-center justify-center shadow-card mb-3"><Wand2 className="h-12 w-12 text-primary/40"/></div>
        <h3 className="text-lg font-semibold text-text">Sage Aria</h3><p className="text-[12px] text-slate-400">AI Mentor</p></GlassCard></motion.div>
      <div className="lg:col-span-2 space-y-5">
        <motion.div initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{delay:.1}}><GlassCard><div className="flex gap-4"><div className="h-10 w-10 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center"><Wand2 className="h-5 w-5 text-primary"/></div>
          <div><p className="text-sm text-slate-600 leading-relaxed">&ldquo;Adventurer, you stand at level {lv} with {d} days of dedication. Today brings new opportunities. Shall we begin?&rdquo;</p>
          <div className="mt-3 flex gap-2"><button className="rounded-xl bg-primary/10 px-4 py-1.5 text-[12px] font-medium text-primary hover:bg-primary/20">Begin Training</button><button className="rounded-xl bg-slate-50 px-4 py-1.5 text-[12px] font-medium text-slate-400">Ask Question</button></div></div></div></GlassCard></motion.div>
        <motion.div initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{delay:.15}}><div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{tips.map((c,i)=>{const I=c.icon;return <GlassCard key={i} className={c.bg}><div className="flex items-center gap-2 mb-2"><I className={`h-4 w-4 ${c.color}`}/><h4 className="text-[12px] font-semibold text-slate-600">{c.title}</h4></div><p className="text-[12px] text-slate-400">{c.text}</p></GlassCard>})}</div></motion.div>
      </div></div></PageContainer>
}
