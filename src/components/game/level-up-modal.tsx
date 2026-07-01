"use client"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useGameStore } from "@/stores/game-store"
import { Star } from "lucide-react"

export function LevelUpModal() {
  const lvlUp = useGameStore(s => s.levelJustUp)
  const level = useGameStore(s => s.level)
  const ack = useGameStore(s => s.acknowledgeLevelUp)
  const [vis, setVis] = useState(false)
  useEffect(() => { if (lvlUp) setVis(true) }, [lvlUp])
  const close = () => { setVis(false); setTimeout(ack, 300) }

  return (
    <AnimatePresence>
      {vis && (
        <div className="fixed inset-0 z-50 flex items-center justify-center" onClick={close}>
          <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="absolute inset-0 bg-slate-900/10 backdrop-blur-sm" />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="relative z-10 mx-4 flex flex-col items-center gap-4 rounded-3xl bg-white/85 border border-slate-200/50 px-10 py-8 shadow-card text-center max-w-sm"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Star className="h-8 w-8 text-primary fill-current" />
            </div>
            <h2 className="text-xl font-bold text-text">Level Up!</h2>
            <p className="text-5xl font-bold text-primary">Lv.{level}</p>
            <p className="text-sm text-slate-500">New powers awaken within you.</p>
            <button onClick={close} className="mt-2 rounded-2xl bg-primary px-8 py-2.5 text-sm font-semibold text-white hover:bg-primary/90 transition-colors">
              Continue
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
