import type { NextPage } from "next";
import { NavBar } from "../components/NavBar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Portfolio } from "../components/Portfolio";
import { Footer } from "../components/Footer";
// import { Certificate } from "../components/Certificate";

const Home: NextPage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Portfolio />
      {/*<Certificate />*/}
      <Footer />
    </>
  );
};

export default Home;
