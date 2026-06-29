"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils/cn"
import { GlassCard } from "@/components/ui/glass-card"

interface StatCardProps {
  label: string
  value: string | number
  icon?: React.ReactNode
  trend?: "up" | "down" | "neutral"
  trendValue?: string
  className?: string
}

export function StatCard({ label, value, icon, trend, trendValue, className }: StatCardProps) {
  return (
    <GlassCard className={cn("flex flex-col gap-2", className)} hover={false}>
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-text-tertiary uppercase tracking-wider">
          {label}
        </span>
        {icon && <div className="text-text-tertiary">{icon}</div>}
      </div>
      <motion.span
        key={`${label}-${value}`}
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-semibold tabular-nums text-text-primary"
      >
        {value}
      </motion.span>
      {trend && trendValue && (
        <span
          className={cn(
            "text-xs font-medium",
            trend === "up" && "text-success",
            trend === "down" && "text-danger",
            trend === "neutral" && "text-text-tertiary"
          )}
        >
          {trend === "up" ? "↑" : trend === "down" ? "↓" : "→"} {trendValue}
        </span>
      )}
    </GlassCard>
  )
}
