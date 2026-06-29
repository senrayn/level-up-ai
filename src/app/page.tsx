import Link from "next/link"
import { Zap } from "lucide-react"

export default function LandingPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-bg-primary">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(108,92,231,0.08),transparent_50%)]" />
      
      <div className="relative z-10 flex flex-col items-center gap-8 text-center px-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent-secondary shadow-[0_0_40px_rgba(108,92,231,0.3)]">
          <Zap className="h-8 w-8 text-white" />
        </div>
        
        <div className="space-y-3">
          <h1 className="text-5xl font-bold tracking-tight text-text-primary sm:text-6xl">
            Level Up
          </h1>
          <p className="max-w-md text-lg text-text-secondary">
            Turn real life into an RPG game. Learn, build, grow — 
            guided by AI, powered by play.
          </p>
        </div>

        <div className="flex gap-4">
          <Link
            href="/dashboard"
            className="rounded-2xl bg-accent px-8 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(108,92,231,0.3)] hover:shadow-[0_0_30px_rgba(108,92,231,0.4)] transition-shadow duration-300"
          >
            Enter the Game
          </Link>
          <Link
            href="/onboarding"
            className="rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] px-8 py-3 text-sm font-semibold text-text-secondary hover:text-text-primary hover:border-[rgba(255,255,255,0.10)] transition-all duration-200"
          >
            New Adventurer
          </Link>
        </div>
      </div>
    </main>
  )
}
