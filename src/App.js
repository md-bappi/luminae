import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./components/PageNotFound";
import Footer from "./pages/Footer";
import Women from "./components/Women";
import Male from "./components/Male";
import ProductDetails from "./components/ProductDetails";
import Reviews from "./components/Reviews";
import ShippingPayment from "./components/ShippingPayment";
import SingleProductDetails from "./components/SingleProductDetails";
import Blog from "./pages/Blog";
import MotherChild from "./components/MotherChild";
import Furniture from "./components/Furniture";
import SuperMarket from "./components/SuperMarket";
import Cosmetics from "./components/Cosmetics";
import ShoeBag from "./components/ShoeBag";
import Electronic from "./components/Electronic";
import SportOutdoor from "./components/SportOutdoor";
import BestSeller from "./components/BestSeller";
import Card from "./pages/Card";

const App = () => {
  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/women" element={<Women />} />
          <Route path="/male" element={<Male />} />
          <Route path="/mother-child" element={<MotherChild />} />
          <Route path="/furniture" element={<Furniture />} />
          <Route path="/super-market" element={<SuperMarket />} />
          <Route path="/cosmetics" element={<Cosmetics />} />
          <Route path="/shoe-bag" element={<ShoeBag />} />
          <Route path="/electronic" element={<Electronic />} />
          <Route path="/sport-outdoor" element={<SportOutdoor />} />
          <Route path="/best-seller" element={<BestSeller />} />
          <Route
            path="/single-product-details"
            element={<SingleProductDetails />}
          />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/product-details/reviews" element={<Reviews />} />
          <Route path="/single-product-details/card" element={<Card />} />
          <Route
            path="/product-details/shipping-payment"
            element={<ShippingPayment />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
