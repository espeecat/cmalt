import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { ProfileHeader } from "@/components/profile-header"
import { AreaCard } from "@/components/area-card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <span className="text-xl font-bold">CMALT Portfolio</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/operational-issues" className="text-sm font-medium hover:text-primary">
              Operational Issues
            </Link>
            <Link href="/teaching-learning" className="text-sm font-medium hover:text-primary">
              Teaching & Learning
            </Link>
            <Link href="/wider-context" className="text-sm font-medium hover:text-primary">
              Wider Context
            </Link>
            <Link href="/communication" className="text-sm font-medium hover:text-primary">
              Communication
            </Link>
            <Link href="/specialist" className="text-sm font-medium hover:text-primary">
              Specialist Option
            </Link>
            <Link href="/notes" className="text-sm font-medium hover:text-primary">
              WIP notes
            </Link>

          </nav>
          <div className="flex items-center gap-2">
            <ModeToggle />
            <Button asChild className="hidden md:flex">
              <Link href="/contact">Contact Jason Bailey</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="container py-10">
        <ProfileHeader />

        <section className="mt-16">
          <h2 className="text-3xl font-bold tracking-tight mb-6">CMALT Portfolio Areas</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AreaCard
              title="Operational Issues"
              description="Demonstrating an understanding of the constraints and benefits of different technologies."
              href="/operational-issues"
              icon="Settings"
            />
            <AreaCard
              title="Teaching, Learning & Assessment"
              description="Understanding and engaging with teaching, learning and assessment processes."
              href="/teaching-learning"
              icon="BookOpen"
            />
            <AreaCard
              title="Wider Context"
              description="Understanding and engaging with legislation, policies and standards."
              href="/wider-context"
              icon="Globe"
            />
            <AreaCard
              title="Communication"
              description="Communication and working with others when using learning technologies."
              href="/communication"
              icon="MessageSquare"
            />
            <AreaCard
              title="Specialist Option"
              description="Demonstrating specialist knowledge and application of learning technology."
              href="/specialist"
              icon="Star"
            />
            <div className="flex flex-col p-6 bg-muted/50 rounded-lg border hover:border-primary transition-colors">
              <div className="flex items-center justify-center h-full">
                <Button asChild variant="outline" className="w-full">
                  <Link href="/contact" className="flex items-center justify-center gap-2">
                    Contact Jason Bailey
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CMALT Portfolio.
          </p>
          {/*<div className="flex items-center gap-4">*/}
          {/*  <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">*/}
          {/*    Privacy Policy*/}
          {/*  </Link>*/}
          {/*  <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">*/}
          {/*    Terms of Service*/}
          {/*  </Link>*/}
          {/*</div>*/}
        </div>
      </footer>
    </div>
  )
}

