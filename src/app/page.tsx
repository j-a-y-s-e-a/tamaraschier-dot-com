import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "~/components/ui/button"
import { ProjectCard } from "~/components/project-card"

export default function Home() {
  return (
    <main className="flex-1 px-4">
      {/* Hero Section */}
      <section className="py-24 md:py-32">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col justify-center space-y-4 mx-auto">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              {`Hi,`}
              <br />
              {`I'm Tamara`}
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              {`I'm a Product Designer based in Newcastle, Australia`}
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="https://www.figma.com/design/hD2Mh8sCRCj5aB0f7GET3R/Tamara-Schier-CV-2025" target="_blank">
                  {`Checkout my CV`}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="mailto:tamaraschierux@gmail.com">{`Get in touch`}</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-2xl bg-muted">
              <Image
                src="/tamara-profile.jpg"
                alt="Tamara Schier"
                className="object-cover h-full"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      {/* <section id="work" className="py-20">
        <div>
          <h2 className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projects</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section> */}
    </main>
  )
}

const projects = [
  {
    title: "Kassette",
    date: "Jan 2025 - Present",
    role: "UX/UI Design",
    image: "/your-share-banner.png",
    link: "/projects/kassette",
  },
  {
    title: "YourShare",
    date: "Oct 2022 - Mar 2023",
    role: "UX/UI Design",
    image: "/your-share-banner.png",
    link: "/projects/yourshare",
  },
  {
    title: "Quick Vocab",
    date: "Sep 2022 - May 2023",
    role: "UX/UI Design",
    image: "/your-share-banner.png",
    link: "/projects/quick-vocab",
  },
]