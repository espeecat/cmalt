import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, FileText, LinkIcon, Upload } from "lucide-react"
import Link from "next/link"

export default function TeachingLearningPage() {
  return (
    <div className="container py-10">
      <div className="flex items-center gap-2 mb-8">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back to home</span>
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Teaching, Learning & Assessment</h1>
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
              <h2 className="text-xl font-semibold mb-4">Teaching, Learning & Assessment</h2>
              <p className="mb-4">
                This section demonstrates my understanding and engagement with teaching, learning, and assessment
                processes. It covers:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>An understanding of teaching, learning and/or assessment processes</li>
                <li>An understanding of your target learners</li>
                <li>The ability to design and support effective learning activities</li>
                <li>The ability to evaluate the effectiveness of learning activities</li>
              </ul>
              <p>
                Through the evidence and reflection provided, I demonstrate how I use technology to enhance teaching,
                learning, and assessment, showing awareness of different pedagogical approaches and how technology can
                support them.
              </p>
            </TabsContent>
            <TabsContent value="evidence" className="space-y-4 p-4 border rounded-md mt-2">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Evidence</h2>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Blended Learning Course Design</CardTitle>
                    <CardDescription>Course materials and student feedback</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Documentation of a blended learning course I designed, including learning objectives, activities,
                      assessment strategies, and student feedback data.
                    </p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="gap-2">
                        <FileText className="h-4 w-4" />
                        View Course Design
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Assessment Innovation Project</CardTitle>
                    <CardDescription>Implementation of technology-enhanced assessment</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      A case study of how I implemented innovative assessment methods using technology, including the
                      rationale, implementation process, and evaluation of effectiveness.
                    </p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="gap-2">
                        <FileText className="h-4 w-4" />
                        View Case Study
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="reflection" className="p-4 border rounded-md mt-2">
              <h2 className="text-xl font-semibold mb-4">Reflection</h2>
              <p className="mb-4">
                My approach to teaching, learning, and assessment has been shaped by both theoretical knowledge and
                practical experience. I believe that technology should serve pedagogical goals, not the other way
                around.
              </p>
              <p className="mb-4">
                One of the most significant insights I've gained is the importance of aligning technology use with
                specific learning objectives. Technology can enhance learning when it addresses specific pedagogical
                challenges or opportunities, but it can be a distraction when implemented without clear purpose.
              </p>
              <p>
                Moving forward, I aim to continue exploring how emerging technologies can support diverse learning needs
                and preferences. I'm particularly interested in how adaptive learning technologies can provide more
                personalized learning experiences while maintaining the social aspects of education.
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
                <LinkIcon className="h-5 w-5 mt-0.5 text-muted-foreground" />
                <div>
                  <h3 className="font-medium">Pedagogical Frameworks</h3>
                  <p className="text-sm text-muted-foreground">Key frameworks informing my practice</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Upload className="h-5 w-5 mt-0.5 text-muted-foreground" />
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
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Learning design</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Assessment strategy</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Learner engagement</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>Educational evaluation</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
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

