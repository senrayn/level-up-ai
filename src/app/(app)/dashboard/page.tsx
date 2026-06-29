"use client"

import { PageContainer } from "@/components/layout/page-container"
import { Grid } from "@/components/layout/grid"
import { HeroCard } from "@/components/dashboard/hero-card"
import { TodayQuests } from "@/components/dashboard/today-quests"
import { AttributePanel } from "@/components/dashboard/attribute-panel"
import { AICoachCard } from "@/components/dashboard/ai-coach-card"
import { WeeklyChart } from "@/components/dashboard/weekly-chart"
import { MiniMap } from "@/components/dashboard/mini-map"
import { QuickActions } from "@/components/dashboard/quick-actions"
import { motion } from "framer-motion"

export default function DashboardPage() {
  return (
    <PageContainer>
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold text-text-primary">Dashboard</h2>
        <p className="mt-1 text-text-tertiary">Your journey continues. Complete today&apos;s quests to grow stronger.</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05, duration: 0.4 }}>
            <HeroCard />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.4 }}>
            <TodayQuests />
          </motion.div>
          <Grid cols={2} className="gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.4 }}>
              <QuickActions />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.4 }}>
              <MiniMap />
            </motion.div>
          </Grid>
        </div>
        <div className="space-y-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.4 }}>
            <AttributePanel />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.4 }}>
            <WeeklyChart />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.4 }}>
            <AICoachCard />
          </motion.div>
        </div>
      </div>
    </PageContainer>
  )
}
