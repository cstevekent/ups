import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Flex, Text } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Features from "./components/features";
import Intro from "./components/Intro";
import Capabilities from "./components/Capabilities";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Flex direction="column" width="100vw" min-height="100vh">
        <Navbar />
        <Carousel />
        <Features />
        <Capabilities />
        <Footer />
      </Flex>
    </>
  );
}
