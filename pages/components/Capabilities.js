import Cards from "./Card";
import { Flex, Text, Container } from "@chakra-ui/react";

export default function Capabilities() {
  const items = [
    {
      heading: "Jig and Fixtures",
      desc: "Help in increasing the rate of identical parts",
      href: "/jig",
      image: "/jig.jpg",
    },
    {
      heading: "Pin and Die set",
      desc: "Help in increasing the rate of identical parts",
      href: "/pindie",
      image: "/pindie.jpg",
    },
    {
      heading: "Precicion Machining Part",
      desc: "Help in increasing the rate of identical parts",
      href: "/pmp",
      image: "/pmp.jpg",
    },
    {
      heading: "Automation",
      desc: "Help in increasing the rate of identical parts",
      href: "/auto",
      image: "/automation.jpg",
    },
    {
      heading: "Trading and Equipment Support",
      desc: "Help in increasing the rate of identical parts",
      href: "/tradingeq",
      image: "/tradingeq.jpg",
    },
    {
      heading: "Design Engineering",
      desc: "Help in increasing the rate of identical parts",
      href: "/endesign",
      image: "/endesign.jpg",
    },
  ];
  return (
    <Flex justifyContent="center" alignItems="center" direction="column">
      <Text fontWeight={700} fontSize={48}>
        WHAT CAN WE OFFER?
      </Text>
      <Container maxW={"6xl"} mt={4}>
        <Flex flexWrap="wrap" direction="row" gridGap={5} justify="center">
          {items.map((item) => (
            <Cards
              heading={item.heading}
              desc={item.desc}
              href={item.href}
              src={item.image}
            />
          ))}
        </Flex>
      </Container>
    </Flex>
  );
}
