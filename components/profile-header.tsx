import {Avatar,  AvatarImage} from "@/components/ui/avatar"
import {Button} from "@/components/ui/button"
import {Badge} from "@/components/ui/badge"
import {Download, Mail} from "lucide-react"
import Link from "next/link"

export function ProfileHeader() {
  return (
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <Avatar className="h-32 w-32">
            <AvatarImage src="jason-small.jpg" alt="Jason Bailey Profile"/>
          </Avatar>
          <div className="flex flex-col items-center gap-2 md:items-start">
            <h1 className="text-3xl font-bold">Dr Jason Bailey</h1>
            <p className="text-muted-foreground">Edtech Software Developer</p>
            <div className="flex flex-wrap gap-2">
              {/*<Badge variant="secondary">CMALT Certified</Badge>*/}
              <Badge variant="secondary">Software Development</Badge>
              <Badge variant="secondary">Educational Technology</Badge>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <div className="rounded-lg border bg-card p-6">
            <h2 className="text-xl font-semibold mb-4">About Me</h2>
            <p className="text-muted-foreground mb-4">
              I am an Educational Software Developer in the Department of Computing at Imperial College London, a role I
              have held since January 2022. My work sits at the intersection of software engineering and learning
              technology: I design, build, and maintain the bespoke digital systems that underpin teaching, learning,
              and assessment for approximately 1,500 students and 100 staff in the department on a daily basis. Before
              Imperial, I worked at the University of Brighton, where the COVID-19 pandemic prompted me to take a
              leading role in enabling the rapid transition to remote teaching delivery — an experience that
              fundamentally shaped my understanding of both the fragility and the transformative potential of learning
              technology.

            </p>
            <p className="text-muted-foreground mb-4">
              My academic background is unusual for a learning technologist. I hold a DPhil in Engineering from the
              University of Sussex (1999) and, more recently, an MSc in Data Analytics, Computing and Mathematics from
              the University of Brighton (2017, with Distinction), for which my thesis examined how data drawn from
              Virtual Learning Environments and student demographics could be used to model and predict student
              performance. I also hold a City and Guilds Teaching and Further Education qualification. This combination
              of engineering rigour, data literacy, and formal teaching preparation means that I approach EdTech not
              merely as a practitioner but as someone who asks hard questions about whether a given technology is
              actually improving learning outcomes, and for whom.


            </p>

            <p className="text-muted-foreground mb-4">

              In my current role, I contribute directly to core teaching and research activities. I design and deliver
              MSc lectures on web design and database systems, write and mark coursework, supervise final-year
              undergraduate and postgraduate projects, and act as personal tutor to more than twenty students. Alongside
              this, I have co-authored three peer-reviewed conference papers published in 2025, addressing lean software
              engineering education, open-source learning ecosystems, and student-facing Platform as a Service
              infrastructure. I was awarded a Silver Staff Recognition Award in October 2025 for work on personalised
              student timetabling, and two Bronze Staff Recognition Awards for the development of a PhD student tracking
              tool.


            </p>

            <p className="text-muted-foreground mb-4">

              I am a member of the Association for Learning Technology (ALT) and regularly engage with the broader
              learning technology community, attending events such as ITiCSE 2025 and the CERC bi-weekly workshops
              hosted by King's College London. I have presented my work internationally, including at an invited seminar
              at the University of Glasgow and at TU Munich, and I hosted a collaborative workshop with academics from
              TUM, KCL, and other institutions in October 2024.

            </p>

            <p className="text-muted-foreground mb-4">

              I am applying for CMALT because I want to ground my practical expertise in a recognised professional
              framework, to demonstrate that the work I do is informed by genuine pedagogical understanding and ethical
              responsibility.

            </p>


            <p className="text-muted-foreground mb-4">
              My academic background is unusual for a learning technologist. I hold a DPhil in Engineering from the
              University of Sussex (1999) and, more recently, an MSc in Data Analytics, Computing and Mathematics from
              the University of Brighton (2017, with Distinction), for which my thesis examined how data drawn from
              Virtual Learning Environments and student demographics could be used to model and predict student
              performance. I also hold a City and Guilds Teaching and Further Education qualification. This combination
              of engineering rigour, data literacy, and formal teaching preparation means that I approach EdTech not
              merely as a practitioner but as someone who asks hard questions about whether a given technology is
              actually improving learning outcomes, and for whom.

              In my current role, I contribute directly to core teaching and research activities. I design and deliver
              MSc lectures on web design and database systems, write and mark coursework, supervise final-year
              undergraduate and postgraduate projects, and act as personal tutor to more than twenty students. Alongside
              this, I have co-authored three peer-reviewed conference papers published in 2025, addressing lean software
              engineering education, open-source learning ecosystems, and student-facing Platform as a Service
              infrastructure. I was awarded a Silver Staff Recognition Award in October 2025 for work on personalised
              student timetabling, and two Bronze Staff Recognition Awards for the development of a PhD student tracking
              tool.

              I am a member of the Association for Learning Technology (ALT) and regularly engage with the broader
              learning technology community, attending events such as ITiCSE 2025 and the CERC bi-weekly workshops
              hosted by King's College London. I have presented my work internationally, including at an invited seminar
              at the University of Glasgow and at TU Munich, and I hosted a collaborative workshop with academics from
              TUM, KCL, and other institutions in October 2024.

              I am applying for CMALT because I want to ground my practical expertise in a recognised professional
              framework, to demonstrate that the work I do is informed by genuine pedagogical understanding and ethical
              responsibility.

            </p>

            <p className="text-muted-foreground mb-4">
              My academic background is unusual for a learning technologist. I hold a DPhil in Engineering from the
              University of Sussex (1999) and, more recently, an MSc in Data Analytics, Computing and Mathematics from
              the University of Brighton (2017, with Distinction), for which my thesis examined how data drawn from
              Virtual Learning Environments and student demographics could be used to model and predict student
              performance. I also hold a City and Guilds Teaching and Further Education qualification. This combination
              of engineering rigour, data literacy, and formal teaching preparation means that I approach EdTech not
              merely as a practitioner but as someone who asks hard questions about whether a given technology is
              actually improving learning outcomes, and for whom.

              In my current role, I contribute directly to core teaching and research activities. I design and deliver
              MSc lectures on web design and database systems, write and mark coursework, supervise final-year
              undergraduate and postgraduate projects, and act as personal tutor to more than twenty students. Alongside
              this, I have co-authored three peer-reviewed conference papers published in 2025, addressing lean software
              engineering education, open-source learning ecosystems, and student-facing Platform as a Service
              infrastructure. I was awarded a Silver Staff Recognition Award in October 2025 for work on personalised
              student timetabling, and two Bronze Staff Recognition Awards for the development of a PhD student tracking
              tool.

              I am a member of the Association for Learning Technology (ALT) and regularly engage with the broader
              learning technology community, attending events such as ITiCSE 2025 and the CERC bi-weekly workshops
              hosted by King's College London. I have presented my work internationally, including at an invited seminar
              at the University of Glasgow and at TU Munich, and I hosted a collaborative workshop with academics from
              TUM, KCL, and other institutions in October 2024.

              I am applying for CMALT because I want to ground my practical expertise in a recognised professional
              framework, to demonstrate that the work I do is informed by genuine pedagogical understanding and ethical
              responsibility.

            </p>


            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <Download className="h-4 w-4"/>
                Download CV
              </Button>
              <Button variant="outline" size="sm" className="gap-2" asChild>
                <Link href="/contact">
                  <Mail className="h-4 w-4"/>
                  Contact Me
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
  )
}

