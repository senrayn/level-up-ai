"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils/cn"

interface LevelBadgeProps {
  level: number
  size?: "sm" | "md" | "lg"
  className?: string
}

export function LevelBadge({ level, size = "md", className }: LevelBadgeProps) {
  const sizeMap = {
    sm: "h-8 w-8 text-xs",
    md: "h-10 w-10 text-sm",
    lg: "h-14 w-14 text-lg",
  }

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className={cn(
        "flex items-center justify-center rounded-full font-bold tabular-nums",
        "bg-gradient-to-br from-accent to-accent-secondary",
        "shadow-[0_0_16px_rgba(108,92,231,0.3)]",
        "text-white",
        sizeMap[size],
        className
      )}
    >
      {level}
    </motion.div>
  )
}
