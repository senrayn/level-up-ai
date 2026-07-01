"use client"
import { PageContainer } from "@/components/layout/page-container"
import { GlassCard } from "@/components/ui/glass-card"
import { motion } from "framer-motion"

export default function Page() {
  return (
    <PageContainer maxWidth="narrow">
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05, duration: 0.5 }}>
        <GlassCard className="min-h-[200px] flex flex-col items-center justify-center text-center">
          <p className="text-4xl mb-3">🗺️</p>
          <p className="text-sm text-slate-500">This region awaits further exploration.</p>
          <p className="text-[11px] text-slate-400 mt-1">Coming in a future adventure update.</p>
        </GlassCard>
      </motion.div>
    </PageContainer>
  )
}
