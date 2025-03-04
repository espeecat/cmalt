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

            <Card>
              <CardHeader>
                <CardTitle>Huxley Building</CardTitle>
                <CardContent className="space-y-4">
                  <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.775012916761!2d-0.1815856233804082!3d51.498996071811376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876055c7df7c537%3A0x2541470e75df5fe0!2sHuxley%20Building!5e0!3m2!1sen!2suk!4v1741124910800!5m2!1sen!2suk"
                      width="400" height="300"   loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"></iframe>
                </CardContent>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
  )
}

