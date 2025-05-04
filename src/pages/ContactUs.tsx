import React from "react";
import OtherHero from "../components/shared/OtherHero";
import Contact from "../components/home/Contact";
import Blog from "../components/home/Blog";
import Career from "../components/home/Career";
import GetInvolved from "../components/home/GetInvolved";

const ContactUs = () => {
  return (
    <div>
      <OtherHero
        h1="Contact Us"
        p="Get In Touch With Us By Simply Dropping A Message"
        img="act5.jpg"
      />
      <Contact />
      <Blog />
      <Career />
      <GetInvolved />
    </div>
  );
};

export default ContactUs;
