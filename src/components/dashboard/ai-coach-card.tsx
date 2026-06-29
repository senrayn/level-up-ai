"use client"

import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { Bot, Lightbulb, TrendingUp, Clock } from "lucide-react"
import { mockAISuggestion } from "@/lib/mock-data"

export function AICoachCard() {
  return (
    <GlassCard>
      <div className="flex items-start gap-3 mb-4">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent/10">
          <Bot className="h-5 w-5 text-accent" />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-text-primary">AI Coach</h3>
          <p className="text-xs text-text-tertiary">Personalized insights</p>
        </div>
      </div>

      <p className="mb-4 text-sm leading-relaxed text-text-secondary">
        {mockAISuggestion.message}
      </p>

      <div className="space-y-2">
        {mockAISuggestion.tips.map((tip, i) => (
          <div key={i} className="flex items-start gap-2 rounded-xl bg-[rgba(255,255,255,0.02)] px-3 py-2">
            {i === 0 ? (
              <Clock className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-accent-secondary" />
            ) : i === 1 ? (
              <TrendingUp className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-success" />
            ) : (
              <Lightbulb className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-warning" />
            )}
            <span className="text-xs text-text-tertiary">{tip}</span>
          </div>
        ))}
      </div>
    </GlassCard>
  )
}
