import React from "react";
import AboutSection from "../components/home/AboutSection";
import Stories from "../components/home/Stories";
import OurServices from "../components/home/OurServices";
import Blog from "../components/home/Blog";
import Contact from "../components/home/Contact";
import OtherHero from "../components/shared/OtherHero";

const About = () => {
  return (
    <div className="text-lg">
      <OtherHero
        h1="About Wholeness Haven"
        p="Learn more about our care and services"
        img="hero.jpg"
      />
      <AboutSection />
      <Stories />
      <OurServices />
      <Blog />
      <Contact />
    </div>
  );
};

export default About;
