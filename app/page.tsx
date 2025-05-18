import Link from "next/link"
import { ArrowRight, FileText, Github, Linkedin, Newspaper  } from "lucide-react"

import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/hero-section"
import { ProjectCard } from "@/components/project-card"
import { SectionHeading } from "@/components/section-heading"
import { projects } from "@/data/projects"
import { GITHUB_URL, LINKEDIN_URL, MEDIUM_URL } from "@/constants"
import { skills } from "@/data/skills"
  
export default function Home() {
  const featuredProjects = projects.slice(0, 4)

  return (
    <div className="min-h-screen bg-white">
      <main className="container max-w-4xl px-4 py-10 mx-auto">
        <HeroSection />

        <section className="mt-20">
          <SectionHeading title="About Me" />
          <div className="mt-6 space-y-4 text-gray-600">
            <p>
              I'm a software developer specializing in JavaScript frontend and backend technologies. My expertise spans
              across modern frameworks like React, Next.js, and Node.js, allowing me to build complete, scalable web
              applications.
            </p>
            <p>
              With a passion for clean code and intuitive user experiences, I strive to create digital solutions that
              are both functional and delightful to use.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-6">
            {skills.map((skill) => (
              <div key={skill} className="px-3 py-1 text-sm bg-gray-100 rounded-full">
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <SectionHeading title="Projects" />
          <div className="grid gap-6 mt-6 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                tags={project.tags}
                link={`/projects/${project.id}`}
                image={project.image}
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/projects">
              <Button variant="outline" className="gap-2">
                View All Projects <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>

        <section className="mt-20">
          <SectionHeading title="Notes" />
          <p className="mt-2 text-gray-600">Thoughts, ideas, and learnings from my journey as a developer.</p>
          <div className="grid gap-4 mt-6">
            <Link href="/notes" className="p-4 transition-colors border border-gray-200 rounded-lg hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Getting Started with TypeScript</h3>
                  <p className="text-sm text-gray-500">A beginner's guide to TypeScript fundamentals</p>
                </div>
                <FileText className="w-5 h-5 text-gray-400" />
              </div>
            </Link>
            <Link href="/notes" className="p-4 transition-colors border border-gray-200 rounded-lg hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">React Performance Optimization</h3>
                  <p className="text-sm text-gray-500">Techniques to improve React application performance</p>
                </div>
                <FileText className="w-5 h-5 text-gray-400" />
              </div>
            </Link>
            <Link href="/notes" className="p-4 transition-colors border border-gray-200 rounded-lg hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Building RESTful APIs with Node.js</h3>
                  <p className="text-sm text-gray-500">Best practices for API development</p>
                </div>
                <FileText className="w-5 h-5 text-gray-400" />
              </div>
            </Link>
          </div>

          <div className="mt-10 text-center">
            <Link href="/notes">
              <Button variant="outline" className="gap-2">
                View All Notes <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>

        <section className="mt-20">
          <SectionHeading title="Connect" />
          <div className="flex flex-wrap gap-4 mt-6">
            <Link href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="gap-2">
                <Github className="w-4 h-4" /> GitHub
              </Button>
            </Link>
            <Link href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="gap-2">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </Button>
            </Link>
            <Link href={MEDIUM_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="gap-2">
                <Newspaper className="w-4 h-4" /> Medium
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
