import React from "react";

const FlashSalesItem = ({ product }) => {
  return (
    <div className="sales-item container mx-auto bg-white py-3 shadow-md border border-gray-50 rounded">
      <div className="sales-item-date w-4/5 mx-auto">
        <h2 className=" font-semibold text-gray-500 text-center">
          Deal of the Day
        </h2>
        <div className=" flex flex-col">
          <div className="flex justify-around items-center">
            <div>{new Date().getHours()} </div> :
            <div>{new Date().getMinutes()}</div> :
            <div>{new Date().getSeconds()}</div>
          </div>
          <div className=" flex justify-around items-center">
            <span>hour</span> <span>min</span> <span>sec</span>
          </div>
        </div>
      </div>
      <div className="sales-item-img">
        <img src={product.image} alt="tonny black" className=" w-full" />
      </div>
      <div className="sales-item-description flex flex-col gap-1 w-4/5 mx-auto mt-2">
        <h2 className=" text-lg font-bold">{product.title}</h2>
        <p className=" text-sm text-gray-500">{product.description}</p>
        <span>
          ⭐⭐⭐⭐
          <span className="text-gray-500">({product.rating})</span>
        </span>
        <div className="sales-item-price flex justify-between items-center">
          <span className=" text-red-500 font-semibold">${product.price}</span>
          <span className=" text-gray-500">$129.99</span>
          <span className="bg-red-500 text-white  px-1 rounded">-40%</span>
        </div>
      </div>
    </div>
  );
};

export default FlashSalesItem;
