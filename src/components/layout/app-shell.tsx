"use client"
import { Sidebar } from "./sidebar"; import { TopBar } from "./top-bar"; import { FantasyBackground } from "./aurora-bg"
import { LevelUpModal } from "@/components/game/level-up-modal"; import { OnboardingHints } from "@/components/game/onboarding-hints"
import { motion } from "framer-motion"; import { usePathname } from "next/navigation"
export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  return <div className="relative flex h-screen overflow-hidden"><FantasyBackground/><LevelUpModal/><OnboardingHints/><Sidebar/><div className="relative z-10 flex flex-1 flex-col overflow-hidden"><TopBar/><main className="relative flex-1 overflow-y-auto"><motion.div key={pathname} initial={{opacity:0,y:4}} animate={{opacity:1,y:0}} transition={{duration:.25,ease:"easeOut"}}>{children}</motion.div></main></div></div>
}
