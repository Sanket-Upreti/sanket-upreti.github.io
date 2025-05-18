import { ProjectCard } from "@/components/project-card"
import { projects } from "@/data/projects"

export function ProjectGrid() {
  return (
    <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
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
  )
}
