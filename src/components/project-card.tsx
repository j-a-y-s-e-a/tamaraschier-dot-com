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
      <div className="aspect-video overflow-hidden">
        <Image
          src={image ?? "/your-share-banner.png"}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          width={800}
          height={600}
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
