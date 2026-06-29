"use client"

import { GlassCard } from "@/components/ui/glass-card"
import { mockWeeklyData } from "@/lib/mock-data"
import { BarChart3 } from "lucide-react"
import { motion } from "framer-motion"

export function WeeklyChart() {
  const maxXp = Math.max(...mockWeeklyData.map((d) => d.xp), 1)

  return (
    <GlassCard>
      <div className="flex items-center gap-2 mb-4">
        <BarChart3 className="h-4 w-4 text-text-tertiary" />
        <h3 className="text-sm font-semibold text-text-primary">Weekly Progress</h3>
      </div>

      <div className="flex items-end justify-between gap-1 h-36">
        {mockWeeklyData.map((day, i) => {
          const height = (day.xp / maxXp) * 100
          const isToday = i === 5 // Sat is today in mock
          return (
            <div key={day.day} className="flex flex-1 flex-col items-center gap-1.5">
              <div className="relative flex w-full flex-col justify-end" style={{ height: 120 }}>
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${Math.max(height, 4)}%` }}
                  transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className={`w-full rounded-t-lg ${
                    isToday
                      ? "bg-gradient-to-t from-accent to-accent-secondary shadow-[0_0_8px_rgba(108,92,231,0.3)]"
                      : "bg-[rgba(255,255,255,0.06)]"
                  }`}
                />
              </div>
              <span className={`text-[10px] font-medium ${isToday ? "text-accent" : "text-text-tertiary"}`}>
                {day.day}
              </span>
            </div>
          )
        })}
      </div>

      <div className="mt-3 flex items-center justify-between text-xs text-text-tertiary">
        <span>{mockWeeklyData.reduce((a, b) => a + b.tasks, 0)} tasks this week</span>
        <span>{mockWeeklyData.reduce((a, b) => a + b.xp, 0)} XP</span>
      </div>
    </GlassCard>
  )
}
