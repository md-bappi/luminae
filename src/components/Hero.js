import React from "react";
import { CiShop } from "react-icons/ci";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className=" hero relative ">
      <div className="hero-contaier flex flex-col md:flex-row md:w-screen">
        <img
          src="https://i.imgur.com/vM3RdIg.png"
          alt="hero image"
          className=" md:w-1/2"
        />

        <div className="hero-details bg-blue-400 text-gray-50 py-5  flex flex-col justify-center items-center gap-5 md:w-1/2">
          <h2 className="hero-title text-2xl xl:text-4xl">
            kimonos, caftans & pareos
          </h2>
          <p
            className="hero-description text-xl xl:text-3xl
          "
          >
            Poolside glam included
          </p>
          <span className=" text-xl xl:text-3xl">From $4.99</span>

          <Link className=" flex items-center gap-1 text-xl bg-blue-600 py-3 px-8 rounded xl:text-2xl">
            <span>
              <CiShop />
            </span>
            <span className=" capitalize">shop now</span>
          </Link>
        </div>
      </div>

      <div className="hero-offer hidden  lg:flex flex-col items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44">
        <div className=" bg-gray-50 w-full text-center py-5">
          <h2 className="hero-offer-title text-lg font-semibold ">
            Summer Essentials
          </h2>
          <span className=" text-red-500 font-bold text-2xl">20% off</span>
        </div>
        <span className=" bg-gray-700 text-gray-50 w-full text-center">
          19 Jul-30 Jul
        </span>
      </div>
    </div>
  );
};

export default Hero;
