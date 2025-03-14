import type React from "react"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <main className="py-12 px-4">
      <article className="prose prose-slate max-w-none dark:prose-invert">{children}</article>

      {/* Next Project
      <section className="mt-20 pt-10 border-t">
        <h2 className="text-2xl font-semibold mb-6">Next Project</h2>
        <Link
          href="#"
          className="group block overflow-hidden rounded-lg border bg-background transition-all hover:shadow-md"
        >
          <div className="grid md:grid-cols-2">
            <div className="aspect-video overflow-hidden">
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Next project preview"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6 flex flex-col justify-center">
              <h3 className="text-xl font-semibold mb-2">Mobile App Design</h3>
              <p className="mb-4 text-muted-foreground">
                User-centered design for a healthcare management application.
              </p>
              <p className="text-primary">View project →</p>
            </div>
          </div>
        </Link>
      </section> */}
    </main>
  )
}

