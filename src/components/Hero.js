import React from "react";
import { LuShoppingBag } from "react-icons/lu";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-container relative">
      <div className="hero-item flex flex-col items-center gap-5 mt-5 md:hidden">
        <div className="hero-item container mx-auto flex justify-center">
          <div className="hero-item-left bg-rose-700 text-gray-100 px-1 flex flex-col justify-evenly items-start">
            <h2 className="hero-title text-3xl font-semibold">
              Never-Ending Summer
            </h2>
            <p className=" text-gray-300 text-lg leading-5">
              Throback Shirts & all-day dressed
            </p>
            <Link className=" truncate border-b">Explore all category</Link>
          </div>
          <div className="hero-item-right">
            <img src="https://i.imgur.com/eXSZMfj.png" alt="hero photo 1" />
          </div>
        </div>

        <div className="hero-item container mx-auto grid grid-cols-2 ">
          <div className="hero-item-left bg-sky-700 text-gray-100 px-1 flex flex-col justify-evenly items-start">
            <h2 className="hero-title text-3xl font-semibold">
              Best Lovin Sellers
            </h2>
            <p className=" text-gray-300 text-lg">
              Bikini & Poolside glam include
            </p>
            <Link className=" truncate border-b">Explore all category</Link>
          </div>
          <div className="hero-item-right">
            <img src="https://i.imgur.com/gJUBkVG.png" alt="hero photo 2" />
          </div>
        </div>
      </div>

      <div className=" hero-item hidden md:grid grid-cols-1 md:grid-cols-2">
        <div className="hero-left">
          <img
            src="https://i.imgur.com/vM3RdIg.png"
            alt="tablet hero image"
            className=" w-full"
          />
        </div>
        <div className="hero-right flex flex-col justify-center items-center gap-8 bg-blue-400 text-gray-50 h-[40vh] md:h-full">
          <h2 className="text-3xl text-center uppercase font-semibold">
            kimonos, caftans & pareos
          </h2>
          <p className=" text-2xl ">Poolside glam included </p>
          <h2 className=" text-2xl font-semibold">From $4.99</h2>
          <Link className=" flex items-center gap-1 bg-blue-600 py-3 px-8 rounded">
            <span className="text-xl">
              <LuShoppingBag />
            </span>
            <span className=" text-xl uppercase font-semibold ">shop now</span>
          </Link>
        </div>
      </div>

      <div className="hero-offer hidden lg:block w-[10vw] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className=" bg-gray-50 text-center py-4 px-2">
          <h2 className=" text-xl">Summer Essentials</h2>
          <p className=" text-lg mt-2">20% off</p>
        </div>
        <span className=" bg-gray-700 block w-full text-gray-50 text-center py-2">
          19 jul-30 jul
        </span>
      </div>
    </div>
  );
};

export default Hero;
