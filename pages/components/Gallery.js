import { Container, Flex, Image } from "@chakra-ui/react";

export function Gallery({ children }) {
  return (
    <Container maxW={"6xl"} mt={4}>
      <Flex flexWrap="wrap" direction="row" gridGap={5} justify="center">
        {children}
      </Flex>
    </Container>
  );
}

export function GalleryItem({ props }) {
  return <Image src={props} width={333} height={178} />;
}

export default function Gal() {
  return;
}
