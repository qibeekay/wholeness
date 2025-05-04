import React from "react";
import OtherHero from "../components/shared/OtherHero";
import OurServices from "../components/home/OurServices";
import Stories from "../components/home/Stories";
import Career from "../components/home/Career";
import Activities from "../components/home/Activities";
import Blog from "../components/home/Blog";
import Contact from "../components/home/Contact";

const Services = () => {
  return (
    <div>
      <OtherHero
        h1="Our Services"
        p="Learn more about our services"
        img="hero1.jpg"
      />
      <OurServices />
      <Stories />
      <Career />
      <Activities />
      <Blog />
      <Contact />
    </div>
  );
};

export default Services;
