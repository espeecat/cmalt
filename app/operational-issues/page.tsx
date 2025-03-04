import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {ArrowLeft, FileText, LinkIcon, Upload} from "lucide-react"
import Link from "next/link"

export default function OperationalIssuesPage() {
  return (
      <div className="container py-10">
        <div className="flex items-center gap-2 mb-8">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4"/>
              <span className="sr-only">Back to home</span>
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Operational Issues</h1>
        </div>


        <h2 className="text-3xl font-bold">1a</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <Tabs defaultValue="overview">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="evidence">Evidence</TabsTrigger>
                <TabsTrigger value="reflection">Reflection</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="p-4 border rounded-md mt-2">
                <h2 className="text-xl font-semibold mb-4">Understanding Operational Issues</h2>
                <p>
                  You should show how you have used or supported others to use technology appropriately, given the
                  constraints and benefits it provides within your context. You should consider how you compared and
                  contrasted the constraints and benefits of diﬀerent technologies to meet the specific needs of users
                  (students or staﬀ).


                </p>

                <p className="mb-4">
                  This section demonstrates my understanding of the constraints and benefits of different technologies
                  in
                  my professional context. It covers:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Technical knowledge and ability in the use of learning technology</li>
                  <li>Supporting the deployment of learning technologies</li>
                  <li>Technical knowledge and ability in the development/implementation of learning technologies</li>
                  <li>Managing the deployment of learning technologies</li>
                </ul>
                <p>
                  Through the evidence and reflection provided, I demonstrate how I select and use appropriate
                  technologies for specific contexts and purposes, showing awareness of the benefits and limitations of
                  different technologies.
                </p>
              </TabsContent>
              <TabsContent value="evidence" className="space-y-4 p-4 border rounded-md mt-2">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Evidence</h2>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">LMS Implementation Project</CardTitle>
                      <CardDescription>Technical documentation and project plan</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Documentation of the implementation of a new Learning Management System, including technical
                        requirements, deployment strategy, and user training materials.
                      </p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="gap-2">
                          <FileText className="h-4 w-4"/>
                          View Document
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Technology Evaluation Report</CardTitle>
                      <CardDescription>Comparative analysis of learning technologies</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        A detailed report comparing different learning technologies, evaluating their benefits,
                        limitations, and suitability for specific educational contexts.
                      </p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="gap-2">
                          <FileText className="h-4 w-4"/>
                          View Report
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="reflection" className="p-4 border rounded-md mt-2">
                <h2 className="text-xl font-semibold mb-4">Reflection</h2>
                <p className="mb-4">
                  My approach to operational issues in learning technology has evolved significantly over my career.
                  I've
                  learned that successful technology implementation requires not just technical knowledge, but also a
                  deep
                  understanding of the educational context and user needs.
                </p>
                <p className="mb-4">
                  One of the key challenges I've faced is balancing innovation with reliability. While new technologies
                  offer exciting possibilities, they must be thoroughly tested and supported to ensure they enhance
                  rather
                  than hinder the learning experience.
                </p>
                <p>
                  Moving forward, I aim to continue developing my technical skills while also focusing on how technology
                  can be used to address specific pedagogical challenges. I believe that the most effective learning
                  technology professionals are those who can bridge the gap between technical possibilities and
                  educational needs.
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
                    <h3 className="font-medium">ALT CMALT Guidelines</h3>
                    <p className="text-sm text-muted-foreground">
                      Official guidelines for the Operational Issues section
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Upload className="h-5 w-5 mt-0.5 text-muted-foreground"/>
                  <div>
                    <h3 className="font-medium">Technical Skills Portfolio</h3>
                    <p className="text-sm text-muted-foreground">Documentation of technical competencies</p>
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
                    <span>Technical troubleshooting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"/>
                    <span>System implementation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"/>
                    <span>Technology evaluation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"/>
                    <span>User training and support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"/>
                    <span>Project management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <h2 className="text-3xl font-bold">1b use of edtech/programming</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <Tabs defaultValue="overview">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="evidence">Evidence</TabsTrigger>
                <TabsTrigger value="reflection">Reflection</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="p-4 border rounded-md mt-2">
                <h2 className="text-xl font-semibold mb-4">Understanding Operational Issues</h2>
                <p className="mb-4">
                  This section demonstrates my understanding of the constraints and benefits of different technologies
                  in
                  my professional context. It covers:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Technical knowledge and ability in the use of learning technology</li>
                  <li>Supporting the deployment of learning technologies</li>
                  <li>Technical knowledge and ability in the development/implementation of learning technologies</li>
                  <li>Managing the deployment of learning technologies</li>
                </ul>
                <p>
                  Through the evidence and reflection provided, I demonstrate how I select and use appropriate
                  technologies for specific contexts and purposes, showing awareness of the benefits and limitations of
                  different technologies.
                </p>
              </TabsContent>
              <TabsContent value="evidence" className="space-y-4 p-4 border rounded-md mt-2">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Evidence</h2>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">LMS Implementation Project</CardTitle>
                      <CardDescription>Technical documentation and project plan</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Documentation of the implementation of a new Learning Management System, including technical
                        requirements, deployment strategy, and user training materials.
                      </p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="gap-2">
                          <FileText className="h-4 w-4"/>
                          View Document
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Technology Evaluation Report</CardTitle>
                      <CardDescription>Comparative analysis of learning technologies</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        A detailed report comparing different learning technologies, evaluating their benefits,
                        limitations, and suitability for specific educational contexts.
                      </p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="gap-2">
                          <FileText className="h-4 w-4"/>
                          View Report
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="reflection" className="p-4 border rounded-md mt-2">
                <h2 className="text-xl font-semibold mb-4">Reflection</h2>
                <p className="mb-4">
                  My approach to operational issues in learning technology has evolved significantly over my career.
                  I've
                  learned that successful technology implementation requires not just technical knowledge, but also a
                  deep
                  understanding of the educational context and user needs.
                </p>
                <p className="mb-4">
                  One of the key challenges I've faced is balancing innovation with reliability. While new technologies
                  offer exciting possibilities, they must be thoroughly tested and supported to ensure they enhance
                  rather
                  than hinder the learning experience.
                </p>
                <p>
                  Moving forward, I aim to continue developing my technical skills while also focusing on how technology
                  can be used to address specific pedagogical challenges. I believe that the most effective learning
                  technology professionals are those who can bridge the gap between technical possibilities and
                  educational needs.
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
                    <h3 className="font-medium">ALT CMALT Guidelines</h3>
                    <p className="text-sm text-muted-foreground">
                      Official guidelines for the Operational Issues section
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Upload className="h-5 w-5 mt-0.5 text-muted-foreground"/>
                  <div>
                    <h3 className="font-medium">Technical Skills Portfolio</h3>
                    <p className="text-sm text-muted-foreground">Documentation of technical competencies</p>
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
                    <span>Technical troubleshooting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"/>
                    <span>System implementation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"/>
                    <span>Technology evaluation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"/>
                    <span>User training and support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"/>
                    <span>Project management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <h2 className="text-3xl font-bold">1c -suport</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <Tabs defaultValue="overview">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="evidence">Evidence</TabsTrigger>
                <TabsTrigger value="reflection">Reflection</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="p-4 border rounded-md mt-2">
                <h2 className="text-xl font-semibold mb-4">Understanding Operational Issues</h2>
                <p className="mb-4">
                  This section demonstrates my understanding of the constraints and benefits of different technologies
                  in
                  my professional context. It covers:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Technical knowledge and ability in the use of learning technology</li>
                  <li>Supporting the deployment of learning technologies</li>
                  <li>Technical knowledge and ability in the development/implementation of learning technologies</li>
                  <li>Managing the deployment of learning technologies</li>
                </ul>
                <p>
                  Through the evidence and reflection provided, I demonstrate how I select and use appropriate
                  technologies for specific contexts and purposes, showing awareness of the benefits and limitations of
                  different technologies.
                </p>
              </TabsContent>
              <TabsContent value="evidence" className="space-y-4 p-4 border rounded-md mt-2">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Evidence</h2>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">LMS Implementation Project</CardTitle>
                      <CardDescription>Technical documentation and project plan</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Documentation of the implementation of a new Learning Management System, including technical
                        requirements, deployment strategy, and user training materials.
                      </p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="gap-2">
                          <FileText className="h-4 w-4"/>
                          View Document
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Technology Evaluation Report</CardTitle>
                      <CardDescription>Comparative analysis of learning technologies</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        A detailed report comparing different learning technologies, evaluating their benefits,
                        limitations, and suitability for specific educational contexts.
                      </p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="gap-2">
                          <FileText className="h-4 w-4"/>
                          View Report
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="reflection" className="p-4 border rounded-md mt-2">
                <h2 className="text-xl font-semibold mb-4">Reflection</h2>
                <p className="mb-4">
                  My approach to operational issues in learning technology has evolved significantly over my career.
                  I've
                  learned that successful technology implementation requires not just technical knowledge, but also a
                  deep
                  understanding of the educational context and user needs.
                </p>
                <p className="mb-4">
                  One of the key challenges I've faced is balancing innovation with reliability. While new technologies
                  offer exciting possibilities, they must be thoroughly tested and supported to ensure they enhance
                  rather
                  than hinder the learning experience.
                </p>
                <p>
                  Moving forward, I aim to continue developing my technical skills while also focusing on how technology
                  can be used to address specific pedagogical challenges. I believe that the most effective learning
                  technology professionals are those who can bridge the gap between technical possibilities and
                  educational needs.
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
                    <h3 className="font-medium">ALT CMALT Guidelines</h3>
                    <p className="text-sm text-muted-foreground">
                      Official guidelines for the Operational Issues section
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Upload className="h-5 w-5 mt-0.5 text-muted-foreground"/>
                  <div>
                    <h3 className="font-medium">Technical Skills Portfolio</h3>
                    <p className="text-sm text-muted-foreground">Documentation of technical competencies</p>
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
                    <span>Technical troubleshooting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"/>
                    <span>System implementation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"/>
                    <span>Technology evaluation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"/>
                    <span>User training and support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"/>
                    <span>Project management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

      </div>
  )
}

