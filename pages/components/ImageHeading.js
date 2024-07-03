import { Flex, Box, Text } from "@chakra-ui/react";
import Navbar from "./Navbar";

export default function Headimage({ src, heading }) {
  return (
    <>
      <Flex direction="column">
        <Navbar />
        <Flex
          bgImage={`url('${src}')`}
          objectFit="cover"
          width="100vw"
          height="30vh"
          justifyContent="center"
          alignItems="center"
          mt="10"
        >
          <Box
            position="absolute"
            top={0}
            left={0}
            w="100vw"
            h="34.5vh"
            bg="black"
            opacity={0.5}
            bgBlendMode="multiply"
          />
          <Text
            textAlign="center"
            zIndex={150}
            fontWeight={700}
            fontSize={"6xl"}
            color="white"
          >
            {heading}
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
