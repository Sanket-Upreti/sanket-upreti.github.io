import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { ProjectGrid } from "@/components/project-grid"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container max-w-6xl px-4 py-10 mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Button>
          </Link>
        </div>

        <SectionHeading title="My Projects" />
        <p className="mt-2 text-gray-600">A collection of my work, side projects, and open-source contributions.</p>

        <ProjectGrid />
      </main>
    </div>
  )
}
