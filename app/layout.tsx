import "./globals.css"
import { Inter } from "next/font/google"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { getNavItems } from "@/lib/nav"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Minimal Docs Site",
  description: "A gorgeous minimal documentation site using Next.js App Router",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const navItems = getNavItems()

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <SidebarProvider>
          <AppSidebar navItems={navItems} />
          <SidebarTrigger className="ml-3 mt-3" />
          <main className="flex-1 overflow-auto p-8 pt-16">{children}</main>
        </SidebarProvider>
      </body>
    </html>
  )
}
