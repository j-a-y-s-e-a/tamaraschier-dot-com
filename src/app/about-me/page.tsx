export default function Home() {
  return (
    <main className="flex-1 px-4">
      <section id="about" className="py-20">
        <div>
          <h1 className="mb-12 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h1>
          <div>
            {`Hi, I'm Tamara. I've recently returned from living in Munich where I worked as a Product Designer. I currently reside in sunny Newcastle, Australia.`}
          </div>
          <div className="mt-6">
            {`I have experience in working in the Insurance and Energy industries and  have a background in Nursing. I've always had a passion for the creative side of things, and I knew I wanted to follow my interest in design`}
          </div>
        </div>
      </section>
      {/* <section id="contact" className="bg-muted/50 py-20">
        <div>
          <div className="mx-auto max-w-2xl space-y-8 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{`About Me`}</h1>
            <p className="text-muted-foreground md:text-xl">
              {`I'm currently available for freelance projects and full-time opportunities.`}
            </p>
          </div>
        </div>
      </section> */}
    </main>
  )
}