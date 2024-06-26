import React from "react";
import Hero from "../components/Hero";
import FlashSales from "../components/FlashSales";
import Trending from "../components/Trending";
import TopProducts from "../components/TopProducts";

const Home = () => {
  return (
    <div>
      <Hero />
      <FlashSales />
      <Trending />
      <TopProducts />
    </div>
  );
};

export default Home;
