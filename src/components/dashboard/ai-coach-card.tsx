"use client"
import { GlassCard } from "@/components/ui/glass-card"; import { Clock, Wand2 } from "lucide-react"; import { mockAISuggestion } from "@/lib/mock-data"
export function AICoachCard(){return <GlassCard>
  <div className="flex items-start gap-3 mb-3"><div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10"><Wand2 className="h-4 w-4 text-primary"/></div><div><h3 className="text-sm font-semibold text-text">Adventure Guide</h3><p className="text-[11px] text-slate-500">Daily wisdom</p></div></div>
  <p className="mb-3 text-[13px] text-slate-600 leading-relaxed">{mockAISuggestion.message}</p>
  <div className="space-y-1.5">{mockAISuggestion.tips.map((t,i)=><div key={i} className="flex items-start gap-2 rounded-lg bg-slate-100/50 px-3 py-2"><Clock className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-slate-400"/><span className="text-[11px] text-slate-500">{t}</span></div>)}</div></GlassCard>}
