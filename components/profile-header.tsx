import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import {Button} from "@/components/ui/button"
import {Badge} from "@/components/ui/badge"
import {Download, Mail} from "lucide-react"
import Link from "next/link"

export function ProfileHeader() {
  return (
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <Avatar className="h-32 w-32">
            <AvatarImage src="jason-small.jpg" alt="Jason Bailey Profile"/>
          </Avatar>
          <div className="flex flex-col items-center gap-2 md:items-start">
            <h1 className="text-3xl font-bold">Dr Jason Bailey</h1>
            <p className="text-muted-foreground">Edtech Software Developer</p>
            <div className="flex flex-wrap gap-2">
              {/*<Badge variant="secondary">CMALT Certified</Badge>*/}
              <Badge variant="secondary">Software Developmen</Badge>
              <Badge variant="secondary">Educational Technology</Badge>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <div className="rounded-lg border bg-card p-6">
            <h2 className="text-xl font-semibold mb-4">About Me</h2>
            <p className="text-muted-foreground mb-4">
              I am a Edtech Software Developer with over 10 years of experience in Educational Technology.
              My CMALT portfolio demonstrates my commitment to best
              practices in learning technology and continuous professional development.
            </p>
            <p className="text-muted-foreground mb-4">
              NB This is WIP
            </p>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <Download className="h-4 w-4"/>
                Download CV
              </Button>
              <Button variant="outline" size="sm" className="gap-2" asChild>
                <Link href="/contact">
                  <Mail className="h-4 w-4"/>
                  Contact Me
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
  )
}

