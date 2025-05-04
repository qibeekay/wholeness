import AboutSection from "../components/home/AboutSection";
import Activities from "../components/home/Activities";
import Blog from "../components/home/Blog";
import Career from "../components/home/Career";
import Contact from "../components/home/Contact";
import GetInvolved from "../components/home/GetInvolved";

import Hero from "../components/home/Hero";
import MeetTheDirector from "../components/home/MeetTheDirector";
import OurServices from "../components/home/OurServices";

import Stories from "../components/home/Stories";

export const Home = () => {
  return (
    <div className="text-lg">
      <Hero />
      <AboutSection />
      <Stories />
      <OurServices />
      <MeetTheDirector />
      <Career />
      <Activities />
      <Blog />
      <Contact />
      <GetInvolved />
    </div>
  );
};
