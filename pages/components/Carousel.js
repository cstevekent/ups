"use client";

import React from "react";
import { useRouter } from "next/router";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Flex,
  Button,
} from "@chakra-ui/react";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CaptionCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  const router = useRouter();

  const handleClick = (a) => {
    router.push(a);
  };

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: "JIG AND FIXTURES",
      text: "Drilling, reaming, counterboring, tapping and other one-dimensional machining operations or applied as guides for tools or templates.",
      image: "/jig.jpg",
      button: { text: "Learn more", href: "/jig" },
    },
    {
      title: "PIN AND DIE SET",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image: "/pindie.jpg",
      button: { text: "Learn more", href: "/pin" },
    },
    {
      title: "PRECISION MACHINING PART",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image: "/pmp.jpg",
      button: { text: "Learn more", href: "/pmp" },
    },
    {
      title: "SPRINGS",
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image: "/spring.jpg",
      button: { text: "Learn more", href: "/springs" },
    },
    {
      title: "AUTOMATION",
      text: "Automation for machinery using PLC, ETC",
      image: "/automation.jpg",
      button: { text: "Learn more", href: "/auto" },
    },
  ];

  return (
    <Box zIndex={5} height={"92%"} width={"full"} overflow={"hidden"} mt="auto">
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={"6xl"}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
          >
            <Box
              position="absolute"
              top={0}
              left={0}
              w="full"
              h="full"
              bg="black"
              opacity={0.5}
              bgBlendMode="multiply"
            />
            {/* This is the block you need to change, to customize the caption */}
            <Container
              size="container.lg"
              height="600px"
              mt={32}
              position="relative"
            >
              <Stack
                spacing={6}
                w={"full"}
                maxW={"lg"}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)"
              >
                <Heading
                  textAlign="center"
                  textColor="white"
                  fontWeight={700}
                  fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                >
                  {card.title}
                </Heading>
                <Text
                  textAlign="center"
                  fontSize={{ base: "md", lg: "lg" }}
                  color="white"
                >
                  {card.text}
                </Text>
                <Button
                  onClick={() => {
                    handleClick(`${card.button.href}`);
                  }}
                >
                  {card.button.text}
                </Button>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
