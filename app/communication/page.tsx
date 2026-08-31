import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {ArrowLeft, FileText, LinkIcon, Upload} from "lucide-react"
import Link from "next/link"

export default function CommunicationPage() {
  return (
      <div className="container py-10">
        <div className="flex items-center gap-2 mb-8">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4"/>
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

                  Effective communication is a prerequisite for almost everything I do, because almost everything I do
                  crosses organisational, disciplinary, or role boundaries. The clearest example is digital exam
                  delivery. To deliver 500-plus students' worth of examinations successfully across 30 modules in a
                  year, I must maintain productive working relationships with the Exams Team, CSG IT, academic staff,
                  and invigilators — each of whom has a different vocabulary, a different set of concerns, and a
                  different relationship to the technical systems involved. My role in this coordination is partly
                  technical and partly diplomatic: I write documentation that non-technical staff can act on, I attend
                  pre-examination briefings, and I serve as the point of contact when things go wrong on the day.
                </p>
                <p className="mb-4">


                  My collaboration with Lambda Feedback — the automated mathematics feedback platform developed by Peter
                  Johnson's team in Mechanical Engineering — is another sustained example of cross-disciplinary
                  communication. This collaboration involves aligning the technical and pedagogical assumptions of two
                  different departments, negotiating access to data for research purposes, and co-supervising a student
                  project that sits at the intersection of both teams' interests. Communication here is ongoing and
                  requires me to be explicit about the assumptions I bring from a computing background that may not be
                  shared by colleagues in engineering.
                </p>
                <p className="mb-4">


                  Internationally, I have presented my work at TU Munich in November/December 2023 and participated in a
                  collaborative workshop in October 2024 that brought together academics from TUM, KCL, and other
                  institutions. I also delivered an invited seminar at the University of Glasgow School of Computing
                  Science in November 2024, presenting the ImPaaS work. These activities have required me to communicate
                  complex technical and pedagogical ideas to audiences who do not share my institutional context, which
                  has sharpened my ability to identify what is genuinely novel and significant about the work I do.
                </p>
                <p className="mb-4">
                  Within the department, I work closely with the Director of Educational Technology and with the wider
                  EdTech team. I contribute to team discussions about strategy and priorities, and I try to share
                  knowledge — about emerging technologies, about lessons learned from system incidents, and about
                  pedagogical approaches — in ways that are accessible to colleagues with different technical
                  backgrounds.
                </p>
                <p className="mb-4">

                  My three conference papers in 2025 represent a different register of communication: the formal
                  academic record. Writing for peer-reviewed venues has required me to situate my practical work within
                  the existing research literature, to make explicit the theoretical claims embedded in what might
                  otherwise look like purely technical work, and to accept the discipline of external scrutiny and
                  revision.
                </p>


              </TabsContent>
              <TabsContent value="evidence" className="space-y-4 p-4 border rounded-md mt-2">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Evidence</h2>
                  <p className="text-xl font-semibold">

                    - Published conference papers (all three from 2025, with DOIs where available)
                    - Evidence of the TU Munich visit and Glasgow seminar (e.g., invitation emails, presentation slides,
                    programme listings)
                    - Evidence of the October 2024 workshop (agenda, presentation materials, attendee list)
                    - CERC workshop participation records
                    - ITiCSE 2025 attendance record
                    - Documentation of Lambda Feedback collaboration (e.g., project correspondence, data access
                    agreement, student project brief)
                    - Silver Staff Recognition Award (October 2025) and Bronze Staff Recognition Award certificates
                    - [PLACEHOLDER: A statement from Peter Johnson (Lambda Feedback) or a colleague at TUM or Glasgow
                    attesting to the value and character of the collaboration would be powerful evidence here]

                  </p>
                </div>
              </TabsContent>
              <TabsContent value="reflection" className="p-4 border rounded-md mt-2">
                <h2 className="text-xl font-semibold mb-4">Reflection</h2>
                <p className="mb-4">

                  The communication challenge I find most genuinely difficult is managing expectations around what
                  technology can and cannot do. Academic colleagues sometimes approach me with requests that reflect a
                  belief that software can solve problems that are actually pedagogical, organisational, or cultural in
                  nature. Responding to these requests requires tact: I want to be helpful, I want to take the
                  underlying concern seriously, and I want to avoid being dismissive of non-technical colleagues' ideas
                  — but I also have a professional responsibility not to build systems that will not work. I have not
                  always got this balance right. There have been occasions when I have agreed to build something that I
                  suspected would not be used, and I have learned to push back more constructively — asking clarifying
                  questions about the problem rather than jumping to the solution.

                </p>
                <p className="mb-4">

                  The international collaboration at TUM and Glasgow was unexpectedly valuable for a different reason:
                  it gave me a way to see my own work from the outside. When I described ImPaaS to an audience that had
                  no prior knowledge of Imperial's infrastructure or pedagogical context, I had to work much harder to
                  explain what was interesting about it — and in doing so, I clarified my own thinking. The Glasgow
                  seminar in particular led to conversations about how ImPaaS might be adapted or adopted in other
                  institutions, which prompted me to think more carefully about what is genuinely transferable and what
                  is specific to our context.

                </p>
                <p className="mb-4">

                  My involvement in StudentShapers has also challenged my assumptions about communication with students.
                  Treating students as collaborators rather than recipients of a service requires a different
                  conversational register — one in which I am genuinely open to being wrong, in which their experience
                  of the system is authoritative data rather than anecdote, and in which I am explicit about the
                  constraints (technical, resource-related, and political) that limit what can be changed. This has made
                  me a better communicator in other contexts too.
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
                    <h3 className="font-medium">Communication Strategies</h3>
                    <p className="text-sm text-muted-foreground">Frameworks for effective communication</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Upload className="h-5 w-5 mt-0.5 text-muted-foreground"/>
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
                    <div className="h-2 w-2 rounded-full bg-primary"/>
                    <span>Stakeholder engagement</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"/>
                    <span>Training and facilitation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"/>
                    <span>Project coordination</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"/>
                    <span>Community building</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"/>
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

