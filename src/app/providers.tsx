"use client"

import { MotionConfig } from "framer-motion"

const springTransition = {
  type: "spring" as const,
  stiffness: 300,
  damping: 30,
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig transition={springTransition}>
      {children}
    </MotionConfig>
  )
}
