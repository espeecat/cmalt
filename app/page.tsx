import { Card, Flex, Heading } from '@radix-ui/themes'
import PageFrame from "@/components/PageFrame";

export default async function Home() {

  return (
      <PageFrame>
        <Flex direction="column" gap="8">
          <Flex justify="between">
            <Heading>CMALT</Heading>
          </Flex>

          <p>CMALT portfolio</p>


        </Flex>
      </PageFrame>
  )
}
