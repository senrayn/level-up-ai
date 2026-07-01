import { Compass, Map, Sparkles, Heart, Wand2, Users, ScrollText, Settings } from "lucide-react"
export interface NavItem { label: string; href: string; icon: React.ComponentType<{ className?: string }>; external?: boolean }
export const mainNavItems: NavItem[] = [
  { label: "Home Base", href: "/dashboard", icon: Compass }, { label: "World Map", href: "/map", icon: Map },
  { label: "Constellation", href: "/skills", icon: Sparkles }, { label: "Companion", href: "/pet", icon: Heart },
  { label: "Mentor", href: "/coach", icon: Wand2 }, { label: "Guild Hall", href: "/social", icon: Users },
  { label: "Archive", href: "/profile", icon: ScrollText },
]
export const bottomNavItems: NavItem[] = [{ label: "Handbook", href: "/settings", icon: Settings }]
