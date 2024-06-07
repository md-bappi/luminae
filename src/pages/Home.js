import React from "react";
import Hero from "../components/Hero";
import FlashSales from "../components/FlashSales";
import Trending from "../components/Trending";

const Home = () => {
  return (
    <div>
      <Hero />
      <FlashSales />
      <Trending />
    </div>
  );
};

export default Home;
