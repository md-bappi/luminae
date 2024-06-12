import React from "react";
import { CiCircleAlert } from "react-icons/ci";

const PageNotFound = () => {
  return (
    <div className="page-not-found flex flex-col md:flex-row justify-center items-center ">
      <img
        src="https://i.imgur.com/IuKfpud.png"
        alt="page not found image"
        className=" md:w-full"
      />
      <div className=" details w-11/12 mx-auto border py-5 px-1 rounded">
        <h2 className=" font-semibold mb-3">
          No results were found for searching "Blue Sony Camera".
        </h2>
        <div className=" flex items-center gap-2">
          <span className=" text-red-500 text-xl">
            <CiCircleAlert />
          </span>
          <p>
            We recommend you to search different clear key words to get the best
            result.
          </p>
        </div>

        <div className=" flex items-center gap-2">
          <span className=" text-red-500 text-xl">
            <CiCircleAlert />
          </span>
          <p>
            We recommend you to search different clear key words to get the best
            result.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
