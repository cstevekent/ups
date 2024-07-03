"use client";
import React from "react";
import Navbar from "./components/Navbar";
import { Flex, Container, Text, Image, Spacer } from "@chakra-ui/react";
import Headimage from "./components/ImageHeading";
import TextPart from "./components/TextPart";
import Footer from "./components/footer";
import { Gallery, GalleryItem } from "./components/Gallery";

// 333x178

export default function Jig() {
  return (
    <Flex direction="column" justifyContent="center" alignItems="center">
      <Headimage src="/jig.jpg" heading="JIG AND FIXTURES" />
      <TextPart>
        <Flex direction="column" fontSize={20}>
          <Text fontSize={26} fontWeight={700}>
            Jig and Fixtures
          </Text>{" "}
          In the world of manufacturing and assembly, precision and efficiency
          are key. This is where jigs and fixtures come into play. They are
          essential tools designed to enhance the production process, ensuring
          that each part is made accurately and consistently.
        </Flex>
        <br />
        <Flex direction="column" fontSize={18}>
          <Text fontSize={26} fontWeight={700}>
            Advantages
          </Text>{" "}
          <strong>1. Accuracy and Consistency:</strong> Jigs and fixtures are
          designed to maintain high levels of accuracy and consistency in
          manufacturing processes, ensuring that every part produced is
          identical to the first.
          <br />
          <strong>2. Efficiency:</strong> These tools streamline the production
          process, allowing for faster and more efficient manufacturing. This
          reduces the time required for each operation and increases overall
          productivity. <br />
          <strong>3. Cost Effectiveness:</strong> By reducing errors and
          minimizing the need for rework, jigs and fixtures help in saving costs
          associated with waste and production delays. <br />
          <strong>4. Improved Safety:</strong> Fixtures, in particular, enhance
          safety by securely holding workpieces in place, reducing the risk of
          accidents and injuries during machining. <br />
        </Flex>
        <Gallery>
          <GalleryItem props="/asset/jig1.png" />
          <GalleryItem props="/asset/jig2.png" />
          <GalleryItem props="/asset/jig3.png" />
          <GalleryItem props="/asset/jig4.png" />
          <GalleryItem props="/asset/jig5.png" />
        </Gallery>
      </TextPart>
      <Footer />
    </Flex>
  );
}
