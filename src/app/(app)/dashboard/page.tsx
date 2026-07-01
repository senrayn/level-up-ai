"use client"
import { PageContainer } from "@/components/layout/page-container"; import { Grid } from "@/components/layout/grid"
import { WorldHeader } from "@/components/layout/world-header"; import { HeroCard } from "@/components/dashboard/hero-card"
import { TodayQuests } from "@/components/dashboard/today-quests"; import { NextAction } from "@/components/dashboard/next-action"
import { AttributePanel } from "@/components/dashboard/attribute-panel"; import { AICoachCard } from "@/components/dashboard/ai-coach-card"
import { WeeklyChart } from "@/components/dashboard/weekly-chart"; import { MiniMap } from "@/components/dashboard/mini-map"
import { QuickActions } from "@/components/dashboard/quick-actions"; import { motion } from "framer-motion"

export default function DashboardPage() {
  return <PageContainer>
    <WorldHeader title="Home Base" subtitle="A warm hearth awaits. Your journey begins here — today's commissions are ready."/>
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.1}} className="mb-6"><NextAction/></motion.div>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <div className="lg:col-span-2 space-y-5">
        <motion.div initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{delay:.05}}><HeroCard/></motion.div>
        <motion.div initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{delay:.1}}><TodayQuests/></motion.div>
        <Grid cols={2} className="gap-5"><motion.div initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{delay:.15}}><QuickActions/></motion.div><motion.div initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{delay:.2}}><MiniMap/></motion.div></Grid>
      </div>
      <div className="space-y-5">
        <motion.div initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{delay:.12}}><AttributePanel/></motion.div>
        <motion.div initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{delay:.17}}><WeeklyChart/></motion.div>
        <motion.div initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{delay:.22}}><AICoachCard/></motion.div>
      </div></div></PageContainer>
}
