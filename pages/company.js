"use client";
import React from "react";
import { Flex, Image, Text } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Headimage from "./components/ImageHeading";
import TextPart from "./components/TextPart";
import Footer from "./components/footer";

export default function Company() {
  return (
    <Flex direction="column" alignItems="center" justifyContent="center">
      <Navbar />
      <Headimage src="/ups.png" heading="PT. UTAMA PASOGIT SEJAHTERA" />
      <TextPart>
        <Flex justifyContent="center" p={5} pb={10}>
          <Text
            boxShadow="dark-lg"
            bg="gray.500"
            p={3}
            fontSize={50}
            fontWeight={700}
          >
            ABOUT US
          </Text>
        </Flex>
        <Flex direction={{ base: "column", md: "row" }} p={5}>
          <Image src="/batam.png" width={500} height={500} flexBasis="100%" />
          <Text fontSize={28} textAlign="justify" p={5} flexBasis="100%">
            <strong>PT. Utama Pasogit Sejahtera</strong> is located in Batam
            Island, a duty free special economic zone within Indonesia. Many
            international companies have set up operations on Batam as it is
            only 15 km from Singapore, the world's largest container port. This
            location provides us with easy shipment capabilities for our
            products to anywhere in the world. We are manufacturing jig and
            fixtures, spring, machining part, automation, and design engineering
            consultant.
          </Text>
        </Flex>
        <Flex direction={{ base: "column", md: "row" }} p={5}>
          <Text fontSize={28} textAlign="justify" p={5} flexBasis="100%">
            <strong>OUR VISION:</strong>
            <br /> We are commited to deliver products and continually improve
            effectiveness of the quality product, to achieve productivity and
            total customer satisfaction.
          </Text>
          <Text fontSize={28} textAlign="justify" flexBasis="100%" p={5}>
            <strong>OUR MISSION:</strong>
            <br /> We strived to prepare and manufacture the most comperhensive
            product with
            <br /> • Minimum cost
            <br /> • Maximum Effectiveness
            <br /> • On Time Delivery
          </Text>
        </Flex>
      </TextPart>
      <Footer />
    </Flex>
  );
}
