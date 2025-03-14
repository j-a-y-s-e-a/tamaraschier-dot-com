import { ProjectCard } from "~/components/project-card"

export default function MyWork() {
  return (
    <main className="flex-1 px-4">
      <section className="py-24 md:py-32">
        <div className="flex flex-col justify-center md:max-w-[50%]">
          <h1 className="text-4xl font-semibold tracking-tighter sm:text-5xl md:text-6xl">
            {`Here's what I've been up to...`}
          </h1>
        </div>
      </section>

      {/* Projects Section */}
      <section id="product-design" className="py-20">
        <div>
          <h2 className="mb-12 text-3xl tracking-tighter sm:text-4xl md:text-5xl">Product Design</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {productDesign.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>
      <section id="bits-and-bobs" className="py-20">
        <div>
          <h2 className="mb-12 text-3xl tracking-tighter sm:text-4xl md:text-5xl">Bits & Bobs</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {bitsAndBobs.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

const productDesign = [
  {
    title: "Cassette",
    date: "Jan 2025 - Present",
    role: "UX/UI Design",
    image: "/cassette/card.png",
    link: "/my-work/cassette",
  },
  {
    title: "YourShare",
    date: "Oct 2022 - Mar 2023",
    role: "UX/UI Design",
    image: "/yourshare/card.png",
    link: "/my-work/yourshare",
  },
  {
    title: "Quick Vocab",
    date: "Sep 2022 - May 2023",
    role: "UX/UI Design",
    image: "/quick-vocab/card.png",
    link: "/my-work/quick-vocab",
  },
];

const bitsAndBobs = [
  {
    title: "Tamara Schier, Portfolio",
    date: "Mar 2025",
    role: "UX/UI Design",
    image: "/portfolio/card.png",
    link: "/my-work/portfolio",
  },
  {
    title: "Goodnotes Planner",
    date: "Aug 2023",
    role: "Design",
    image: "/goodnotes-planner/card.png",
    link: "/my-work/goodnotes-planner",
  },
  {
    title: "Donut Motion",
    date: "Jul 2023",
    role: "3D Modeling and Animation",
    image: "/donut-motion/card.png",
    link: "/my-work/donut-motion",
  },
]