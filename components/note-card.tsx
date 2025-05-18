import { Calendar, Tag } from "lucide-react"
import Link from "next/link"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface NoteCardProps {
  title: string
  excerpt: string
  date: string
  tags: string[]
}

export function NoteCard({ title, excerpt, date, tags }: NoteCardProps) {
  return (
    <Link href={`/notes/${title.toLowerCase().replace(/\s+/g, "-")}`}>
      <Card className="h-full transition-all duration-300 cursor-pointer hover:shadow-md">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">{excerpt}</p>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <div key={tag} className="flex items-center gap-1 px-2 py-1 text-xs bg-gray-100 rounded-full">
                <Tag className="w-3 h-3" />
                {tag}
              </div>
            ))}
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}
