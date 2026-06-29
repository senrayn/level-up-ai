"use client"

import { GlassCard } from "@/components/ui/glass-card"
import { Map, ChevronRight } from "lucide-react"
import { mockMapNodes } from "@/lib/mock-data"
import { cn } from "@/lib/utils/cn"
import Link from "next/link"

export function MiniMap() {
  const activeIndex = mockMapNodes.findIndex((n) => n.active)

  return (
    <GlassCard>
      <Link href="/map" className="group flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Map className="h-4 w-4 text-text-tertiary group-hover:text-accent transition-colors" />
          <h3 className="text-sm font-semibold text-text-primary">Growth Map</h3>
        </div>
        <ChevronRight className="h-4 w-4 text-text-tertiary group-hover:text-text-secondary transition-colors" />
      </Link>

      <div className="flex items-center gap-1.5">
        {mockMapNodes.map((node, i) => (
          <div key={node.name} className="flex items-center gap-1.5 flex-1 last:flex-none">
            <div
              className={cn(
                "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-[10px] font-semibold transition-all",
                node.completed && "bg-success/20 text-success",
                node.active && "bg-accent/20 text-accent ring-2 ring-accent/30",
                !node.completed && !node.active && "bg-[rgba(255,255,255,0.04)] text-text-tertiary"
              )}
              title={node.name + (node.completed ? " ✓" : node.active ? " ●" : "")}
            >
              {node.completed ? "✓" : i + 1}
            </div>
            {i < mockMapNodes.length - 1 && (
              <div
                className={cn(
                  "h-px flex-1",
                  node.completed ? "bg-success/40" : "bg-[rgba(255,255,255,0.06)]"
                )}
              />
            )}
          </div>
        ))}
      </div>

      <p className="mt-2 text-xs text-text-tertiary">
        {activeIndex >= 0 ? `Stage ${activeIndex + 1}: ${mockMapNodes[activeIndex].name}` : "No active path"}
      </p>
    </GlassCard>
  )
}
