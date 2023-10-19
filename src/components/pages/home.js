import React from "react";
import "../../App.css";
import Cards from "../Cards";
import Teachers from "../Teachers";
import HeroSection from "../HeroSection";
import { motion } from "framer-motion";
import { animationSwitch, transition } from "../../animations";

function Home() {
  return (
    <div style={{ flex: 1 }}>
      <motion.div
        style={{ flex: 1, height: "100%" }}
        initial="out"
        animate="in"
        exit="out"
        variants={animationSwitch}
        transition={transition}
      >
        <HeroSection />
        <Teachers />
        <Cards />
      </motion.div>
    </div>
  );
}

export default Home;
