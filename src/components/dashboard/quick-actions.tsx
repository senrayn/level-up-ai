"use client"

import { GlassCard } from "@/components/ui/glass-card"
import { Plus, Zap, Target, Sparkles } from "lucide-react"

const actions = [
  { icon: Zap, label: "New Roadmap", color: "text-accent", bg: "bg-accent/10" },
  { icon: Target, label: "Add Goal", color: "text-success", bg: "bg-success/10" },
  { icon: Sparkles, label: "AI Suggestion", color: "text-accent-secondary", bg: "bg-accent-secondary/10" },
  { icon: Plus, label: "Quick Task", color: "text-warning", bg: "bg-warning/10" },
]

export function QuickActions() {
  return (
    <GlassCard>
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-tertiary">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-2">
        {actions.map((action) => {
          const Icon = action.icon
          return (
            <button
              key={action.label}
              className="flex items-center gap-2 rounded-xl border border-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.02)] px-3 py-2.5 text-left text-xs font-medium text-text-secondary transition-all hover:border-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.04)]"
            >
              <div className={`flex h-7 w-7 items-center justify-center rounded-lg ${action.bg}`}>
                <Icon className={`h-3.5 w-3.5 ${action.color}`} />
              </div>
              {action.label}
            </button>
          )
        })}
      </div>
    </GlassCard>
  )
}
