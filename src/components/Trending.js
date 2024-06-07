import React from "react";
import { LiaLuggageCartSolid } from "react-icons/lia";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Trending = () => {
  return (
    <div className="trending-container py-5">
      <div className="trending-title w-11/12 mx-auto flex justify-between my-5">
        <h2 className="text-xl font-semibold p-2">Trending must-haves</h2>
        <div className=" flex items-center gap-2">
          <p className=" flex items-center gap-2">view all</p>
          <span>
            <MdKeyboardArrowRight />
          </span>
        </div>
      </div>

      <div className="trending-items w-11/12 mx-auto grid grid-cols-1 justify-center gap-5 md:grid-cols-2 lg:grid-cols-4">
        <div className="trending-item shadow-md">
          <div className="trending-image relative">
            <img
              src="https://i.imgur.com/EfswbRG.png"
              alt="trending image 1"
              className="w-full"
            />
            <div className=" bg-green-600 text-gray-50 py-2 px-4 flex items-center gap-2 w-42 absolute top-3 left-3">
              <span>
                <LiaLuggageCartSolid />
              </span>
              <p>new arivals</p>
            </div>
          </div>
          <div className="trending-description bg-gray-800 text-gray-50 flex justify-around items-center  py-5">
            <div>
              <h2 className="text-xl mb-2">beige coat Zara</h2>
              <p className=" text-gray-300">Cream-Brown-Formal</p>
            </div>
            <Link className=" border p-2 ">
              <span>$102</span> Shop Now
            </Link>
          </div>
        </div>

        <div className="trending-item shadow-md">
          <div className="trending-image relative">
            <img
              src="https://i.imgur.com/Z28Fcbg.png"
              alt="trending image 2"
              className="w-full"
            />
            <div className=" bg-green-600 text-gray-50 py-2 px-4 flex items-center gap-2 w-42 absolute top-3 left-3">
              <span>
                <LiaLuggageCartSolid />
              </span>
              <p>new arivals</p>
            </div>
          </div>
          <div className="trending-description bg-gray-800 text-gray-50 flex justify-around items-center  py-5">
            <div>
              <h2 className="text-xl mb-2">beige coat Zara</h2>
              <p className=" text-gray-300">Cream-Brown-Formal</p>
            </div>
            <Link className=" border p-2 ">
              <span>$102</span> Shop Now
            </Link>
          </div>
        </div>

        <div className="trending-item shadow-md">
          <div className="trending-image relative">
            <img
              src="https://i.imgur.com/Z28Fcbg.png"
              alt="trending image 2"
              className="w-full"
            />
            <div className=" bg-green-600 text-gray-50 py-2 px-4 flex items-center gap-2 w-42 absolute top-3 left-3">
              <span>
                <LiaLuggageCartSolid />
              </span>
              <p>new arivals</p>
            </div>
          </div>
          <div className="trending-description bg-gray-800 text-gray-50 flex justify-around items-center  py-5">
            <div>
              <h2 className="text-xl mb-2">beige coat Zara</h2>
              <p className=" text-gray-300">Cream-Brown-Formal</p>
            </div>
            <Link className=" border p-2 ">
              <span>$102</span> Shop Now
            </Link>
          </div>
        </div>

        <div className="trending-item shadow-md">
          <div className="trending-image relative">
            <img
              src="https://i.imgur.com/U8sY6WS.png"
              alt="trending image 3"
              className="w-full"
            />
            <div className=" bg-green-600 text-gray-50 py-2 px-4 flex items-center gap-2 w-42 absolute top-3 left-3">
              <span>
                <LiaLuggageCartSolid />
              </span>
              <p>new arivals</p>
            </div>
          </div>
          <div className="trending-description bg-gray-800 text-gray-50 flex justify-around items-center  py-5">
            <div>
              <h2 className="text-xl mb-2">beige coat Zara</h2>
              <p className=" text-gray-300">Cream-Brown-Formal</p>
            </div>
            <Link className=" border p-2">
              <span>$102</span> Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
