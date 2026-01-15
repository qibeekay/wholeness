import AboutSection from "../components/home/AboutSection";
import Activities from "../components/home/Activities";
import Blog from "../components/home/Blog";
import Career from "../components/home/Career";
import Contact from "../components/home/Contact";
import Credential from "../components/home/Credentials";
import GetInvolved from "../components/home/GetInvolved";

import Hero from "../components/home/Hero";
import MeetTheDirector from "../components/home/MeetTheDirector";
import OurServices from "../components/home/OurServices";

import Stories from "../components/home/Stories";
import OtherHero from "../components/shared/OtherHero";

export const Home = () => {
  return (
    <div className="text-lg">
      <OtherHero
        h1=" Welcome to Wholeness Haven CIC"
        p="Where Ageing Well-Being And Dementia Care Meet Compassion"
        img="hero1.jpg"
      />
      <AboutSection />
      <Stories />
      <OurServices />
      <MeetTheDirector />
      <Career />
      <Activities />
      <Blog />
      <Contact />
      <Credential />
      <GetInvolved />
    </div>
  );
};
