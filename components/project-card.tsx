import { ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  link: string
  image?: string
}

export function ProjectCard({ title, description, tags, link, image }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
      {image && (
        <div className="overflow-hidden h-48">
          <Image
            src={image || "/placeholder.svg?height=400&width=600"}
            alt={title}
            width={600}
            height={400}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="px-2 py-1 text-xs bg-gray-100 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={link}
          className="flex items-center gap-1 text-sm text-gray-600 transition-colors hover:text-gray-900"
        >
          View Details <ExternalLink className="w-3 h-3" />
        </Link>
      </CardFooter>
    </Card>
  )
}
