import type { NextPage } from "next";
import { NavBar } from "../components/NavBar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Box } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <Box bgColor="gray.50">
      <head>
        <title>Muhammad Fauzul Hanif</title>
      </head>

      <NavBar />
      <Hero />
      <About />
    </Box>
  );
};

export default Home;
