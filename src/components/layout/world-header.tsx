"use client"
import { motion } from "framer-motion"
interface P { title: string; subtitle: string; className?: string }
export function WorldHeader({ title, subtitle, className = "" }: P) {
  return <motion.div initial={{opacity:0,y:6}} animate={{opacity:1,y:0}} transition={{duration:.35}} className={`mb-8 ${className}`}><h2 className="text-2xl font-bold text-text">{title}</h2><p className="mt-1 text-slate-500 text-sm">{subtitle}</p></motion.div>
}
