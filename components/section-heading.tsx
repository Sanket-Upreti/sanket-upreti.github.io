interface SectionHeadingProps {
  title: string
}

export function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <div className="flex items-center gap-2">
      <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      <div className="flex-1 h-px bg-gray-200"></div>
    </div>
  )
}
