import Image from "next/image"

export default function AboutMe() {
  return (
    <main className="flex-1 px-8">
      {/* Hero Section */}
      <section className="py-24 md:py-32">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="flex items-center justify-center">
            <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-2xl bg-muted">
              <Image
                src="/tamara-portrait-2.png"
                alt="Tamara Schier"
                className="object-cover h-full"
                width={400}
                height={400}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl mb-4">
              {`Hi, I'm Tamara`}
            </h1>
            <p className="text-muted-foreground sm:text-base lg:text-lg">
              {`I've recently returned from living in Munich where I worked as a Product Designer. I currently reside in sunny Newcastle, Australia.`}
            </p>
            <p className="text-muted-foreground sm:text-base lg:text-lg">
              {`I have experience in working in the Insurance and Energy industries and have a background in Nursing. I've always had a passion for the creative side of things, and I knew I wanted to follow my interest in design which has led me to Product Design. `}
            </p>
            <p className="text-muted-foreground sm:text-base lg:text-lg">
              {`In my spare time I like to explore nature, relax with my family, and listen to and play music.`}
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}