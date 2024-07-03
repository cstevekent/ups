"use client";
import React from "react";
import Navbar from "./components/Navbar";
import { Flex, Box, Text } from "@chakra-ui/react";
import Headimage from "./components/ImageHeading";
import TextPart from "./components/TextPart";
import { Gallery, GalleryItem } from "./components/Gallery";
import Footer from "./components/footer";

export default function Auto() {
  return (
    <Flex direction="column" alignItems="center">
      <Headimage src="/tradingeq.jpg" heading="TRADING AND EQUIPMENT SUPPORT" />
      <TextPart>
        <Flex fontSize={20} direction="column">
          <Text fontSize={26} fontWeight={700}>
            Trading and Equipment Support
          </Text>{" "}
          In the fast-paced world of trading and the demanding field of
          equipment support, automation is a game-changer. It enhances
          efficiency, accuracy, and reliability, enabling businesses to stay
          competitive and responsive to market and operational demands.
        </Flex>
        <br />
        <Flex direction="column" fontSize={18}>
          <Text fontSize={26} fontWeight={700}>
            What is Trading?
          </Text>
          Trading refers to the buying and selling of goods, services, or
          financial instruments. It encompasses a wide range of activities, from
          international trade of commodities to the trading of stocks, bonds,
          and other financial assets. In the context of industrial operations,
          trading often involves procuring essential equipment, materials, and
          supplies needed for production and maintenance.
          <br />
          <Text fontSize={28} fontWeight={700}>
            <br />
            Advantages
          </Text>
          <Text>
            <strong>1. Access to Resources:</strong> Trading enables businesses
            to obtain the raw materials, components, and equipment necessary for
            production and operations. <br />
            <strong>2. Market Expansion:</strong> Through trading, companies can
            expand their market reach, entering new regions and customer
            segments.
            <br />
            <strong>3. Cost Management:</strong> Effective trading strategies
            can help businesses procure resources at competitive prices,
            managing costs and improving profitability. <br />
            <strong>4. Risk Management:</strong> Trading allows businesses to
            hedge against price fluctuations and supply chain disruptions,
            ensuring stability and continuity. <br />
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
