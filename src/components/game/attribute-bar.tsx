"use client"

import { motion } from "framer-motion"
import type { AttributeName } from "@/types/game"

const attributeColors: Record<AttributeName, string> = {
  strength: "#F87171",
  knowledge: "#6C5CE7",
  health: "#34D399",
  creativity: "#F59E0B",
  discipline: "#3B82F6",
  communication: "#EC4899",
}

const attributeLabels: Record<AttributeName, string> = {
  strength: "STR",
  knowledge: "KNW",
  health: "HLT",
  creativity: "CRT",
  discipline: "DSC",
  communication: "COM",
}

interface AttributeBarProps {
  attribute: AttributeName
  value: number
  max?: number
}

export function AttributeBar({ attribute, value, max = 100 }: AttributeBarProps) {
  const percentage = Math.min((value / max) * 100, 100)
  const color = attributeColors[attribute]

  return (
    <div className="flex items-center gap-3">
      <span
        className="w-8 text-xs font-semibold tabular-nums"
        style={{ color }}
      >
        {attributeLabels[attribute]}
      </span>
      <div className="flex-1 h-2 rounded-full bg-[rgba(255,255,255,0.04)] overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: color, boxShadow: `0 0 8px ${color}40` }}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
      <span className="w-8 text-right text-xs font-medium tabular-nums text-text-tertiary">
        {value}
      </span>
    </div>
  )
}

export { attributeColors, attributeLabels }
