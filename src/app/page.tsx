import Link from "next/link"; import { Compass } from "lucide-react"
export default function LandingPage(){return <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden" style={{background:"linear-gradient(180deg,#EAF4FF 0%,#F7FBFF 40%,#FFFFFF 100%)"}}>
  <div className="relative z-10 flex flex-col items-center gap-8 text-center px-6">
    <div className="flex h-18 w-18 items-center justify-center rounded-2xl bg-primary shadow-sm"><Compass className="h-9 w-9 text-white"/></div>
    <div className="space-y-3"><h1 className="text-5xl font-bold text-text sm:text-6xl">Level Up</h1><p className="max-w-md text-lg text-slate-500">Your life, an epic adventure. Grow every day.</p></div>
    <div className="flex gap-4"><Link href="/dashboard" className="rounded-2xl bg-primary px-8 py-3 text-sm font-semibold text-white hover:bg-primary/90 transition-colors">Begin Adventure</Link><Link href="/onboarding" className="rounded-2xl border border-slate-200 bg-white/50 px-8 py-3 text-sm font-semibold text-slate-600 hover:bg-white transition-colors">New Adventurer</Link></div>
  </div></main>
}
