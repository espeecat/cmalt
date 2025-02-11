import {  Flex, Heading } from '@radix-ui/themes'
import PageFrame from "@/components/PageFrame";

export default async function About() {

  return (
      <PageFrame>
        <Flex direction="column" gap="8">
          <Flex justify="between">
            <Heading>About Page</Heading>
          </Flex>

          <p>CMALT About page</p>


        </Flex>
      </PageFrame>
  )
}
