import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Areas from "../components/Areas";
import Properties from "../components/Properties";
import Services from "../components/Services";

const HomePage = ({ theme }) => {
  return (
    <>
      <Navbar theme={theme} />
      <HeroSection/>
      <About/>
      <Areas/>
      <Properties/>
      <Services/>
      <Footer />
    </>
  );
};

export default HomePage;
