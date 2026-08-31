import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {ArrowLeft, FileText, LinkIcon, Upload} from "lucide-react"
import Link from "next/link"

export default function TeachingLearningPage() {
  return (
      <div className="container py-10">
        <div className="flex items-center gap-2 mb-8">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4"/>
              <span className="sr-only">Back to home</span>
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Teaching, Learning & Assessment</h1>
        </div>

        <h2 className="text-3xl font-bold">2a</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <Tabs defaultValue="overview">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="evidence">Evidence</TabsTrigger>
                <TabsTrigger value="reflection">Reflection</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="p-4 border rounded-md mt-2">
                <h2 className="text-xl font-semibold mb-4">Teaching, Learning & Assessment</h2>
                <p className="mb-4">
                  My engagement with teaching, learning, and assessment processes spans both direct teaching activity
                  and the design of systems that mediate those processes for others. On the direct teaching side, I
                  design and deliver lectures to MSc students on web design and database systems/SQL as part of the
                  Software Systems Engineering (SSE) module. I write coursework specifications, mark submissions, and
                  attend and support weekly SSE laboratory sessions. I also respond to student questions through the
                  EdStem platform, which allows students to post queries and receive answers from staff or peers in a
                  threaded, searchable format.
                </p>
                <p className="mb-4">
                  In the Designing for Real People (DRP) module, I act as mentor to approximately ten student groups per
                  year — roughly forty students in total. In this role I support teams as they work through a
                  human-centred design process, marking milestone submissions along the way and assessing final
                  presentations. This module requires students to engage with real stakeholders and to iterate on their
                  designs in response to genuine user feedback, which means my mentoring involves helping students
                  navigate ambiguity and failure as well as technical complexity.
                </p>
                <p className="mb-4">
                  I have supervised eight final-year undergraduate projects and two MSc individual projects, and I have
                  served as second marker on more than ten further projects. My current supervisory portfolio includes a
                  project using Lambda Feedback data to explore predictive models of student performance, and a project
                  developing a student wellbeing data capture tool — both of which sit at the boundary between software
                  engineering and learning analytics, and both of which I bring substantive prior expertise to.
                </p>
                <p className="mb-4">
                  I hold a City and Guilds Teaching and Further Education qualification, which provided me with a formal
                  grounding in curriculum design, assessment theory, and inclusive teaching practice.
                </p>

              </TabsContent>
              <TabsContent value="evidence" className="space-y-4 p-4 border rounded-md mt-2">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Evidence</h2>
                  <p className="mb-4">
                    - SSE module lecture slides and coursework specifications
                    - Marking rubrics and sample marked work (appropriately anonymised)
                    - EdStem activity records or screenshots showing engagement with student questions
                    - DRP module mentoring records and assessment documentation
                    - Project supervision agreements and project reports (appropriately anonymised)
                    - MSc thesis: "Modelling Student Performance From Virtual Learning Environment And Demographic Data"
                    (University of Brighton, 2017)
                    - City and Guilds Teaching and Further Education qualification certificate
                    - [PLACEHOLDER: Student feedback from SSE or DRP modules — even anonymised module evaluation
                    summaries — would provide strong evidence that teaching is effective and reflective]
                    - [PLACEHOLDER: Specific examples of how coursework specifications have been revised in response to
                    assessment outcomes would demonstrate the reflective loop described above]
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="reflection" className="p-4 border rounded-md mt-2">
                <h2 className="text-xl font-semibold mb-4">Reflection</h2>
                <p className="mb-4">
                  My teaching qualification gave me a framework, but it is the accumulated experience of working with
                  students — particularly in the laboratory and mentoring settings — that has genuinely shaped my
                  understanding of how learning happens. In the SSE labs, I observe students encountering confusion in
                  real time. I have noticed that the moments of productive struggle — when a student is stuck but not
                  overwhelmed — are often the most important for learning, and that my instinct as a developer to
                  resolve problems efficiently can actually be counterproductive in a teaching context. I have had to
                  learn to ask diagnostic questions rather than give answers, and to trust that the discomfort of
                  not-yet-knowing is a feature rather than a bug.

                </p>
                <p className="mb-4">
                  My MSc thesis on modelling student performance from VLE data gave me an analytical lens through which
                  to interrogate engagement patterns I observe in systems like Scientia. I can see, for example, when
                  students are accessing materials late or not at all, and I am now supervising a project that extends
                  this kind of analysis to Lambda Feedback data. This makes me aware of both the potential and the
                  danger of learning analytics: the potential is the ability to identify struggling students early; the
                  danger is the risk of reducing complex human experiences to a set of metrics and acting on them in
                  ways that feel invasive or reductive to students.
                </p>
                <p className="mb-4">
                  The coursework specifications I write for SSE have also required me to think carefully about
                  assessment design. I try to design tasks that assess genuine competence rather than surface
                  performance — tasks where a student cannot pass simply by memorising patterns without understanding
                  them. This is harder to achieve than it sounds, and I continue to refine my approach each year in
                  response to what the marking process reveals about where students are and are not understanding.
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
                    <h3 className="font-medium">Pedagogical Frameworks</h3>
                    <p className="text-sm text-muted-foreground">Key frameworks informing my practice</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Upload className="h-5 w-5 mt-0.5 text-muted-foreground"/>
                  <div>
                    <h3 className="font-medium">Student Feedback Analysis</h3>
                    <p className="text-sm text-muted-foreground">Data on learning effectiveness</p>
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
                    <span>Learning design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"/>
                    <span>Assessment strategy</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"/>
                    <span>Learner engagement</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"/>
                    <span>Educational evaluation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"/>
                    <span>Pedagogical innovation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10">2b: Understanding of Target Learners</h2>
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
                  My learners are diverse in ways that matter pedagogically. In the SSE module, I teach postgraduate
                  students who are primarily computing specialists, but who come from a wide range of national and
                  cultural backgrounds and who have varying levels of prior experience with web development and
                  databases. In the DRP module, the students I mentor are typically undergraduates in their second or
                  third year, working in interdisciplinary teams that may include students from computing, design, and
                  other backgrounds. As a personal tutor to more than fifteen undergraduates and five MSc students over
                  the past three years, I have direct and sustained knowledge of the pressures — academic, financial,
                  and personal — that students navigate during their studies.
                </p>
                <p className="mb-4">


                  The systems I build also reflect an understanding of learner diversity. The student wellbeing tool I
                  am co-developing within Scientia is explicitly designed as an early warning system — a mechanism for
                  identifying students who may be at risk before they reach a crisis point. Designing this system has
                  required me to think carefully about the student perspective: what information they are willing to
                  share, under what conditions, and with whom. It has also required engagement with the literature on
                  student mental health and the evidence base for early intervention approaches.
                </p>
                <p className="mb-4">
                  Through my UROP mentoring and StudentShapers involvement, I have worked with high-achieving students
                  who are motivated to contribute to the improvement of their own learning environment. These students
                  have a different relationship to the institution and to learning technology — they are simultaneously
                  users, critics, and collaborators — and engaging with them productively requires a different posture
                  than conventional teaching.
                </p>
                <p className="mb-4">

                  The Lambda Feedback collaboration with Peter Johnson in Mechanical Engineering has exposed me to
                  learners in STEM disciplines outside computing — students grappling with advanced mathematics — and
                  has sharpened my understanding of how automated feedback can support or frustrate learning depending
                  on how it is designed. Feedback that is merely correct is not always useful; feedback that explains
                  why an answer is wrong and how to think about it differently is substantially more powerful.
                </p>
              </TabsContent>
              <TabsContent value="evidence" className="space-y-4 p-4 border rounded-md mt-2">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Evidence</h2>

                  <p className="mb-4">
                    - Personal tutoring records and any relevant pastoral support documentation (appropriately
                    anonymised)
                    - Documentation of the student wellbeing tool project, including any user research or student
                    consultation records
                    - Evidence of UROP mentoring and StudentShapers engagement
                    - Lambda Feedback project documentation or correspondence with Peter Johnson's team
                    - [PLACEHOLDER: A reflection note or case study drawn from a specific personal tutoring encounter
                    (fully anonymised) would be a compelling piece of evidence here]
                    - [PLACEHOLDER: Any data on student satisfaction or engagement from SSE or DRP modules would
                    substantiate claims about learner understanding]
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="reflection" className="p-4 border rounded-md mt-2">
                <h2 className="text-xl font-semibold mb-4">Reflection</h2>

                <p className="mb-4">
                  Personal tutoring has been the most important source of my understanding of learners as whole people.
                  In a personal tutorial, I am not the expert demonstrating knowledge; I am a relatively safe adult in
                  the institution who a student can speak to about the things that are getting in the way of their
                  learning. I have supported students through mental health crises, bereavement, financial difficulty,
                  and the specific disorientation that international students can experience when moving to a new
                  country to study at one of the world's most pressurised universities. These conversations have not
                  always led to clear outcomes, but they have made me a much more empathetic and attentive teacher and
                  system designer.
                </p>
                <p className="mb-4">
                  I am increasingly convinced that the diversity of my student population is one of the most important
                  design constraints for any system I build. A system that works well for a confident, English-speaking
                  student who has grown up with technology may not work at all for a student who is navigating a new
                  academic culture, communicating in their second or third language, and managing significant family
                  pressure. When I design interfaces, I now ask explicitly: who might find this confusing, and what can
                  I do to make it clearer?
                </p>
                <p className="mb-4">


                  I have also become more critical of the assumptions embedded in learning analytics approaches,
                  including my own MSc thesis. Demographic data can be used to identify students who may need support,
                  but it can also encode and perpetuate structural inequalities if it is not handled carefully. I try to
                  design systems that surface needs without labelling students, and I am aware that this is an ongoing
                  ethical challenge rather than a problem to be solved once.
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
                    <h3 className="font-medium">Pedagogical Frameworks</h3>
                    <p className="text-sm text-muted-foreground">Key frameworks informing my practice</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Upload className="h-5 w-5 mt-0.5 text-muted-foreground"/>
                  <div>
                    <h3 className="font-medium">Student Feedback Analysis</h3>
                    <p className="text-sm text-muted-foreground">Data on learning effectiveness</p>
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
                    <span>Learning design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"/>
                    <span>Assessment strategy</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"/>
                    <span>Learner engagement</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"/>
                    <span>Educational evaluation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"/>
                    <span>Pedagogical innovation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
  )
}

