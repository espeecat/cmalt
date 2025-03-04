import Link from "next/link"
import { Settings, BookOpen, Globe, MessageSquare, Star, type LucideIcon } from "lucide-react"

interface AreaCardProps {
  title: string
  description: string
  href: string
  icon: string
}

export function AreaCard({ title, description, href, icon }: AreaCardProps) {
  const IconMap: Record<string, LucideIcon> = {
    Settings,
    BookOpen,
    Globe,
    MessageSquare,
    Star,
  }

  const Icon = IconMap[icon] || Settings

  return (
    <Link href={href}>
      <div className="flex flex-col p-6 bg-muted/50 rounded-lg border hover:border-primary transition-colors h-full">
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </Link>
  )
}

