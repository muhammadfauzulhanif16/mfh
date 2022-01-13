import type { NextPage } from "next";
import { NavBar } from "../components/NavBar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Portfolio } from "../components/Portfolio";
import { Footer } from "../components/Footer";
// import { Certificate } from "../components/Certificate";
import { Box } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <Box bgColor="gray.50">
      <head>
        <title>Muhammad Fauzul Hanif's Website</title>
      </head>

      <NavBar />
      <Hero />
      <About />
      <Portfolio />
      {/*<Certificate />*/}
      <Footer />
    </Box>
  );
};

export default Home;
