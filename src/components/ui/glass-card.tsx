"use client"

import { cn } from "@/lib/utils/cn"
import { forwardRef } from "react"
import { motion, type HTMLMotionProps } from "framer-motion"

type GlassCardProps = HTMLMotionProps<"div"> & {
  variant?: "default" | "lg" | "xl"
  glow?: boolean
  hover?: boolean
  noPadding?: boolean
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant = "default", glow = false, hover = true, noPadding = false, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={hover ? { scale: 1.01, transition: { duration: 0.2 } } : undefined}
        className={cn(
          "relative overflow-hidden",
          "bg-[rgba(255,255,255,0.03)] backdrop-blur-[20px]",
          "border border-[rgba(255,255,255,0.06)]",
          !noPadding && "p-6",
          variant === "default" && "rounded-2xl",
          variant === "lg" && "rounded-2xl",
          variant === "xl" && "rounded-3xl",
          glow && "shadow-[0_0_20px_rgba(108,92,231,0.1)]",
          "shadow-[0_4px_12px_rgba(0,0,0,0.4)]",
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)
GlassCard.displayName = "GlassCard"
export { GlassCard }
export type { GlassCardProps }
