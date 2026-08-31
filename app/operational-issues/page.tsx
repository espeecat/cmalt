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
                  My technical work spans several interconnected systems, and I will describe the most educationally
                  significant of them here. The first is the Answerbook platform, which I manage for the delivery of
                  digital examinations. Each year, Answerbook supports more than 500 students sitting assessments across
                  30 or more modules. My responsibilities encompass reliability, security, and scalability: I must
                  ensure that the platform does not fail during a live examination, that student work cannot be accessed
                  or tampered with by unauthorised parties, and that the system can handle simultaneous peak load from
                  hundreds of concurrent users. This has required me to develop robust deployment pipelines — I use
                  GitLab CI/CD throughout my work — and to establish clear incident response procedures in collaboration
                  with the Exams Team, CSG IT, and invigilators.
                </p>
                <p className="mb-4">


                  The second system is ImPaaS, a bespoke Platform as a Service that I have extended beyond the
                  Department of Computing to support other faculties. Bioengineering has now used ImPaaS for two years
                  to host more than 30 group projects involving teams of four students. Extending a platform to new
                  departments requires careful attention to infrastructure provisioning, access control, and user
                  support — none of which can be assumed to transfer automatically from one institutional context to
                  another. The experience also required me to work diplomatically across departmental boundaries,
                  building trust with colleagues who had no prior relationship with our team or our systems.
                </p>
                <p className="mb-4">


                  A third area is the Teaching database, which I maintain as the departmental system of record for
                  student enrolment, progression, and assessment. The integrity of this database has direct consequences
                  for students' academic records, which means that technical decisions about schema design, data
                  validation, and backup procedures carry genuine ethical weight.

                </p>
                <p className="mb-4">

                  I actively maintain expertise in AI and large language models as they apply to EdTech, and I am
                  supervising a final-year undergraduate project that analyses data from the Lambda Feedback automated
                  feedback platform to explore whether student interaction patterns can predict academic performance.

                </p>

              </TabsContent>
              <TabsContent value="evidence" className="space-y-4 p-4 border rounded-md mt-2">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Evidence</h2>

                  <p className="mb-4">


                    - GitLab repository and CI/CD pipeline configuration for Answerbook and ImPaaS
                    - System architecture documentation or diagrams for Answerbook, ImPaaS, and the Teaching database
                    - Published conference paper: "Creating a Student-Friendly PaaS Platform: Experiences with Tsuru in
                    Software Engineering Education" (FSE '25, June 2025, DOI: 10.1145/3696630.3727239)
                    - Evidence of ImPaaS deployment in Bioengineering (e.g., email correspondence, project logs, or a
                    statement from a Bioengineering colleague)
                    - [PLACEHOLDER: Any incident reports or post-mortem documentation from Answerbook exam delivery
                    would serve as powerful evidence of systematic risk management]
                    - [PLACEHOLDER: Student or staff feedback on ImPaaS usability, particularly from Bioengineering,
                    would strengthen the reflection on cross-disciplinary deployment]


                  </p>

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

                <p className="mb-4">


                  Managing Answerbook has taught me more about risk than almost anything else in my career. An
                  examination is, in some respects, the highest-stakes educational moment a student experiences, and the
                  consequences of a platform failure are severe: students lose work, trust in the system collapses, and
                  the academic integrity of the assessment may be called into question. This responsibility has made me
                  a more careful and systematic developer. I now think about failure modes before I think about
                  features, and I have a much stronger appreciation for the value of automated testing, monitoring, and
                  documented rollback procedures.

                </p>
                <p className="mb-4">


                  The expansion of ImPaaS to Bioengineering surfaced a tension I had not fully anticipated: the
                  assumptions embedded in a system designed by and for computing students do not always translate to
                  students in other disciplines. What is intuitive to a third-year computing undergraduate may be
                  bewildering to a bioengineering student encountering containerised deployment for the first time. This
                  taught me to approach technical design with greater humility — the system exists to serve the learner,
                  not to showcase what is technically elegant. It also led directly to one of my 2025 conference papers,
                  which reflects on the pedagogical and practical dimensions of this experience.

                </p>
                <p className="mb-4">

                  I am aware that my AI expertise is an area of genuine strategic importance but also of significant
                  risk. I champion the use of LLMs as educational tools while remaining alert to issues of academic
                  integrity, over-reliance, and the potential for these systems to produce confident misinformation. I
                  try to model critical engagement with AI for the students I work with rather than uncritical
                  enthusiasm.

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


                  Supporting deployment is not simply a matter of switching a system on. My experience with both
                  Answerbook and Scientia has shown me that successful deployment requires coordinating people,
                  processes, and technical infrastructure simultaneously — and that the human coordination is often
                  harder than the technical work.

                </p>
                <p className="mb-4">


                  For digital exam delivery, I work with a multi-stakeholder group that includes the Exams Team, CSG IT,
                  academic staff setting the papers, and invigilators on the day. Each group has different technical
                  literacy, different concerns, and different points of contact with the system. My role involves
                  ensuring that all of these groups are adequately prepared: that invigilators know what to do if a
                  student's session drops, that the Exams Team understands how results are exported and stored, and that
                  academic staff can upload and preview their question papers without requiring developer-level access.
                  I have developed documentation, run briefing sessions, and acted as point-of-contact during live
                  examinations.

                </p>
                <p className="mb-4">


                  I also support the deployment of learning technologies through my involvement in the StudentShapers
                  programme, which is a co-creation framework that enables students to contribute to the development of
                  institutional systems and practices. I have worked with StudentShapers partners, including on the
                  co-development of a student wellbeing data capture tool within Scientia — a project that has required
                  me to navigate the specific challenges of involving students as genuine collaborators rather than
                  merely as end-users.

                </p>
                <p className="mb-4">

                  During the COVID-19 pandemic, when I was at the University of Brighton, I designed and implemented a
                  programme that enabled remote teaching delivery at speed. I worked with Architecture staff
                  specifically to develop approaches for live hand-sketching demonstrations via Microsoft Teams — a use
                  case that required creative technical problem-solving because standard video conferencing was not
                  well-suited to the fine motor detail of architectural drawing.


                </p>


              </TabsContent>
              <TabsContent value="evidence" className="space-y-4 p-4 border rounded-md mt-2">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Evidence</h2>
                  {/*<Card>*/}
                  {/*  <CardHeader className="pb-2">*/}
                  {/*    <CardTitle className="text-lg">LMS Implementation Project</CardTitle>*/}
                  {/*    <CardDescription>Training document for managing grades in Blackboard</CardDescription>*/}
                  {/*  </CardHeader>*/}
                  {/*  <CardContent>*/}
                  {/*    <p className="text-sm text-muted-foreground mb-4">*/}
                  {/*      grades doc*/}
                  {/*    </p>*/}
                  {/*    <div className="flex gap-2">*/}

                  {/*    </div>*/}
                  {/*  </CardContent>*/}
                  {/*</Card>*/}


                  <p className="mb-4">


                    - Documentation, guides, or briefing materials produced for Answerbook exam delivery
                    - Email correspondence or project records relating to COVID-era remote teaching deployment at
                    University of Brighton
                    - StudentShapers project records, including any student co-creation agreements or project
                    documentation
                    - Documentation or correspondence relating to the student wellbeing tool development within Scientia
                    - [PLACEHOLDER: A brief statement from a colleague in Architecture at Brighton, or from the Exams
                    Team at Imperial, attesting to the support provided would be particularly strong evidence here]
                    - [PLACEHOLDER: If any formal evaluation was conducted of the remote teaching programme at Brighton,
                    this would be highly relevant]

                  </p>


                </div>
              </TabsContent>
              <TabsContent value="reflection" className="p-4 border rounded-md mt-2">
                <h2 className="text-xl font-semibold mb-4">Reflection</h2>

                <p className="mb-4">


                  The COVID period was the most intense deployment challenge I have encountered. The pressure to deliver
                  at speed made it impossible to follow normal change management processes, and I learned — sometimes
                  the hard way — which corners could safely be cut and which could not. What stayed with me was the
                  importance of understanding what colleagues were trying to achieve pedagogically before jumping to a
                  technical solution. The Architecture staff were not asking for a video conferencing tool; they were
                  asking for a way to preserve the intimacy and legibility of a hand-drawn sketch that students had
                  traditionally gathered around a table to observe. Understanding that distinction made it possible to
                  design something that actually worked for them.

                </p>
                <p className="mb-4">


                  The StudentShapers collaboration has been equally instructive, though in a different register.
                  Involving students in the development of a wellbeing tool is ethically complex — the data being
                  captured relates to mental health and personal circumstances — and it has required me to think
                  carefully about the boundaries of student co-creation, the governance structures that should surround
                  such projects, and what it means to treat a student both as a collaborator and as a potential
                  beneficiary of the system being built. I have found this tension productive rather than paralyzing,
                  but it has made me more cautious and more rigorous about ethical review processes.


                </p>
                <p className="mb-4">


                  I have also come to appreciate that effective deployment support requires ongoing attention, not just
                  a launch moment. Systems need champions — people who understand them well enough to resolve queries
                  quickly and who are invested in their success. I have tried to play that role for the systems I
                  manage, but I recognise that this creates a single point of failure, and I am increasingly aware of
                  the need to build more resilient support structures around the tools I develop.

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

