import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { notFound } from "next/navigation"

import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { projects } from "@/data/projects"

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <main className="container max-w-4xl px-4 py-10 mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Link href="/projects">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" /> Back to Projects
            </Button>
          </Link>
        </div>

        <div className="overflow-hidden rounded-lg">
          <Image
            src={project.image ?? "/placeholder.svg"}
            alt={project.title}
            width={800}
            height={450}
            className="object-cover w-full h-auto"
          />
        </div>

        <div className="mt-8">
          <h1 className="text-3xl font-bold">{project.title}</h1>
          <p className="mt-4 text-lg text-gray-600">{project.longDescription}</p>

          <div className="flex flex-wrap gap-2 mt-6">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 text-sm bg-gray-100 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <Button className="gap-2">
                Live Demo <ExternalLink className="w-4 h-4" />
              </Button>
            </Link>
            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2">
                View Code <Github className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="mt-12">
            <SectionHeading title="Features" />
            <ul className="mt-4 ml-6 space-y-2 list-disc">
              {project.features.map((feature, index) => (
                <li key={index} className="text-gray-600">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12">
            <SectionHeading title="Technologies Used" />
            <ul className="mt-4 ml-6 space-y-2 list-disc">
              {project.technologies.map((tech, index) => (
                <li key={index} className="text-gray-600">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}
