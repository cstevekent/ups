import { Image, Text } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";

export default function Intro() {
  return (
    <Flex direction="row" alignItems="center" justifyContent="center" padding={4}>
      <Flex padding={4}>
        <Image
          src="/compic1.png"
          width={400}
          height={400}
          border="2px"
          borderColor="black"
          />
      </Flex>
      <Flex padding={4} direction="column">
        <Text fontFamily={'heading'} fontWeight={700} fontSize={50}>INTRODUCTION</Text>
        <Text>PT Utama Pasogit Sejahtera is located in Batam island,<br />a duty free special economic zone within Indonesia.</Text>
      </Flex>
    </Flex>
  )
}