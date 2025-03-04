import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, FileText, LinkIcon, Upload } from "lucide-react"
import Link from "next/link"

export default function SpecialistPage() {
  return (
    <div className="container py-10">
      <div className="flex items-center gap-2 mb-8">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back to home</span>
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Specialist Option</h1>
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
              <h2 className="text-xl font-semibold mb-4">Specialist Area: Learning Analytics</h2>
              <p className="mb-4">
                This section demonstrates my specialist knowledge and application of learning analytics. It covers:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Theoretical understanding of learning analytics principles and methods</li>
                <li>Practical implementation of learning analytics systems</li>
                <li>Ethical considerations in learning analytics</li>
                <li>Data-informed decision making in educational contexts</li>
              </ul>
              <p>
                Through the evidence and reflection provided, I demonstrate how I have developed and applied specialist
                knowledge in learning analytics to enhance educational practices.
              </p>
            </TabsContent>
            <TabsContent value="evidence" className="space-y-4 p-4 border rounded-md mt-2">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Evidence</h2>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Learning Analytics Dashboard</CardTitle>
                    <CardDescription>Design and implementation of analytics tools</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Documentation of a learning analytics dashboard I designed and implemented, including the design
                      process, technical implementation, and evaluation of its impact on teaching and learning.
                    </p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="gap-2">
                        <FileText className="h-4 w-4" />
                        View Project Documentation
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Research Publication</CardTitle>
                    <CardDescription>Academic contribution to the field</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      A research paper I published on the ethical implications of learning analytics, demonstrating my
                      theoretical understanding and contribution to the field.
                    </p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="gap-2">
                        <FileText className="h-4 w-4" />
                        View Publication
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="reflection" className="p-4 border rounded-md mt-2">
              <h2 className="text-xl font-semibold mb-4">Reflection</h2>
              <p className="mb-4">
                My journey into learning analytics began with a curiosity about how data could inform educational
                practice. Over time, this has developed into a deep specialist knowledge that combines technical skills
                with educational understanding.
              </p>
              <p className="mb-4">
                One of the key challenges I've encountered is balancing the potential of learning analytics with ethical
                considerations, particularly around privacy, consent, and the risk of reinforcing existing biases. I've
                found that involving diverse stakeholders in the design and implementation of learning analytics systems
                is essential for addressing these challenges.
              </p>
              <p>
                Looking ahead, I'm particularly interested in how learning analytics can support more personalized and
                inclusive educational experiences. I believe that the field is moving beyond simple descriptive
                analytics towards more sophisticated approaches that can provide actionable insights for educators and
                learners.
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
                  <h3 className="font-medium">Analytics Frameworks</h3>
                  <p className="text-sm text-muted-foreground">Theoretical models and approaches</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Upload className="h-5 w-5 mt-0.5 text-muted-foreground" />
                <div>
                  <h3 className="font-medium">Technical Documentation</h3>
                  <p className="text-sm text-muted-foreground">System architecture and implementation</p>
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
                  <span>Data analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Dashboard design</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Ethical assessment</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Research methodology</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Data visualization</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

