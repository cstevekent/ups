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
      <Headimage src="/pindie.jpg" heading="PIN AND DIE SET" />
      <TextPart>
        <Flex fontSize={20} direction="column">
          <Text fontSize={26} fontWeight={700}>
            Pin and Die Set
          </Text>{" "}
          In the world of manufacturing and metalworking, pin and die sets play
          a crucial role in shaping, forming, and finishing materials with
          precision and efficiency. These tools are essential for producing
          high-quality parts and components that meet exacting standards.
        </Flex>
        <br />
        <Flex direction="column" fontSize={18}>
          <Text fontSize={26} fontWeight={700}>
            What is Pin and Die Set?
          </Text>
          A pin and die set is a combination of tools used in various
          manufacturing proccesses, particularly stamping, punching, and forming
          operations. The set consists of Pins, a Cylindrical tools that is used
          for aligning, guiding, or creating holes in the material. And dies,
          Hardened tools that are designed to cut, shape, or form materials into
          specific shapes and sizes. Dies can be of various types, including
          cutting dies, forming dies, and bending dies.
          <br />
          <Text fontSize={28} fontWeight={700}>
            <br />
            Advantages
          </Text>
          <Text>
            <strong>1. Precision and Accuracy:</strong> Pin and die sets are
            engineered to provide high levels of precision and accuracy,
            ensuring that each part produced meets the exact specifications
            required. <br />
            <strong>2. Consistency:</strong>These tools enable consistent
            production of parts, which is essential for maintaining quality and
            uniformity in mass production.
            <br />
            <strong>3. Efficiency:</strong> Pin and die sets streamline the
            manufacturing process by allowing for quick and efficient shaping
            and forming of materials, reducing production time and costs. <br />
            <strong>4. Versatility:</strong>These sets can be used on a wide
            range of materials, including metals, plastics, and composites,
            making them versatile tools for various applications. <br />
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
