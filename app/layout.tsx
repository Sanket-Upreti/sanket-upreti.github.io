import type { ReactNode } from "react";
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { CommandMenu } from "@/components/command-menu"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sanket Upreti",
  description: "Software Developer",
}

const RootLayout = ({
  children,
}: {
  children: ReactNode
}) => {
  return (
    <html lang="en" className="h-full">
      <body className={cn(inter.className, "min-h-full flex flex-col")}>
        <CommandMenu />
        <main className="flex-1">
          {children}
        </main>
        <footer className="py-6 mt-20 text-center text-gray-500 border-t">
          <p>© {new Date().getFullYear()} Sanket Upreti. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}

export default RootLayout;