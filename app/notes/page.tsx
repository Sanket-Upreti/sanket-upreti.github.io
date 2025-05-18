import Link from "next/link"
import { ArrowLeft, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { NoteCard } from "@/components/note-card"
import { NoteEditor } from "@/components/note-editor"

export default function NotesPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container max-w-4xl px-4 py-10 mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Button>
          </Link>
        </div>

        <SectionHeading title="Notes" />
        <p className="mt-2 text-gray-600">Thoughts, ideas, and learnings from my journey as a developer.</p>

        <div className="grid gap-6 mt-8 md:grid-cols-2">
          <NoteCard
            title="Getting Started with TypeScript"
            excerpt="TypeScript adds static typing to JavaScript, making it easier to catch errors early and improve code quality."
            date="May 10, 2023"
            tags={["TypeScript", "JavaScript", "Web Development"]}
          />
          <NoteCard
            title="React Performance Optimization"
            excerpt="Learn how to use React.memo, useMemo, and useCallback to prevent unnecessary re-renders and improve performance."
            date="April 22, 2023"
            tags={["React", "Performance", "JavaScript"]}
          />
          <NoteCard
            title="Building RESTful APIs with Node.js"
            excerpt="A comprehensive guide to building scalable and maintainable RESTful APIs using Node.js and Express."
            date="March 15, 2023"
            tags={["Node.js", "API", "Backend"]}
          />
          <NoteCard
            title="CSS Grid vs Flexbox"
            excerpt="Understanding when to use CSS Grid and when to use Flexbox for modern web layouts."
            date="February 28, 2023"
            tags={["CSS", "Web Design", "Frontend"]}
          />
          <NoteCard
            title="Introduction to GraphQL"
            excerpt="GraphQL provides a more efficient, powerful and flexible alternative to REST for developing APIs."
            date="January 15, 2023"
            tags={["GraphQL", "API", "Web Development"]}
          />
          <NoteCard
            title="JavaScript Promises and Async/Await"
            excerpt="A deep dive into asynchronous JavaScript patterns and best practices."
            date="December 10, 2022"
            tags={["JavaScript", "Async", "Web Development"]}
          />
        </div>

      </main>
    </div>
  )
}
