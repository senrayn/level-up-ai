"use client"

import { motion } from "framer-motion"
import { GlassCard } from "@/components/ui/glass-card"
import { XPRing } from "@/components/game/xp-ring"
import { LevelBadge } from "@/components/game/level-badge"
import { StreakBadge } from "@/components/game/streak-badge"
import { mockUser } from "@/lib/mock-data"

export function HeroCard() {
  const xpProgress = mockUser.xp / mockUser.xp_to_next

  return (
    <GlassCard variant="xl" glow className="relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative flex flex-col sm:flex-row items-center gap-6">
        {/* Avatar + Level */}
        <div className="relative flex-shrink-0">
          <div className="relative">
            <XPRing progress={xpProgress} size={130} strokeWidth={6} />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl">{mockUser.avatar}</span>
              <LevelBadge level={mockUser.level} size="sm" className="mt-0.5" />
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="flex-1 text-center sm:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold text-text-primary"
          >
            {mockUser.username}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-0.5 text-sm font-medium text-accent"
          >
            {mockUser.title}
          </motion.p>

          <div className="mt-3 flex flex-wrap items-center justify-center sm:justify-start gap-3">
            <div className="flex items-center gap-2 rounded-xl bg-[rgba(255,255,255,0.04)] px-3 py-1.5">
              <span className="text-xs text-text-tertiary">XP</span>
              <motion.span
                key={mockUser.xp}
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-sm font-bold text-white tabular-nums"
              >
                {mockUser.xp.toLocaleString()}
              </motion.span>
              <span className="text-xs text-text-tertiary">/ {mockUser.xp_to_next.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-[rgba(255,255,255,0.04)] px-3 py-1.5">
              <span className="text-xs text-text-tertiary">💰</span>
              <span className="text-sm font-bold text-white tabular-nums">{mockUser.coins.toLocaleString()}</span>
            </div>
            <StreakBadge days={mockUser.streak_days} size="sm" />
          </div>
        </div>
      </div>
    </GlassCard>
  )
}
