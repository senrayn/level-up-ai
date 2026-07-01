"use client"
import { motion } from "framer-motion"
interface P { progress: number; size?: number; strokeWidth?: number; className?: string }
export function XPRing({ progress, size = 120, strokeWidth = 6, className }: P) {
  const r = (size - strokeWidth) / 2; const c = r * 2 * Math.PI; const o = c - Math.min(Math.max(progress, 0), 1) * c
  return <div className={className} style={{width:size,height:size}}><svg width={size} height={size} className="-rotate-90"><defs><linearGradient id="xpG" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#6AA8E0"/><stop offset="100%" stopColor="#7EC8A0"/></linearGradient></defs>
    <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth={strokeWidth}/>
    <motion.circle cx={size/2} cy={size/2} r={r} fill="none" stroke="url(#xpG)" strokeWidth={strokeWidth} strokeLinecap="round" strokeDasharray={c} initial={{strokeDashoffset:c}} animate={{strokeDashoffset:o}} transition={{duration:.8,ease:"easeOut"}}/></svg></div>
}
