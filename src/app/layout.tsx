import type { Metadata } from "next"
import { siteConfig } from "@/config/site"
import { Providers } from "./providers"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased" style={{
        background: "#0A0A0B",
        color: "#FAFAFA",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
      }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
