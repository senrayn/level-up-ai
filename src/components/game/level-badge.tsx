"use client"
import { cn } from "@/lib/utils/cn"
interface P { level: number; size?: "sm"|"md"|"lg"; className?: string }
export function LevelBadge({ level, size = "md", className }: P) {
  const s = { sm: "h-7 w-7 text-[11px]", md: "h-9 w-9 text-xs", lg: "h-12 w-12 text-sm" }
  return <div className={cn("flex items-center justify-center rounded-xl font-bold tabular-nums text-white bg-primary shadow-sm", s[size], className)}>{level}</div>
}
