"use client"

import { GlassCard } from "@/components/ui/glass-card"
import { AttributeBar } from "@/components/game/attribute-bar"
import { mockAttributes } from "@/lib/mock-data"
import type { AttributeName } from "@/types/game"

const attributeNames: AttributeName[] = [
  "knowledge",
  "discipline",
  "creativity",
  "health",
  "communication",
  "strength",
]

export function AttributePanel() {
  return (
    <GlassCard>
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-tertiary">Attributes</h3>
      <div className="space-y-3">
        {attributeNames.map((attr) => (
          <AttributeBar key={attr} attribute={attr} value={mockAttributes[attr]} max={100} />
        ))}
      </div>
    </GlassCard>
  )
}
