import React from "react";
import { Flex, Text } from "@chakra-ui/react";

export default function TextPart({ children }) {
  return (
    <Flex
      direction="column"
      minH="100px"
      mt={3}
      mb={3}
      w="70vw"
      zIndex={0}
      boxShadow="dark-lg"
      p={5}
    >
      {children}
    </Flex>
  );
}
