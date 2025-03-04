import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {ArrowLeft, FileText, LinkIcon, Upload} from "lucide-react"
import Link from "next/link"

export default function WiderContextPage() {
  return (
      <div className="container py-10">
        <div className="flex items-center gap-2 mb-8">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4"/>
              <span className="sr-only">Back to home</span>
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">The Wider Context</h1>
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
                <h2 className="text-xl font-semibold mb-4">Understanding the Wider Context</h2>
                <p className="mb-4">
                  This section demonstrates my understanding of and engagement with legislation, policies, and
                  standards.
                  It covers:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Understanding and engaging with legislation, policies and standards</li>
                  <li>Policy development and implementation</li>
                  <li>Awareness of national and international perspectives on educational technology</li>
                  <li>Ethical considerations in the use of learning technology</li>
                </ul>
                <p>
                  Through the evidence and reflection provided, I demonstrate how I navigate the complex landscape of
                  policies, standards, and ethical considerations that impact the use of learning technology.
                </p>
              </TabsContent>
              <TabsContent value="evidence" className="space-y-4 p-4 border rounded-md mt-2">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Evidence</h2>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Accessibility Policy Development</CardTitle>
                      <CardDescription>Institutional policy and implementation plan</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Documentation of my role in developing and implementing an institutional accessibility policy
                        for
                        digital learning resources, ensuring compliance with relevant legislation.
                      </p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="gap-2">
                          <FileText className="h-4 w-4"/>
                          View Policy Document
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Data Protection Impact Assessment</CardTitle>
                      <CardDescription>GDPR compliance for learning technologies</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        A data protection impact assessment I conducted for a new learning analytics system,
                        demonstrating
                        my understanding of data protection legislation and ethical considerations.
                      </p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="gap-2">
                          <FileText className="h-4 w-4"/>
                          View Assessment
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="reflection" className="p-4 border rounded-md mt-2">
                <h2 className="text-xl font-semibold mb-4">Reflection</h2>
                <p className="mb-4">
                  Navigating the wider context of learning technology has been one of the most challenging aspects of my
                  professional practice. Balancing innovation with compliance, and ethical considerations with practical
                  constraints, requires careful judgment.
                </p>
                <p className="mb-4">
                  I've found that staying informed about emerging policies and standards is essential, as is engaging
                  with
                  professional networks and communities of practice. These connections provide valuable insights and
                  perspectives that help me interpret and apply policies in my specific context.
                </p>
                <p>
                  Looking ahead, I'm particularly interested in how emerging ethical frameworks for artificial
                  intelligence in education will shape learning technology practice. I believe that developing ethical
                  literacy among learning technology professionals will be increasingly important as these technologies
                  become more prevalent.
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
                  <LinkIcon className="h-5 w-5 mt-0.5 text-muted-foreground"/>
                  <div>
                    <h3 className="font-medium">Regulatory Frameworks</h3>
                    <p className="text-sm text-muted-foreground">Key legislation affecting learning technology</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Upload className="h-5 w-5 mt-0.5 text-muted-foreground"/>
                  <div>
                    <h3 className="font-medium">International Standards</h3>
                    <p className="text-sm text-muted-foreground">Documentation on relevant standards</p>
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
                    <div className="h-2 w-2 rounded-full bg-primary"/>
                    <span>Policy development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"/>
                    <span>Accessibility compliance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"/>
                    <span>Data protection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"/>
                    <span>Ethical analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"/>
                    <span>Standards implementation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
  )
}

