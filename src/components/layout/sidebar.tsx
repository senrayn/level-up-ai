"use client"

import { cn } from "@/lib/utils/cn"
import { mainNavItems, bottomNavItems, type NavItem } from "@/config/navigation"
import { useUIStore } from "@/stores/ui-store"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronLeft, ChevronRight, Zap } from "lucide-react"

function SidebarNavItem({ item }: { item: NavItem }) {
  const pathname = usePathname()
  const isActive = pathname.startsWith(item.href)
  const { sidebarCollapsed } = useUIStore()
  const Icon = item.icon

  return (
    <Link
      href={item.href}
      className={cn(
        "group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200",
        isActive
          ? "bg-accent/10 text-accent"
          : "text-text-secondary hover:bg-[rgba(255,255,255,0.04)] hover:text-text-primary"
      )}
    >
      <Icon className={cn("h-5 w-5 shrink-0", isActive ? "text-accent" : "text-text-tertiary group-hover:text-text-secondary")} />
      <AnimatePresence mode="wait">
        {!sidebarCollapsed && (
          <motion.span
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ duration: 0.15 }}
            className="whitespace-nowrap overflow-hidden"
          >
            {item.label}
          </motion.span>
        )}
      </AnimatePresence>
    </Link>
  )
}

export function Sidebar() {
  const { sidebarCollapsed, toggleSidebarCollapsed } = useUIStore()

  return (
    <motion.aside
      animate={{ width: sidebarCollapsed ? 72 : 260 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "relative flex h-screen flex-col border-r border-[rgba(255,255,255,0.06)]",
        "bg-bg-secondary"
      )}
    >
      {/* Logo */}
      <div className="flex h-16 items-center gap-3 px-4 border-b border-[rgba(255,255,255,0.06)]">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-secondary">
          <Zap className="h-4 w-4 text-white" />
        </div>
        <AnimatePresence mode="wait">
          {!sidebarCollapsed && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="font-semibold text-text-primary text-base whitespace-nowrap"
            >
              Level Up
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-4 overflow-y-auto">
        {mainNavItems.map((item) => (
          <SidebarNavItem key={item.href} item={item} />
        ))}
      </nav>

      {/* Bottom Navigation */}
      <div className="border-t border-[rgba(255,255,255,0.06)] px-3 py-3 space-y-1">
        {bottomNavItems.map((item) => (
          <SidebarNavItem key={item.href} item={item} />
        ))}
      </div>

      {/* Collapse Toggle */}
      <button
        onClick={toggleSidebarCollapsed}
        className="absolute -right-3 top-20 flex h-6 w-6 items-center justify-center rounded-full border border-[rgba(255,255,255,0.06)] bg-bg-tertiary text-text-tertiary hover:text-text-secondary transition-colors"
      >
        {sidebarCollapsed ? (
          <ChevronRight className="h-3 w-3" />
        ) : (
          <ChevronLeft className="h-3 w-3" />
        )}
      </button>
    </motion.aside>
  )
}
