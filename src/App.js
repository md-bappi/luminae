import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./components/PageNotFound";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <>
      <div className="app min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
