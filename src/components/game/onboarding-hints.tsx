"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Star, Heart } from "lucide-react"

const hints = [
  { id: "q", title: "Complete Commissions", desc: "Click a quest to complete it and earn XP + coins.", icon: Star },
  { id: "x", title: "Earn Experience", desc: "Your XP ring fills up. Reach the threshold to level up!", icon: Star },
  { id: "c", title: "Your Companion", desc: "Your spirit companion reacts to your actions.", icon: Heart },
]

export function OnboardingHints() {
  const [vis, setVis] = useState(false)
  const [step, setStep] = useState(0)
  useEffect(() => { if (!localStorage.getItem("ob-h")) setVis(true) }, [])
  const dismiss = () => { localStorage.setItem("ob-h", "1"); setVis(false) }
  const next = () => { step < 2 ? setStep(step + 1) : dismiss() }
  if (!vis) return null

  const h = hints[step]
  const I = h.icon

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center"
        onClick={dismiss}
      >
        <div className="absolute inset-0 bg-slate-900/10 backdrop-blur-sm" />
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="relative z-10 mx-4 w-full max-w-sm rounded-2xl bg-white/90 border border-slate-200/50 p-6 shadow-card"
          onClick={e => e.stopPropagation()}
        >
          <button onClick={dismiss} className="absolute top-3 right-3 text-slate-300 hover:text-slate-500">
            <X className="h-4 w-4" />
          </button>
          <div className="flex items-center gap-3 mb-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              <I className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-text">{h.title}</h3>
              <p className="text-[11px] text-slate-400">Tip {step + 1}/3</p>
            </div>
          </div>
          <p className="text-[13px] text-slate-500 mb-4">{h.desc}</p>
          <div className="flex justify-between items-center">
            <div className="flex gap-1.5">
              {hints.map((_, i) => (
                <div key={i} className={`h-1.5 w-5 rounded-full ${i === step ? "bg-primary" : "bg-slate-200"}`} />
              ))}
            </div>
            <button onClick={next} className="rounded-xl bg-primary px-5 py-1.5 text-[12px] font-semibold text-white hover:bg-primary/90">
              {step < 2 ? "Next" : "Begin"}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
