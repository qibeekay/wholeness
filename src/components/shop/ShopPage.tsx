import React from "react";
import OtherHero from "../shared/OtherHero";
import Allshops from "./Allshops";

const ShopPage = () => {
  return (
    <div>
      <OtherHero
        h1="Marketplace"
        p="Browse our carefully curated collection of books, resources, and merchandise to support your dementia care journey."
        img="heero.jpg"
      />
      <Allshops />
    </div>
  );
};

export default ShopPage;
