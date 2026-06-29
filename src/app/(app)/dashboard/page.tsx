import { PageContainer } from "@/components/layout/page-container"
import { Grid } from "@/components/layout/grid"
import { GlassCard } from "@/components/ui/glass-card"

export default function DashboardPage() {
  return (
    <PageContainer>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-text-primary">Welcome back, Adventurer</h2>
        <p className="mt-1 text-text-tertiary">Your journey continues. Complete today&apos;s quests to grow stronger.</p>
      </div>

      <Grid cols={3}>
        <GlassCard className="col-span-1 lg:col-span-2 min-h-[200px]">
          <div className="flex items-center justify-center h-full">
            <p className="text-text-tertiary">Hero Card — Coming in Phase 2</p>
          </div>
        </GlassCard>

        <GlassCard className="min-h-[200px]">
          <div className="flex items-center justify-center h-full">
            <p className="text-text-tertiary">Today&apos;s Tasks — Coming in Phase 2</p>
          </div>
        </GlassCard>

        <GlassCard className="min-h-[160px]">
          <div className="flex items-center justify-center h-full">
            <p className="text-text-tertiary">Mini Map — Coming in Phase 2</p>
          </div>
        </GlassCard>

        <GlassCard className="min-h-[160px]">
          <div className="flex items-center justify-center h-full">
            <p className="text-text-tertiary">AI Suggestion — Coming in Phase 2</p>
          </div>
        </GlassCard>

        <GlassCard className="min-h-[160px]">
          <div className="flex items-center justify-center h-full">
            <p className="text-text-tertiary">Attributes — Coming in Phase 2</p>
          </div>
        </GlassCard>
      </Grid>
    </PageContainer>
  )
}
