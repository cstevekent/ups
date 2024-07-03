"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactElement } from "react";
import {
  FcAbout,
  FcAssistant,
  FcCollaboration,
  FcDonate,
  FcManager,
  FcHome,
} from "react-icons/fc";

const Card = ({ heading, description, icon, href }) => {
  return (
    <Box
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="lg">{heading}</Heading>
          <Text mt={1} fontSize={"md"}>
            {description}
          </Text>
        </Box>
        <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
          Learn more
        </Button>
      </Stack>
    </Box>
  );
};

export default function Features() {
  return (
    <Box p={4} mt={32} mb={32}>
      <Stack spacing={4} as={Container} maxW={"5xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "3xl", sm: "5xl" }} fontWeight={700}>
          COMPANY PROFILE
        </Heading>
      </Stack>

      <Container maxW={"5xl"} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={"Location"}
            icon={<Icon as={FcHome} w={16} h={16} />}
            description={
              "We are located in Batam Island, the duty free special economic zone, where many interational companies had setup operations on this island."
            }
            href={"#"}
          />
          <Card
            heading={"Capabilities"}
            icon={<Icon as={FcCollaboration} w={16} h={16} />}
            description={
              "Due to the advantage of our geograpical location, we are able to do shipment easily for our products"
            }
            href={"#"}
          />
          <Card
            heading={"Abilities"}
            icon={<Icon as={FcDonate} w={16} h={16} />}
            description={
              "We are able to fabricate Jig and Fixture, Spring, Machining Part, Pin and Die set, Automation, and Design Engineering"
            }
            href={"#"}
          />
        </Flex>
      </Container>
    </Box>
  );
}
