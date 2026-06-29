"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { Check, Clock, Star, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils/cn"
import { mockQuests, difficultyConfig } from "@/lib/mock-data"

export function TodayQuests() {
  const [quests, setQuests] = useState(mockQuests)
  const completedCount = quests.filter((q) => q.status === "completed").length

  const toggleQuest = (id: string) => {
    setQuests((prev) =>
      prev.map((q) =>
        q.id === id
          ? {
              ...q,
              status: q.status === "completed" ? ("pending" as const) : ("completed" as const),
              completed_at: q.status !== "completed" ? new Date().toISOString() : undefined,
            }
          : q
      )
    )
  }

  return (
    <GlassCard noPadding>
      <div className="flex items-center justify-between px-6 pt-5 pb-3">
        <h3 className="text-lg font-semibold text-text-primary">Today&apos;s Quests</h3>
        <span className="text-sm font-medium text-text-tertiary">
          {completedCount}/{quests.length}
        </span>
      </div>

      <div className="divide-y divide-[rgba(255,255,255,0.04)]">
        <AnimatePresence>
          {quests.map((quest, index) => {
            const diff = difficultyConfig[quest.difficulty]
            const isCompleted = quest.status === "completed"
            const isInProgress = quest.status === "in_progress"

            return (
              <motion.button
                key={quest.id}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.04 }}
                onClick={() => toggleQuest(quest.id)}
                className={cn(
                  "flex w-full items-center gap-4 px-6 py-4 text-left transition-colors hover:bg-[rgba(255,255,255,0.02)]",
                  isCompleted && "opacity-60"
                )}
              >
                {/* Checkbox */}
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className={cn(
                    "flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-lg border-2 transition-colors",
                    isCompleted
                      ? "border-success bg-success text-black"
                      : "border-[rgba(255,255,255,0.10)] hover:border-[rgba(255,255,255,0.20)]"
                  )}
                >
                  <AnimatePresence>
                    {isCompleted && (
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                        <Check className="h-3.5 w-3.5" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className={cn("text-sm font-medium", isCompleted ? "text-text-tertiary line-through" : "text-text-primary")}>
                      {quest.title}
                    </p>
                    {isInProgress && !isCompleted && (
                      <Badge variant="warning" className="text-[10px]">
                        <Clock className="mr-0.5 h-2.5 w-2.5" /> Active
                      </Badge>
                    )}
                  </div>
                  <div className="mt-1 flex items-center gap-2">
                    <Badge variant="default" className="text-[10px]" style={{ borderColor: diff.color, color: diff.color }}>
                      {diff.label}
                    </Badge>
                    <span className="text-[10px] text-text-tertiary flex items-center gap-0.5">
                      <Star className="h-2.5 w-2.5" /> +{quest.xp_reward} XP
                    </span>
                  </div>
                </div>

                {/* AI badge */}
                {quest.ai_generated && (
                  <Sparkles className="h-3.5 w-3.5 flex-shrink-0 text-accent opacity-60" />
                )}
              </motion.button>
            )
          })}
        </AnimatePresence>
      </div>
    </GlassCard>
  )
}
