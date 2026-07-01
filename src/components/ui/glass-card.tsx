"use client"
import { cn } from "@/lib/utils/cn"; import { type ReactNode } from "react"
interface GlassCardProps { children: ReactNode; className?: string; noPadding?: boolean }
export function GlassCard({ children, className, noPadding = false }: GlassCardProps) {
  return <div className={cn("anime-glass-card", !noPadding && "p-5", className)}>{children}</div>
}
