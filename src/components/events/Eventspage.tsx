import React from "react";
import AllEvents from "./AllEvents";
import OtherHero from "../shared/OtherHero";

const Eventspage = () => {
  return (
    <div>
      <OtherHero
        h1="Our Events and Retreat"
        p="Join our engaging events designed to foster connection, learning, and well-being."
        img="heero.jpg"
      />
      <AllEvents />
    </div>
  );
};

export default Eventspage;
