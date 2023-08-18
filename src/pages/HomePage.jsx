import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ForWho from "../components/ForWho";
import How from "../components/How";
import Info from "../components/Info";
import Form from "../components/Form";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ForWho />
      <How />
      <Info />
      <Form />
      <Footer />
    </div>
  );
};

export default HomePage;
