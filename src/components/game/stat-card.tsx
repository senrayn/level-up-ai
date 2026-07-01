"use client"
import { cn } from "@/lib/utils/cn"; import { type ReactNode } from "react"; import { GlassCard } from "@/components/ui/glass-card"
interface P { children: ReactNode; className?: string }
export function StatCard({ children, className }: P) { return <GlassCard className={cn("flex items-center gap-3 py-4", className)}>{children}</GlassCard> }
