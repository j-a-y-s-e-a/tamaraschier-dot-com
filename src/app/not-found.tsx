import { Section } from "~/components/layout/section"

function NotFoundPage() {
  return (
    <main className="flex-1 px-4">
      <Section>
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col justify-center space-y-4 mx-auto">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              {`Sorry, This page is being reworked.`}
              <br />
              <br />
              {`Please check back soon!`}
            </h1>
          </div>
        </div>
      </Section>
    </main>
  )
}

export default NotFoundPage