"use client";
import React from "react";
import Navbar from "./components/Navbar";
import { Flex, Box, Text } from "@chakra-ui/react";
import Headimage from "./components/ImageHeading";
import TextPart from "./components/TextPart";
import { Gallery, GalleryItem } from "./components/Gallery";

export default function Auto() {
  return (
    <Flex direction="column" alignItems="center">
      <Headimage src="/pindie.jpg" heading="PIN AND DIE SET" />
      <TextPart>
        <Flex fontSize={20} direction="column">
          <Text fontSize={26} fontWeight={700}>
            Automation
          </Text>{" "}
          Automation is revolutionizing industries by enhancing productivity,
          accuracy, and efficiency. Central to this revolution are technologies
          like Programmable Logic Controllers (PLCs), which are pivotal in
          controlling and automating machinery and processes.
        </Flex>
        <br />
        <Flex direction="column" fontSize={18}>
          <Text fontSize={26} fontWeight={700}>
            What is Automation?
          </Text>
          Automation refers to the use of technology to perform tasks with
          minimal human intervention. This can range from simple mechanical
          systems to complex computerized processes. The goal is to increase
          efficiency, consistency, and reliability in operations.
          <br />
          <Text fontSize={28} fontWeight={700}>
            <br />
            Advantages
          </Text>
          <Text>
            <strong>1. Increased Productivity:</strong> Automated systems can
            operate continuously, significantly boosting output and reducing
            production times. <br />
            <strong>2. Enhanced Efficiency:</strong> Automation optimizes
            processes, reducing waste and minimizing errors, leading to cost
            savings.
            <br />
            <strong>3. Improved Accuracy and Consistency:</strong> Automated
            systems perform tasks with high precision, ensuring consistent
            quality in production. <br />
            <strong>4. Cost Savings:</strong> While the initial investment in
            automation technology can be significant, the long-term savings from
            increased efficiency and reduced labor costs often outweigh the
            initial expenses. <br />
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
    </Flex>
  );
}
