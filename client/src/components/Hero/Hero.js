import React from "react";
import "../../assets/css/Hero.css";
const Hero = ({ title, subTitle }) => {
  return (
    <div className="hero-box">
      <div className="hero-subbox">
        <div className="hero-title">{title}</div>
        <div className="hero-subtitle">{subTitle}</div>
      </div>
    </div>
  );
};

export default Hero;
