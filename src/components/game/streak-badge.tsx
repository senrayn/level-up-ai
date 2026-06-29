"use client"

import { Flame } from "lucide-react"
import { motion } from "framer-motion"

interface StreakBadgeProps {
  days: number
  size?: "sm" | "md" | "lg"
}

export function StreakBadge({ days, size = "md" }: StreakBadgeProps) {
  const sizeMap = {
    sm: { container: "h-8 px-2 text-xs gap-1", icon: "h-3.5 w-3.5" },
    md: { container: "h-10 px-3 text-sm gap-1.5", icon: "h-4 w-4" },
    lg: { container: "h-12 px-4 text-base gap-2", icon: "h-5 w-5" },
  }

  const s = sizeMap[size]
  const isHot = days >= 7
  const isOnFire = days >= 30

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`inline-flex items-center rounded-xl border font-medium ${s.container} ${
        isOnFire
          ? "border-warning/30 bg-warning/10 text-warning shadow-[0_0_16px_rgba(251,191,36,0.15)]"
          : isHot
          ? "border-warning/20 bg-warning/5 text-warning"
          : "border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] text-text-secondary"
      }`}
    >
      <Flame
        className={`${s.icon} ${isOnFire ? "animate-pulse" : ""}`}
        fill={isHot ? "currentColor" : "none"}
      />
      <span className="tabular-nums">{days}</span>
      <span className="text-text-tertiary">days</span>
    </motion.div>
  )
}
