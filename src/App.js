import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./components/PageNotFound";
import Footer from "./pages/Footer";
import Women from "./components/Women";
import Male from "./components/Male";
import ProductDetails from "./components/ProductDetails";

const App = () => {
  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/women" element={<Women />} />
          <Route path="/male" element={<Male />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
