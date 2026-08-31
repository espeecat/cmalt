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

        <h2 className="text-3xl font-bold">3a</h2>
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
                <h3 className="text-xl font-semibold mb-4>Data Protection"> (UK GDPR and the Data Protection Act
                  2018)</h3>


                <p className="mb-4">

                  The systems I manage — Scientia, the Teaching database, Answerbook, and the student wellbeing tool —
                  collectively hold substantial volumes of personally identifiable student data, including academic
                  records, assessment submissions, progression information, and, in the case of the wellbeing tool,
                  sensitive data relating to mental health. My responsibility for these systems means that I must
                  understand and apply data protection law, not as an abstract compliance requirement, but as a
                  practical framework that shapes how I design, deploy, and restrict access to student information.

                </p>
                <p className="mb-4">

                  In practice, this means implementing appropriate access controls so that staff see only the data they
                  are authorised to see (a supervisor sees their own supervisees' progression data, not that of the
                  whole cohort), ensuring that data is not retained beyond what is necessary, designing data exports
                  from Answerbook that are handled securely, and thinking carefully about the lawful basis for
                  processing the particularly sensitive data that the wellbeing tool will collect. I have engaged with
                  Imperial College's data protection guidance and with the department's own data handling policies, and
                  I ensure that any new data collection capability I build is reviewed through appropriate governance
                  channels before deployment.

                </p>


                <h3 className="text-xl font-semibold mb-4>Data Protection">Accessibility (Public Sector Bodies
                  Accessibility Regulations 2018 / WCAG 2.1)</h3>


                <p className="mb-4">
                  As a public sector body, Imperial College is subject to the Public Sector Bodies Accessibility
                  Regulations 2018, which require that web-based systems meet the Web Content Accessibility Guidelines
                  (WCAG) 2.1 at level AA. Because Scientia, Answerbook, and ImPaaS are bespoke systems, their
                  accessibility compliance is my responsibility rather than a vendor's. I conduct accessibility
                  reviews of interfaces I develop, considering issues of colour contrast, keyboard navigability,
                  screen reader compatibility, and the clarity of error messages and instructions. I am aware that
                  accessibility is not a checkbox exercise: students with disabilities are entitled to an equivalent
                  experience, and design decisions that seem minor from a developer's perspective can have significant
                  impact on whether a system is usable by someone relying on assistive technology.

                </p>
                <p className="mb-4">
                  I am also aware of the intersection between accessibility and the student wellbeing dimension of my
                  work: students with mental health conditions or neurodevelopmental differences are
                  disproportionately likely to be disadvantaged by systems that are difficult to navigate under
                  stress.

                </p>


                <h3 className="text-xl font-semibold mb-4>Data Protection">Academic Integrity</h3>
                <p className="mb-4">
                  A third legislative and policy domain that bears directly on my work is academic integrity. As the
                  manager of Answerbook for digital exam delivery, I am responsible for systems whose design must
                  prevent and detect academic misconduct. This involves technical measures — secure login, session
                  management, proctoring considerations, controlled access to permitted resources — but also
                  procedural ones: clear documentation of what is and is not permitted, and defensible audit trails
                  that can be used in misconduct investigations if necessary.
                </p>
              </TabsContent>
              <TabsContent value="evidence" className="space-y-4 p-4 border rounded-md mt-2">
                <div className="space-y-4">

                  <h2 className="text-xl font-semibold">Evidence</h2>
                  <p className="mb-4">
                    - Data protection impact assessments (DPIAs) or data handling documentation for Scientia,
                    Answerbook, or the wellbeing tool
                    - Accessibility review records or audit reports for systems I have developed
                    - Documentation of access control design in Scientia or the Teaching database
                    - Academic integrity policy documentation for digital exams and evidence of its implementation in
                    Answerbook
                    - [PLACEHOLDER: If Imperial College has issued specific guidance on AI and academic integrity that
                    Jason has engaged with, this would be highly relevant here]
                    - [PLACEHOLDER: Any correspondence with Imperial's Data Protection Officer or Information Governance
                    team would demonstrate active engagement with data protection requirements]
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="reflection" className="p-4 border rounded-md mt-2">
                <h2 className="text-xl font-semibold mb-4">Reflection</h2>
                <p className="mb-4">
                  Working with student data at this scale has made me genuinely more committed to data protection
                  principles, not less. Early in my career, I experienced data protection as a bureaucratic constraint;
                  I now understand it as an ethical framework that reflects real harms. A data breach involving student
                  mental health records would be catastrophic — not in the abstract sense of a regulatory fine, but in
                  the human sense of students' most private disclosures becoming visible to people they had not
                  consented to share them with. This understanding shapes the care I bring to security architecture and
                  access control design.
                </p>
                <p className="mb-4">
                  Accessibility has been the area where I have had to work hardest to move from compliance mindset to
                  genuine inclusion mindset. I have found it useful to approach accessibility not as a set of technical
                  rules but as a question: can every student use this system in a way that does not put them at a
                  disadvantage relative to their peers? When I frame it that way, it becomes a design problem rather
                  than a checklist, and the answers are more interesting. I have also found that the constraints imposed
                  by accessibility requirements often lead to cleaner, simpler interfaces — which benefit all users.
                </p>
                <p className="mb-4">
                  I recognise that my engagement with these legislative domains is ongoing and that the regulatory
                  landscape continues to evolve, particularly in relation to AI systems. The use of LLMs in educational
                  contexts raises new questions about data protection (what happens to student data submitted to a
                  third-party AI service?), about accessibility (are AI-generated responses readable by screen
                  readers?), and about academic integrity (how should we define and detect AI-assisted misconduct?). I
                  am actively monitoring these developments and contributing to institutional thinking where I can.
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

        <h2 className="text-2xl font-bold mt-10">3b: Policy — Institutional and National Policy</h2>
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
                  [PLACEHOLDER: Overview content for this section.]
                </p>
              </TabsContent>
              <TabsContent value="evidence" className="space-y-4 p-4 border rounded-md mt-2">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Evidence</h2>
                  <p className="mb-4">
                    - Evidence of participation in College-level VLE and tool selection processes (emails, meeting
                    notes, reports)
                    - ITiCSE 2025 attendance record and TFDF funding documentation
                    - CERC workshop attendance records or correspondence
                    - Published conference papers demonstrating engagement with national and international research and
                    policy communities:
                    - "Beyond Coding: Lean Learning for Real-World Software Engineering" (EERN '25, July 2025)
                    - "Creating an Open-Source Ecosystem for Contextualized Learning in Software Engineering" (HEAd'25,
                    June 2025, DOI: 10.4995/HEAd25.2025.20104)
                    - [PLACEHOLDER: If Jason has contributed to any formal departmental or College policy documents —
                    for example, an AI assessment policy or a digital exam procedure — this should be included here]
                    - [PLACEHOLDER: Evidence of engagement with Jisc, ALT, or QAA guidance on AI in education would
                    strengthen this section]
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="reflection" className="p-4 border rounded-md mt-2">
                <h2 className="text-xl font-semibold mb-4">Reflection</h2>
                <p className="mb-4">
                  One of the most significant policy shifts I have worked through is the institutional move toward
                  digital-first assessment. Before the pandemic, digital exams were the exception; they are now
                  increasingly the norm. This shift happened faster than the policy infrastructure could keep up with —
                  guidance on what constitutes academic integrity in a digital exam context, on how to handle
                  connectivity failures equitably, and on how results from digital exams should be stored and audited,
                  was developed retrospectively. I found myself making pragmatic decisions in the absence of clear
                  policy, and I am aware that some of those decisions should have been escalated rather than resolved at
                  the technical level.
                </p>
                <p className="mb-4">
                  This experience has made me a stronger advocate for involving technical staff in policy development
                  conversations at an early stage, not just in implementation. The technical choices we make — about
                  what data to log, about how to authenticate users, about how to handle a student whose session is
                  interrupted — are themselves policy decisions, even when they are framed as engineering choices. I
                  have tried to articulate this argument within my department and to contribute technical insight to
                  discussions that might otherwise exclude it.
                </p>
                <p className="mb-4">

                  The national policy landscape around AI is evolving rapidly, and I am conscious that some of the
                  systems I work with — particularly the Lambda Feedback and learning analytics projects — sit in
                  territory that existing policy has not yet adequately addressed. I try to engage with this uncertainty
                  transparently, sharing what I do not know as well as what I do, and advocating for cautious,
                  evidence-based adoption of AI in educational contexts.
                </p>
              </TabsContent>
            </Tabs>
          </div>

          <div className="space-y-6">

          </div>
        </div>
      </div>
  )
}

