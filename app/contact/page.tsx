import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import {ArrowLeft, Mail, MapPin, Phone, ExternalLink} from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
      <div className="container py-10">
        <div className="flex items-center gap-2 mb-8">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4"/>
              <span className="sr-only">Back to home</span>
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Contact Jason</h1>
        </div>

        <div className="grid gap-8 md:grid-cols-2">


          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Please do feel free to contact me</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 mt-0.5 text-primary"/>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-sm text-muted-foreground"><Link href={"mailto:jason.bailey@imperial.ac.uk"}>jason.bailey@imperial.ac.uk</Link></p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <ExternalLink className="h-5 w-5 mt-0.5 text-primary"/>
                  <div>
                    <h3 className="font-medium">Linkedin</h3>
                    <p className="text-sm text-muted-foreground"><Link href={"https://www.linkedin.com/in/jasebailey/"}>https://www.linkedin.com/in/jasebailey</Link></p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 mt-0.5 text-primary"/>
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-sm text-muted-foreground">Department of Computing,
                      Imperial College London,
                      Huxley Building,
                      South Kensington Campus,
                      London, SW7 2AZ
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Office Hours</CardTitle>
                <CardDescription>When I'm available for meetings and consultations.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Monday - Friday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>

                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
  )
}

