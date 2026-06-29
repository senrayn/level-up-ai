"use client"

import { cn } from "@/lib/utils/cn"
import { type ReactNode } from "react"
import { motion } from "framer-motion"

interface GlassCardProps {
  children: ReactNode
  className?: string
  variant?: "default" | "lg" | "xl"
  glow?: boolean
  hover?: boolean
  noPadding?: boolean
}

export function GlassCard({
  children,
  className,
  variant = "default",
  glow = false,
  hover = true,
  noPadding = false,
}: GlassCardProps) {
  const Component = hover ? motion.div : "div"
  const motionProps = hover ? { whileHover: { scale: 1.01 }, transition: { duration: 0.2 } } : {}

  return (
    <Component
      {...motionProps}
      className={cn(
        "relative overflow-hidden",
        "bg-[rgba(255,255,255,0.03)] backdrop-blur-[20px]",
        "border border-[rgba(255,255,255,0.06)]",
        !noPadding && "p-6",
        variant === "default" && "rounded-2xl",
        variant === "lg" && "rounded-2xl",
        variant === "xl" && "rounded-3xl",
        glow && "shadow-[0_0_20px_rgba(108,92,231,0.08)]",
        "shadow-[0_4px_12px_rgba(0,0,0,0.4)]",
        className
      )}
    >
      {children}
    </Component>
  )
}
