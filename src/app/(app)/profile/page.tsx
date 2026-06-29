import { PageContainer } from "@/components/layout/page-container"
import { GlassCard } from "@/components/ui/glass-card"

export default function Page() {
  return (
    <PageContainer maxWidth="narrow">
      <GlassCard className="min-h-[300px] flex items-center justify-center">
        <p className="text-text-tertiary">profile — Coming in Phase 2</p>
      </GlassCard>
    </PageContainer>
  )
}
