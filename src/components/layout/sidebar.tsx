"use client"
import { cn } from "@/lib/utils/cn"
import { mainNavItems, bottomNavItems, type NavItem } from "@/config/navigation"
import { useUIStore } from "@/stores/ui-store"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"; import { usePathname } from "next/navigation"
import { ChevronLeft, ChevronRight, Compass } from "lucide-react"

function SidebarNavItem({ item }: { item: NavItem }) {
  const pathname = usePathname(); const isActive = pathname.startsWith(item.href)
  const { sidebarCollapsed } = useUIStore(); const Icon = item.icon
  return <Link href={item.href} className={cn("group relative flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all duration-200", isActive ? "bg-primary/10" : "hover:bg-slate-100/50")}>
    {isActive && <motion.div layoutId="sb-act" className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-[3px] rounded-r-full bg-primary" transition={{type:"spring",stiffness:500,damping:35}}/>}
    <span className={cn("relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl transition-all", isActive ? "bg-primary/15 text-primary" : "text-slate-400 group-hover:text-slate-600 group-hover:bg-slate-100/50")}>
      <Icon className={cn("h-[18px] w-[18px]", isActive && "fill-current")}/></span>
    <AnimatePresence mode="wait">{!sidebarCollapsed && <motion.span initial={{opacity:0,width:0}} animate={{opacity:1,width:"auto"}} exit={{opacity:0,width:0}} className={cn("text-[13px] font-medium whitespace-nowrap overflow-hidden", isActive ? "text-primary" : "text-slate-500 group-hover:text-slate-700")}>{item.label}</motion.span>}</AnimatePresence>
  </Link>
}

export function Sidebar() {
  const { sidebarCollapsed, toggleSidebarCollapsed } = useUIStore()
  return <motion.aside animate={{width:sidebarCollapsed?72:256}} transition={{duration:.25,ease:"easeOut"}} className="relative flex h-screen flex-col border-r border-slate-200/50 bg-white/60 backdrop-blur-xl">
    <div className="flex h-14 items-center gap-3 px-4 border-b border-slate-200/40"><div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary shadow-sm"><Compass className="h-4 w-4 text-white"/></div>
      <AnimatePresence mode="wait">{!sidebarCollapsed && <motion.span initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="text-[15px] font-semibold text-text whitespace-nowrap">Level Up</motion.span>}</AnimatePresence></div>
    <nav className="flex-1 space-y-0.5 px-2 py-4 overflow-y-auto">{mainNavItems.map(item => <SidebarNavItem key={item.href} item={item}/>)}</nav>
    <div className="border-t border-slate-200/40 px-2 py-2.5 space-y-0.5">{bottomNavItems.map(item => <SidebarNavItem key={item.href} item={item}/>)}</div>
    <button onClick={toggleSidebarCollapsed} className="absolute -right-3 top-20 flex h-6 w-6 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-300 hover:text-slate-500 transition-colors">{sidebarCollapsed?<ChevronRight className="h-3 w-3"/>:<ChevronLeft className="h-3 w-3"/>}</button>
  </motion.aside>
}
