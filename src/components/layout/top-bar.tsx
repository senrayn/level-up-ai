"use client"
import { Menu, ScrollText, Bell } from "lucide-react"; import { useUIStore } from "@/stores/ui-store"
export function TopBar() {
  const { toggleSidebar } = useUIStore()
  return <header className="sticky top-0 z-40 flex h-14 items-center justify-between px-6">
    <div className="absolute inset-0 border-b border-slate-200/40 bg-white/50 backdrop-blur-lg"/>
    <div className="relative flex items-center gap-3"><button onClick={toggleSidebar} className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100/50 transition-colors lg:hidden"><Menu className="h-[18px] w-[18px]"/></button><span className="text-[13px] font-medium text-slate-500">Adventure</span></div>
    <div className="relative flex items-center gap-2">
      <button className="flex items-center gap-2 rounded-xl border border-slate-200/60 bg-white/50 px-4 py-2 text-[13px] font-medium text-slate-600 transition-colors hover:bg-white hover:border-slate-300"><ScrollText className="h-[14px] w-[14px] text-primary"/><span className="hidden sm:inline">New Quest</span></button>
      <button className="relative flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100/50 transition-colors"><Bell className="h-[18px] w-[18px]"/><span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-primary"/></button>
      <button className="flex items-center gap-2 rounded-xl border border-slate-200/50 bg-white/40 px-3 py-1.5 transition-colors hover:bg-white hover:border-slate-300"><div className="h-6 w-6 rounded-full bg-primary/20 ring-2 ring-primary/10"/><span className="text-[13px] font-medium text-slate-500 hidden sm:inline">Adventurer</span></button>
    </div></header>
}
