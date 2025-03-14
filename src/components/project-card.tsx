import Link from "next/link"
import Image from "next/image"

export interface ProjectCardProps {
  title: string
  date: string
  role: string
  image?: string
  link: string
}

export function ProjectCard({ title, date, role, image, link }: ProjectCardProps) {
  return (
    <Link
      href={link}
      className="group block overflow-hidden rounded-lg border bg-background transition-all hover:shadow-md"
    >
      <div className="aspect-square overflow-hidden">
        <Image
          src={image!}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          width={400}
          height={400}
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="text-sm text-muted-foreground flex gap-2">
          <span>{role}</span>
          <span>•</span>
          <span>{date}</span>
        </div>
      </div>
    </Link>
  )
}
