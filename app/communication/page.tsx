import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, FileText, LinkIcon, Upload } from "lucide-react"
import Link from "next/link"

export default function CommunicationPage() {
  return (
    <div className="container py-10">
      <div className="flex items-center gap-2 mb-8">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back to home</span>
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Communication & Working with Others</h1>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <Tabs defaultValue="overview">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="evidence">Evidence</TabsTrigger>
              <TabsTrigger value="reflection">Reflection</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="p-4 border rounded-md mt-2">
              <h2 className="text-xl font-semibold mb-4">Communication & Working with Others</h2>
              <p className="mb-4">
                This section demonstrates my ability to communicate and work effectively with others when using learning
                technology. It covers:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Communication with colleagues, learners, and other stakeholders</li>
                <li>Collaborative work with learning technology</li>
                <li>Building and supporting learning technology communities</li>
                <li>Influencing organizational policies and practices</li>
              </ul>
              <p>
                Through the evidence and reflection provided, I demonstrate how I communicate effectively about learning
                technology and work collaboratively with diverse stakeholders.
              </p>
            </TabsContent>
            <TabsContent value="evidence" className="space-y-4 p-4 border rounded-md mt-2">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Evidence</h2>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Faculty Development Program</CardTitle>
                    <CardDescription>Training and support for teaching staff</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Documentation of a faculty development program I designed and delivered, focusing on effective use
                      of learning technologies. Includes training materials, participant feedback, and impact
                      evaluation.
                    </p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="gap-2">
                        <FileText className="h-4 w-4" />
                        View Program Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Cross-Departmental Project</CardTitle>
                    <CardDescription>Collaborative technology implementation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      A case study of a cross-departmental project I led, demonstrating my ability to work
                      collaboratively with diverse stakeholders to implement learning technology solutions.
                    </p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="gap-2">
                        <FileText className="h-4 w-4" />
                        View Case Study
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="reflection" className="p-4 border rounded-md mt-2">
              <h2 className="text-xl font-semibold mb-4">Reflection</h2>
              <p className="mb-4">
                Effective communication has been central to my success as a learning technology professional. I've found
                that the ability to translate technical concepts for non-technical audiences is particularly valuable,
                as is the ability to understand and address the concerns of different stakeholders.
              </p>
              <p className="mb-4">
                Collaborative work presents both challenges and opportunities. While coordinating diverse perspectives
                and priorities can be complex, the resulting solutions are often more robust and widely adopted than
                those developed in isolation.
              </p>
              <p>
                Looking ahead, I aim to continue developing my skills in building and supporting communities of practice
                around learning technology. I believe that sustainable innovation depends on creating spaces where
                practitioners can share experiences, challenges, and solutions.
              </p>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Resources</CardTitle>
              <CardDescription>Supporting materials and links</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-2">
                <LinkIcon className="h-5 w-5 mt-0.5 text-muted-foreground" />
                <div>
                  <h3 className="font-medium">Communication Strategies</h3>
                  <p className="text-sm text-muted-foreground">Frameworks for effective communication</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Upload className="h-5 w-5 mt-0.5 text-muted-foreground" />
                <div>
                  <h3 className="font-medium">Stakeholder Feedback</h3>
                  <p className="text-sm text-muted-foreground">Testimonials and evaluation data</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Core Competencies</CardTitle>
              <CardDescription>Key skills demonstrated in this area</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Stakeholder engagement</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Training and facilitation</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Project coordination</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Community building</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Change management</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

