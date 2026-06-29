import { GlassCard } from "@/components/ui/glass-card"

export default function OnboardingPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-bg-primary">
      <GlassCard variant="xl" className="w-full max-w-lg p-12 text-center">
        <h1 className="text-2xl font-semibold text-text-primary">Choose your path</h1>
        <p className="mt-2 text-text-tertiary">Onboarding — Coming in Phase 2</p>
      </GlassCard>
    </main>
  )
}
