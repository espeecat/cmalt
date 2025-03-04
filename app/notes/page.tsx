import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import {ArrowLeft, Mail, MapPin, Phone} from "lucide-react"
import Link from "next/link"

export default function NotesPage() {
  return (
      <div className="container py-10">
        <div className="flex items-center gap-2 mb-8">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4"/>
              <span className="sr-only">Back to home</span>
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Notes page</h1>
        </div>

        <div className="grid gap-8 md:grid-cols-2">


          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>1. Operational Issues</CardTitle>
                <CardDescription>Notes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <ul>
                    <li>1a An understanding of the constraints and benefits of diﬀerent technologies</li>
                    <dt>Teams@covid, student dashboard, BB to staff in CEM
                      <br/>
                      You should show how you have used or supported others to use technology appropriately, given the
                      constraints and benefits it provides within your context. You should consider how you compared and
                      contrasted the constraints and benefits of diﬀerent technologies to meet the specific needs of
                      users/learners.<br/>
                      Evidence in support of such statements might include a brief commentary on the choices behind the
                      development and use of Learning Technology that influence its fitness for purpose. This might
                      discuss issues such as aﬀordances of the technology, viability, sustainability, scalability,
                      interoperability and value for money. Suitable evidence may include a design outline, proposal,
                      conference presentation or similar. Alternatively, you might want to take this opportunity to find
                      out
                      more about a technology you have deployed, and produce a report on its viability, relating this to
                      the
                      constraints and benefits of diﬀerent technologies.
                    </dt>
                    <li>1b Technical knowledge and ability in the use of Learning Technology</li>
                    <dt>use github for portfolio, developed own web pages<br/>
                      You should show that you have a sound understanding of and experience in the use of a range of
                      learning technologies. These might include web pages and online resources, Virtual Learning
                      Environments (at a sophisticated level), electronic assessment, blogs, wikis, mobile technology,
                      AR/VR, programming languages, or other relevant technologies. It is important to make it clear
                      how the technology you discuss is being used for learning and/or teaching.
                      Evidence might include screenshots of your work, copies of certificates (originals not needed)
                      from
                      relevant training courses undertaken/qualifications gained, testimonials from colleagues or senior
                      staﬀ.

                    </dt>
                    <li>1c Supporting the deployment of learning technologies</li>
                    <dt>supporting deployment of LT -cem teaching and doc-edtech<br/>

                      Statements about your involvement in supporting the deployment of Learning Technology might
                      relate to supporting learners, providing training or other forms of professional development,
                      advising <br/>

                      on technical and usability issues or designing/developing with these in mind, developing
                      strategies or
                      policies, managing change, securing or deploying dedicated funding, and so on, all within the
                      context
                      of the educational use of Learning Technology.
                      For evidence, you might include the overview section of a strategy document, meeting minutes,
                      summaries of student feedback, testimonials or witness statements from other colleagues.

                    </dt>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Learning Teaching and Assessment processes</CardTitle>
                <CardDescription>Notes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <ul>
                    <li>2a An understanding of teaching, learning and/or assessment processes</li>
                    <dt>An understanding of teaching, learning and/or assessment processes
                      Statements here might relate to areas such as teaching experience, learning design, curriculum
                      development, work-based assessment, the creation and execution of a programme of training, and
                      so on.<br/>
                      Evidence might include Senior or Principal Fellowship of the Higher Education Academy, a PGCE
                      award or other relevant postgraduate qualification, evidence of relevant professional development
                      courses or extracts from portfolios, and so on. Commentaries from peers on your approach would
                      also provide suitable evidence. Other possibilities include teaching experience and reflective
                      statements that analyse experience in terms of learning theory, pedagogical approaches,
                      sociological
                      theories, or a comparable, recognised perspective (include relevant citations in appropriate
                      form). In
                      relation to learning design, a report, specification or reflective statement might be provided
                      that
                      clearly elaborates the principles that informed the design process.There must be some
                      consideration
                      of how technology is changing / impacting upon approaches to teaching and learning and/or the
                      roles of learners, teachers and support staﬀ in your context.
                    </dt>
                    <li>2b An understanding of your target learners</li>
                    <dt>Statements should show how you have found out about learners’ needs and the context for their
                      learning, and how you have developed approaches that reflect this.<br/>
                      Evidence might include a description of how assistive technologies have been used to support
                      disabled students, how learner feedback has influenced the design of an e-portfolio, how the needs
                      of work-based learners or overseas students have shaped the curriculum, or records of
                      conversations with product analysts, marketing departments or course teams and the resulting plans
                      for your design. Evidence of changed practice, rather than simply the recognition that this is an
                      important area, is required.<br/>
                    </dt>

                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. The Wider Context: Understanding and engaging with
                  legislation, policies and standards</CardTitle>
                <CardDescription>Notes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <ul>
                    <li>3a Understanding and engaging with legislation</li>
                    <dt>
                      Statements here should show how relevant legislation has influenced your work. You are not
                      expected to have expert knowledge, but you should demonstrate a sound understanding of the
                      legislation discussed, and are expected to be aware of how it relates to and impacts on teaching
                      and
                      learning in your context and on your current and future practice.
                      In the UK you would be expected to demonstrate how you work within the context of a relevant piece
                      of legislation such as (but not limited to):<br/>

                      <br/>Equality, including accessibility, special educational needs, etc.
                      <br/>Intellectual property (IPR)
                      <br/>Copyright and licencing
                      <br/>General Data Protection Regulation (GDPR)
                      <br/>Freedom of Information (if you work for a public body)
                      <br/>Child protection
                      <br/>Points Based Immigration System (PBIS)
                      <br/><br/>If you are based outside of the UK, there may be diﬀerent requirements, and you should
                      indicate this
                      in your portfolio.
                      <br/>You should consider how your example impacts on teaching and learning in your context, and on
                      the
                      nature and evolution of your practice. You may find it helpful to refer to the guidance on
                      reflective
                      writing, above.
                      <br/>Evidence might include minutes of meetings with legal advisors, documentation showing how
                      legal
                      issues have influenced work (such as reports or data protection forms), relevant training
                      undertaken
                      or qualifications gained, evidence of work you have produced/authored, or of your contribution to
                      relevant planning work, and so on.
                    </dt>
                    <li>3b Understanding and engaging with policies and standards</li>
                    <dt>
                      In this second section you must discuss how you engage with one or more policy issues in your
                      context. These could be government policies and strategies or institutional policies and
                      strategies,
                      and might include, for example:<br/><br/>

                      <br/>Technical standards
                      <br/>Equality, diversion and inclusion strategies
                      <br/>Widening participation
                      <br/>Open Access policies
                      <br/>Ethical frameworks or policies for the use of technology in education
                      <br/>Professional codes of practice
                      <br/><br/>Evidence might include evidence of involvement in writing or forming policies or leading
                      policy
                      evaluations, or evidence of engagement with policies, such as justifications for modifications to
                      a
                      course to reflect new policies, a record of how technical standards have been taken into account
                      during system development, and so on. The impact of these activities should also be reflected on
                      and where possible documented.


                    </dt>

                  </ul>
                </div>
              </CardContent>
            </Card>


            <Card>
              <CardHeader>
                <CardTitle>4. comms and working with others</CardTitle>
                <CardDescription>Notes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <ul>
                    <li>4a Communication and working with others</li>
                    <dt>

                      While candidates are expected to evidence communication and dissemination of eﬀective practice
                      throughout the portfolio, this section requires you to focus on two or more examples which
                      highlight
                      how your work involves collaboration and communication, for example through participation in a
                      team, acting as an interface to other groups, building consensus and brokering support,
                      contributing

                      to wider networks and communities of practice/research communities, and so on.

                      Candidates should demonstrate their knowledge and skills in communication through working with
                      others. Statements could describe the way in which your work involves collaboration, for example
                      through participation in a team or acting as an interface to other groups. You should discuss how
                      you
                      learn from peers and colleagues, and how you disseminate your knowledge and/or practice, for
                      example through presentations or publications. You may also choose to discuss how you select
                      appropriate forms of communication and utilise diﬀerent technologies. As in other sections of the
                      portfolio, you should draw out the impact of the work described.
                      Relevant evidence might include publication or presentation (in various forms/formats),
                      participation
                      in relevant networks or organisations, reflection on collaborations with others and testimonials
                      from
                      colleagues, or evidence showing your activity within a team process, for example how you have
                      brokered support for a particular initiative (for example from a technical or legal support
                      service), or
                      how you have worked with others to solve problems. Where your evidence involved collaboration,
                      please acknowledge the contribution of others; and remember that it is your responsibility to
                      ensure
                      that evidence is appropriately anonymised and/or that appropriate permissions have been obtained.

                    </dt>

                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Specialist areas</CardTitle>
                <CardDescription>Notes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <ul>
                    <li>specialist</li>
                    <dt>

                      As well as the core areas, candidates are required to demonstrate evidence of independent practice
                      in two Specialist areas. This reflects the fact that, although there are common areas of work for
                      learning technologists, practice is extremely diverse and everyone specialises in something
                      diﬀerent.
                      There may be overlap with other sections, but the Specialist areas should be presented as discrete
                      (and complete) sections in themselves.
                      Your specialist topic should reflect an area where you have particular expertise. This may be
                      unique
                      to you or common across your team, but goes beyond the use of and engagement with Learning
                      Technology which would be expected of any professional in your role. Below are some examples of
                      Specialist areas chosen by previous Senior CMALT candidates. You may define any areas that
                      reflects your expertise. It is recognised that practice is constantly evolving and that Senior
                      CMALT
                      candidates come from very diverse contexts; this list of examples is neither comprehensive nor
                      prescriptive.<br/><br/>

                      <br/><br/> Leadership and Learning Technology
                      <br/><br/> Learning and Teaching Support
                      <br/><br/> Framework and Strategies
                      <br/><br/> Open Practice in a Leadership role
                      <br/><br/> Training, mentoring and developing
                      <br/><br/> others
                      <br/><br/> Staff development
                      <br/><br/> Project Management
                      <br/><br/> Evaluation
                      <br/><br/> Innovative and digital assessment
                      <br/><br/> Implementing and supporting Learning
                      <br/><br/> Management Systems
                      <br/><br/> Research
                      <br/><br/> The Scholarship of Technology
                      <br/><br/> Enhanced Learning
                      <br/><br/> Open Access research publishing in
                      <br/><br/> Learning Technology
                      <br/><br/> Accessibility
                      <br/><br/> MOOC design
                      <br/><br/> Designing and teaching online courses
                      <br/><br/> Distance learning
                      <br/><br/> Producing learning materials and
                      <br/><br/> content
                      <br/><br/> Mobile Learning and Social Media

                      <br/><br/>
                      Defining and evidencing your Specialist areas
                      In describing your Specialist areas you should refer to the core values listed at the top of these
                      guidelines. Because these are specialist areas you should be clear what makes your work distinct
                      from common practice. It may be that your specialist area is common amongst the group that you
                      work in as you all work in a similar area; that is perfectly acceptable.
                      Evidence for your specialist activities is likely to be very specific but could include: reports,
                      papers,

                      blog posts or presentations you have written; this could be backed up by a job description plus
                      written statements supporting your specialist knowledge from colleagues, clients or managers;
                      active
                      membership of professional or other bodies; recordings or transcripts of presentations; social
                      media
                      feedback from peers; certificates of completion of specialist training programmes or courses, and
                      so
                      on.

                    </dt>

                  </ul>
                </div>
              </CardContent>
            </Card>


            <Card>
              <CardHeader>
                <CardTitle>Future plans</CardTitle>
                <CardDescription>Notes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <ul>
                    <li>future....</li>

                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Confirmation</CardTitle>
                <CardDescription>Notes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <ul>
                    <li>.....</li>

                  </ul>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
  )
}

