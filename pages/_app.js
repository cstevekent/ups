import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import Navbar from "./components/Navbar";
import { Head } from "next/document";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
};

export default App;
