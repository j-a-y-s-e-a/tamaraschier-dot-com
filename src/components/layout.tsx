import Link from "next/link"
import { Dribbble, Instagram, Linkedin } from "lucide-react"

import Image from "next/image"

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="mx-auto w-full max-w-7xl">
        <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur-sm">
          <div className="flex h-16 items-center justify-between px-4">
            <div>
              <Link href="/" className="text-xl font-semibold">
                <Image
                  src="/tamara-profile.jpg"
                  alt="Tamara Schier"
                  className="object-cover"
                  width={46}
                  height={46}
                />
              </Link>
            </div>

            {/* Center: Navigation Links */}
            {/* <nav className="flex items-center justify-center gap-6">
              <Link href="/my-work" className="text-sm font-light hover:text-primary">
                My Work
              </Link>
              <Link href="/about-me" className="text-sm font-light hover:text-primary">
                About Me
              </Link>
            </nav> */}

            {/* Right: Social Links */}
            <div className="flex items-center justify-end gap-4">
              <Link href="https://www.instagram.com/tamaraschierux/" className="text-sm text-muted-foreground hover:text-foreground" target="_blank">
                <Instagram size={14} />
              </Link>
              <Link href="https://dribbble.com/_tamaraschier" className="text-sm text-muted-foreground hover:text-foreground" target="_blank">
                <Dribbble size={14} />
              </Link>
              <Link href="https://www.linkedin.com/in/tamara-schier/" className="text-sm text-muted-foreground hover:text-foreground" target="_blank">
                <Linkedin size={14} />
              </Link>
            </div>
          </div>
        </header>
        {children}
        <footer className="border-t py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row px-4">
            <p className="text-sm text-muted-foreground">2025 Tamara Schier</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
