"use client"

import { cn } from "@/lib/utils/cn"
import { Menu, Plus, Bell, ChevronDown } from "lucide-react"
import { useUIStore } from "@/stores/ui-store"

export function TopBar() {
  const { toggleSidebar } = useUIStore()

  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-[rgba(255,255,255,0.06)] bg-bg-primary/80 backdrop-blur-xl px-6">
      <div className="flex items-center gap-3">
        <button
          onClick={toggleSidebar}
          className="flex h-8 w-8 items-center justify-center rounded-lg text-text-tertiary hover:text-text-secondary hover:bg-[rgba(255,255,255,0.04)] transition-colors lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
        <h1 className="text-sm font-medium text-text-secondary">Dashboard</h1>
      </div>

      <div className="flex items-center gap-2">
        {/* Quick Action */}
        <button className="flex items-center gap-2 rounded-xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary hover:border-[rgba(255,255,255,0.10)] transition-all duration-200">
          <Plus className="h-4 w-4" />
          <span className="hidden sm:inline">New Roadmap</span>
        </button>

        {/* Notifications */}
        <button className="relative flex h-8 w-8 items-center justify-center rounded-lg text-text-tertiary hover:text-text-secondary hover:bg-[rgba(255,255,255,0.04)] transition-colors">
          <Bell className="h-5 w-5" />
          <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-accent" />
        </button>

        {/* User Menu */}
        <button className="flex items-center gap-2 rounded-xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] px-3 py-2 transition-all duration-200 hover:border-[rgba(255,255,255,0.10)]">
          <div className="h-6 w-6 rounded-full bg-gradient-to-br from-accent to-accent-secondary" />
          <span className="text-sm font-medium text-text-secondary hidden sm:inline">Adventurer</span>
          <ChevronDown className="h-3.5 w-3.5 text-text-tertiary hidden sm:inline" />
        </button>
      </div>
    </header>
  )
}
