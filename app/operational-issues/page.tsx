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
                <h2 className="text-xl font-semibold mb-4">Description</h2>


                <p className="mb-4">
                  A significant part of my role involves making — or contributing to — decisions about which
                  technologies to use, build, or extend, and understanding why one approach is more appropriate than
                  another in a given institutional context. The most sustained example of this is my work with Scientia,
                  a bespoke Virtual Learning Environment developed within the Department of Computing at Imperial
                  College London. Scientia serves approximately 1,500 students and 100 staff each day. My involvement as
                  a core contributor means writing production code and reasoning carefully about trade-offs: performance
                  versus flexibility, openness versus security, institutional ownership versus dependence on third-party
                  vendors.
                </p>
                <p className="mb-4">

                  One decision I have thought about in particular depth is the choice to maintain a bespoke VLE rather
                  than rely entirely on a commercial platform such as Blackboard or Canvas. Commercial VLEs offer scale,
                  vendor support, and a predictable development roadmap, but they are not always well-suited to a
                  research-intensive computing department with specific pedagogical requirements. Scientia allows us to
                  design features — such as the PhD progression tracking module I led — that would be difficult or
                  impossible to configure in a generic platform. However, bespoke development carries its own
                  constraints: it requires sustained developer capacity, creates institutional knowledge risk if key
                  contributors leave, and means that security patching and accessibility compliance fall entirely on the
                  internal team rather than a vendor.

                </p>
                <p className="mb-4">

                  I have also participated in College-level technology selection processes, including the evaluation of
                  a new VLE and the selection of FeedbackFruits as a peer assessment tool. These processes exposed me to
                  a different kind of trade-off analysis: weighing factors such as data residency requirements,
                  integration complexity with existing systems, total cost of ownership, and the realistic capacity of
                  academic staff to adopt new workflows. The FeedbackFruits process, in particular, required me to think
                  carefully about whether a feature-rich tool would actually be used — and used well — by the academic
                  colleagues it was intended to support.
                </p>
              </TabsContent>
              <TabsContent value="evidence" className="space-y-4 p-4 border rounded-md mt-2">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Evidence</h2>
                  <p>
                    - Code contribution history and documentation for Scientia (GitLab repository)
                    - Architecture decision records or technical documentation for Scientia features including the PhD
                    tracking module
                    - Notes, reports, or emails from participation in the College VLE selection process and the
                    FeedbackFruits evaluation
                    - MSc thesis: "Modelling Student Performance From Virtual Learning Environment And Demographic Data"
                    (University of Brighton, 2017)
                    - [PLACEHOLDER: Any written record of the criteria used in the VLE or peer assessment tool
                    evaluation — even informal notes or a scoring matrix would serve as strong evidence here]
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="reflection" className="p-4 border rounded-md mt-2">
                <h2 className="text-xl font-semibold mb-4">Reflection</h2>
                <p className="mb-4">

                  What I have come to understand more clearly through this work is that the most technically capable
                  solution is rarely the most educationally appropriate one. The constraints that matter most are often
                  not technical at all: they are human, organisational, and political. A bespoke system like Scientia
                  gives us exceptional control, but that control is only valuable if the team maintaining it remains
                  coherent and well-resourced, and if the institution genuinely commits to supporting it long-term. When
                  I participated in the College-wide VLE selection process, I found myself acting as a translator
                  between what developers know to be possible and what academic colleagues need in practice — a role I
                  had not anticipated but which I now see as central to what a learning technologist does.
                </p>
                <p className="mb-4">
                  I would approach future technology evaluations with even more attention to the question of adoption.
                  It is not enough to assess whether a tool is technically sound; one must understand whether the
                  intended users have the time, confidence, and incentive to change their practice. With hindsight, I
                  would advocate more strongly for structured pilot periods and systematic collection of user feedback
                  before any large-scale commitment is made.
                </p>
                <p className="mb-4">
                  My MSc thesis — which analysed VLE and demographic data to model student performance — also deepened
                  my thinking here. It made me acutely aware that VLEs are not neutral: the data they collect, the
                  behaviours they incentivise, and the assumptions they embed about what learning looks like all shape
                  educational experience in ways that are rarely discussed when technology is selected.
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

        <h2 className="text-2xl font-bold">1b - Technical knowledge and ability in the use of Learning Technology</h2>
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
                  In this section, I describe use of GitHub, Python and Flask to support MSc
                  students for an MSc module. The module was developed to support MSc conversion students in Software
                  Systems engineering.

                  Module 70085 covers common software engineering topics for developing web applications with Python,
                  Azure, Docker, Github, Databases and more.

                  A co-authored paper on the subject of this module was presented


                </p>
              </TabsContent>
              <TabsContent value="evidence" className="space-y-4 p-4 border rounded-md mt-2">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Evidence</h2>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Conference paper</CardTitle>
                      <CardDescription>Co-authored conference papwer</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        A conference paper describing the development and implementation of the MSc module was presented
                        at the <Link
                          href="https://epc.ac.uk/event/uk-and-ireland-engineering-education-research-network-annual-symposium-2">EERN
                        conference in July 2025</Link>.
                      </p>
                      <div className="flex gap-2">
                        <Link href="https://edtech.pages.doc.ic.ac.uk/preprints/eern-lean-learning-for-se-25.pdf">

                          <Button><FileText className="h-4 w-4"/>View EERN paper</Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>


                </div>
              </TabsContent>
              <TabsContent value="reflection" className="p-4 border rounded-md mt-2">
                <h2 className="text-xl font-semibold mb-4">Reflection</h2>


                <p>
                  Reflection on 1b...
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

        <h2 className="text-1xl font-bold">1c -Supporting the deployment of learning technologies</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <Tabs defaultValue="overview">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="evidence">Evidence</TabsTrigger>
                <TabsTrigger value="reflection">Reflection</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="p-4 border rounded-md mt-2">

                <p className="mb-4">
                  In this section I describe a training session for managing grades in Blackboard VLE
                </p>


              </TabsContent>
              <TabsContent value="evidence" className="space-y-4 p-4 border rounded-md mt-2">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Evidence</h2>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">LMS Implementation Project</CardTitle>
                      <CardDescription>Training document for managing grades in Blackboard</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        grades doc
                      </p>
                      <div className="flex gap-2">

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

