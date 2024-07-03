"use client";
import React from "react";
import Navbar from "./components/Navbar";
import { Flex, Box, Text } from "@chakra-ui/react";
import Headimage from "./components/ImageHeading";
import { Gallery, GalleryItem } from "./components/Gallery";
import TextPart from "./components/TextPart";
import Footer from "./components/footer";

export default function Pmp() {
  return (
    <Flex direction="column" justifyContent="center" alignItems="center">
      <Headimage src="/pmp.jpg" heading="PRECISION MACHINING PART" />
      <TextPart>
        <Flex fontSize={20} direction="column">
          <Text fontSize={26} fontWeight={700}>
            Precision Machining Part
          </Text>{" "}
          In the realm of modern manufacturing, precision machining is a
          cornerstone of producing high-quality, accurate, and reliable parts.
          This advanced process is essential in creating components that meet
          strict specifications and tolerances required in various industries.
        </Flex>
        <br />
        <Flex direction="column" fontSize={18}>
          <Text fontSize={26} fontWeight={700}>
            What is Precision Machining?
          </Text>
          Precision machining is a manufacturing process that involves removing
          material from a workpiece to create parts with exact dimensions and
          intricate details. This process uses advanced machinery, such as CNC
          (Computer Numerical Control) machines, lathes, mills, and grinders, to
          achieve the desired shape and finish. The term "precision" highlights
          the meticulous accuracy and consistency maintained throughout the
          manufacturing process.
          <br />
          <Text fontSize={28} fontWeight={700}>
            <br />
            Advantages
          </Text>
          <Text>
            <strong>1. High Accuracy:</strong> Precision machining delivers
            parts with extremely tight tolerances, ensuring that each component
            fits perfectly with others. This level of accuracy is vital for
            applications where even the smallest deviation can lead to failure
            or suboptimal performance. <br />
            <strong>2. Consistency:</strong>Using advanced machinery and
            technology, precision machining ensures that each part produced is
            identical to the last. This consistency is crucial in industries
            where uniformity is essential for assembly and functionality.
            <br />
            <strong>3. Quality and Reliability:</strong>Precision-machined parts
            are known for their high quality and durability. The meticulous
            manufacturing process minimizes defects and inconsistencies,
            resulting in components that can withstand rigorous use and
            demanding conditions. <br />
            <strong>4. Efficiency:</strong> CNC machines and other precision
            equipment can operate at high speeds and with minimal human
            intervention, increasing production efficiency. This reduces lead
            times and costs, making precision machining an economical choice for
            both small and large-scale production runs. <br />
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
