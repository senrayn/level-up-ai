import { 
  LayoutDashboard, 
  Map, 
  GitBranch, 
  Heart, 
  Bot, 
  Users, 
  User, 
  Settings 
} from "lucide-react"

export interface NavItem {
  label: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  external?: boolean
}

export const mainNavItems: NavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Growth Map", href: "/map", icon: Map },
  { label: "Skill Tree", href: "/skills", icon: GitBranch },
  { label: "Companion", href: "/pet", icon: Heart },
  { label: "AI Coach", href: "/coach", icon: Bot },
  { label: "Social", href: "/social", icon: Users },
  { label: "Profile", href: "/profile", icon: User },
]

export const bottomNavItems: NavItem[] = [
  { label: "Settings", href: "/settings", icon: Settings },
]
