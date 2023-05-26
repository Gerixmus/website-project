import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";
import "../App.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <img
        className="hero-section"
        src="/website-project/images/img-school.jpg"
        alt="hero-section"
      />
      <h1>GORGO SCHOOL</h1>
      <p>English language school</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          WRITE TO US
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
