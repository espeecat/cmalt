import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {ArrowLeft, FileText, LinkIcon, Upload} from "lucide-react"
import Link from "next/link"

export default function SpecialistPage() {
  return (
      <div className="container py-10">
        <div className="flex items-center gap-2 mb-8">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4"/>
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


                  My specialist area is the design and development of bespoke educational software systems. This is the
                  activity that distinguishes my role from that of a general learning technologist and that represents
                  my most sustained and distinctive contribution to learning technology practice. I will focus this
                  section on three systems that best illustrate the depth and complexity of this work: Scientia (and
                  specifically the PhD tracking module), ImPaaS, and the student wellbeing data capture tool.
                </p>

                <h3>Scientia and the PhD Tracking Module</h3>
                <p className="mb-4">
                  Scientia is a bespoke VLE that I contribute to as a core developer. The PhD tracking module, which I
                  led the development of, is designed to support the monitoring of PhD student progression and milestone
                  completion. PhD supervisors, administrators, and students all use the module, which means that it must
                  present different data, permissions, and workflows to different user roles — a design challenge that
                  is technically complex but more importantly requires a clear-eyed understanding of how PhD supervision
                  actually works, including its informal dynamics and the power relationships it involves.
                </p>
                <p className="mb-4">
                  A student's progression through a PhD is not a linear sequence of checkboxes; it is a complex, often
                  non-linear process involving supervisor judgement, committee decisions, extenuating circumstances, and
                  institutional requirements that vary by funding body and by programme. Designing a system that
                  supports this process without reducing it to something falsely simple required sustained dialogue with
                  supervisors, students, and administrators before any code was written. It also required me to design
                  for edge cases: the student who is temporarily suspended, the supervisor who leaves mid-project, the
                  milestone that is failed and must be repeated.
                </p>

                <h3>ImPaas</h3>
                <p className="mb-4">
                  ImPaaS (the departmental Platform as a Service) provides students with managed cloud infrastructure
                  for their software projects, removing the need to configure server environments from scratch and
                  allowing them to focus on the educational task rather than on operational complexity. My contribution
                  has been both to maintain and extend the platform and to take it to new departments: Bioengineering
                  now uses it for 30-plus group projects per year. The pedagogical design principle behind ImPaaS is
                  that infrastructure should be a scaffold, not an obstacle — students should encounter just enough
                  complexity to learn from it without being overwhelmed by it.
                </p>
                <p className="mb-4">
                  This principle is easy to state but surprisingly hard to implement. The boundary between productive
                  challenge and frustrating barrier is different for every student and every course, and calibrating
                  ImPaaS to sit at the right point has required ongoing attention to student experience data and
                  feedback from academic staff.
                </p>
                <h3>Student Wellbeing Tool</h3>

                <p className="mb-4">
                  The student wellbeing data capture tool, co-developed with StudentShapers partners, is the most
                  ethically complex system I have worked on. It is designed to serve as an early warning system: to
                  identify students who may be struggling before they reach a crisis point. The design of this system
                  has required me to think carefully about what data to collect (and, critically, what not to collect),
                  how to ensure that students feel safe sharing sensitive information, how to present that information
                  to staff in ways that prompt appropriate support rather than surveillance, and how to ensure that the
                  system does not inadvertently disadvantage already-marginalised students.
                </p>
                <p className="mb-4">
                  I have been guided in this by the literature on student wellbeing and learning analytics, by
                  consultation with the students involved in StudentShapers, and by engagement with Imperial's
                  counselling and wellbeing services. The co-creation element has been essential: the students who are
                  building this tool are also its potential users, and their insistence on certain design choices —
                  about what data is visible to whom, about how opt-out is managed — has been more important than any
                  technical consideration.

                </p>
              </TabsContent>
              <TabsContent value="evidence" className="space-y-4 p-4 border rounded-md mt-2">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Evidence</h2>
                  <p className="text-xl font-semibold">
                    - Published conference papers:
                    - "Creating a Student-Friendly PaaS Platform: Experiences with Tsuru in Software Engineering
                    Education" (FSE '25, June 2025, DOI: 10.1145/3696630.3727239)
                    - "Creating an Open-Source Ecosystem for Contextualized Learning in Software Engineering" (HEAd'25,
                    June 2025, DOI: 10.4995/HEAd25.2025.20104)
                    - "Beyond Coding: Lean Learning for Real-World Software Engineering" (EERN '25, July 2025)
                    - GitLab repository and commit history for Scientia, ImPaaS, and the wellbeing tool
                    - System architecture documentation for each of the three systems discussed
                    - PhD tracking module: screenshots, user documentation, and evidence of use (e.g., usage statistics
                    or a statement from the Postgraduate Administrator)
                    - ImPaaS in Bioengineering: project logs, student or staff feedback, correspondence
                    - Wellbeing tool: StudentShapers project records, design documentation, ethical review
                    correspondence
                    - Silver Staff Recognition Award (October 2025) and Bronze Staff Recognition Awards for PhD tracking
                    tool
                    - [PLACEHOLDER: Usage statistics for any of these systems — number of active users, transactions per
                    day, uptime records — would provide concrete evidence of scale and reliability]
                    - [PLACEHOLDER: Screenshots of user interfaces (with any identifiable student data removed) would
                    help assessors understand the character and quality of the design work]
                    - [PLACEHOLDER: Any formal or informal user testing records, particularly for the wellbeing tool,
                    would directly evidence the user-centred design approach described]

                  </p>
                </div>
              </TabsContent>
              <TabsContent value="reflection" className="p-4 border rounded-md mt-2">
                <h2 className="text-xl font-semibold mb-4">Reflection</h2>
                <p className="mb-4">
                  The common thread across these three systems is that the most important design decisions are not
                  technical. The PhD tracking module works not because of its database schema but because we spent time
                  with supervisors and students before building anything, and we understood what they actually needed
                  rather than what they said they needed. ImPaaS works not because of the Tsuru platform it is built on
                  but because we calibrated the level of abstraction carefully to match the pedagogical goals of the
                  modules it supports. The wellbeing tool will work or fail not on its technical merits but on whether
                  students trust it enough to use it honestly — and trust is built through co-design, transparency, and
                  governance, not through clever engineering.
                </p>
                <p className="mb-4">
                  This has led me to adopt a working practice that is sometimes in tension with the expectations of a
                  technical role: I spend a significant proportion of my time talking to people before writing code. I
                  have become more comfortable with this over time, but I am aware that it requires institutional
                  support. If the environment treats developers as order-takers who implement specifications handed down
                  from above, this kind of reflective, dialogue-based design practice is very difficult to maintain.
                </p>
                <p className="mb-4">
                  My 2025 conference papers represent an attempt to articulate and disseminate what I have learned from
                  this practice. The FSE '25 paper on ImPaaS and the HEAd'25 paper on open-source ecosystems for
                  contextualised learning both engage explicitly with the pedagogical principles that underlie the
                  technical choices I have made. Writing them forced me to make those principles explicit in ways that
                  are accountable to peer scrutiny — and the process of doing so refined my thinking in ways that have
                  fed back into my practice.
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
                    <h3 className="font-medium">Analytics Frameworks</h3>
                    <p className="text-sm text-muted-foreground">Theoretical models and approaches</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Upload className="h-5 w-5 mt-0.5 text-muted-foreground"/>
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
                    <div className="h-2 w-2 rounded-full bg-primary"/>
                    <span>Data analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"/>
                    <span>Dashboard design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"/>
                    <span>Ethical assessment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"/>
                    <span>Research methodology</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"/>
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

