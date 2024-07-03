"use client";
import React from "react";
import Navbar from "./components/Navbar";
import { Flex, Box, Text } from "@chakra-ui/react";
import Headimage from "./components/ImageHeading";
import TextPart from "./components/TextPart";
import { Gallery, GalleryItem } from "./components/Gallery";
import Footer from "./components/footer";

export default function Pindie() {
  return (
    <Flex direction="column" alignItems="center">
      <Headimage src="/endesign.jpg" heading="DESIGN ENGINEERING" />
      <TextPart>
        <Flex fontSize={20} direction="column">
          <Text fontSize={26} fontWeight={700}>
            Design Engineering Consultant
          </Text>{" "}
          In today's rapidly evolving technological landscape, design
          engineering consultants play a crucial role in driving innovation,
          efficiency, and competitiveness in various industries. They bring
          specialized expertise and creative solutions to complex engineering
          challenges, helping businesses develop cutting-edge products and
          systems.
        </Flex>
        <br />
        <Flex direction="column" fontSize={18}>
          <Text fontSize={26} fontWeight={700}>
            What is Design Engineering Consultant?
          </Text>
          A design engineering consultant is a professional who provides expert
          advice and solutions in the field of design engineering. They work
          with businesses to conceptualize, design, and develop products,
          systems, and processes that meet specific requirements and industry
          standards. These consultants combine technical knowledge, creativity,
          and practical experience to deliver innovative and efficient
          solutions.
          <br />
          <Text fontSize={28} fontWeight={700}>
            <br />
            Advantages
          </Text>
          <Text>
            <strong>1. Expertise:</strong> Design engineering consultants bring
            a wealth of knowledge and experience to the table, offering insights
            and solutions that may not be available in-house.
            <br />
            <strong>2. Innovation:</strong> They help businesses stay ahead of
            the competition by introducing new technologies, materials, and
            design methodologies.
            <br />
            <strong>3. Cost Efficiency:</strong> By optimizing designs and
            processes, consultants can help reduce production costs, improve
            resource utilization, and minimize waste. <br />
            <strong>4. Time Savings:</strong> Consultants can accelerate project
            timelines by providing focused expertise and avoiding common
            pitfalls.
            <br />
          </Text>
        </Flex>
        <Gallery>
          <GalleryItem props="/asset/pmp1.png" />
          <GalleryItem props="/asset/pmp2.png" />
          <GalleryItem props="/asset/pmp3.png" />
          <GalleryItem props="/asset/pmp4.png" />
          <GalleryItem props="/asset/pmp5.png" />
          <GalleryItem props="/asset/pmp6.png" />
        </Gallery>
      </TextPart>
      <Footer />
    </Flex>
  );
}
