import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import FlashSalesItem from "./FlashSalesItem";

const data = [
  {
    id: 1,
    image: "https://i.imgur.com/6vNwcD7.png",
    title: "Tonny Black",
    description: "Shoulder bag-white-plain",
    rating: 54,
    price: 69.99,
  },
  {
    id: 2,
    image: "https://i.imgur.com/pZWE09x.png",
    title: "Reebok",
    description: "Women's Powder sneakers",
    rating: 54,
    price: 112.02,
  },
  {
    id: 3,
    image: "https://i.imgur.com/kqpQU6m.png",
    title: "Patso",
    description: "Shoulder bag-pink-plain",
    rating: 54,
    price: 69.99,
  },
  {
    id: 4,
    image: "https://i.imgur.com/QEH4MYd.png",
    title: "Sketckers",
    description: "Sport-shoe 2102",
    rating: 54,
    price: 80.0,
  },
];

const FlashSales = () => {
  return (
    <div className="sales flex flex-col gap-2">
      <div className="sales-title w-11/12 mx-auto flex justify-between my-5">
        <h2 className=" text-xl font-semibold p-2 md:text-2xl lg:text-3xl">
          Flash Sales
        </h2>
        <h2 className=" flex items-center gap-2 cursor-pointer">
          view all
          <span>
            <MdKeyboardArrowRight />
          </span>
        </h2>
      </div>

      <div className="sales-container grid grid-cols-1 gap-5 w-11/12 mx-auto md:grid-cols-2 lg:grid-cols-4">
        {data.map((product) => (
          <FlashSalesItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default FlashSales;

// className =
//   "sales-items w-11/12 mx-auto grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4";

//  <div className="sales-item container mx-auto   bg-white py-3 shadow-md border border-gray-50 rounded">
//   <div className="sales-item-date w-4/5 mx-auto">
//     <h2 className=" font-semibold text-gray-500 text-center">
//       Deal of the Day
//     </h2>
//     <div className=" flex flex-col">
//       <div className="flex justify-around items-center">
//         <div>{new Date().getHours()} </div> :
//         <div>{new Date().getMinutes()}</div> :
//         <div>{new Date().getSeconds()}</div>
//       </div>
//       <div className=" flex justify-around items-center">
//         <span>hour</span> <span>min</span> <span>sec</span>
//       </div>
//     </div>
//   </div>
//   <div className="sales-item-img">
//     <img src={product.image} alt="tonny black" className=" w-full" />
//   </div>
//   <div className="sales-item-description flex flex-col gap-1 w-4/5 mx-auto mt-2">
//     <h2 className=" text-lg font-bold">{product.title}</h2>
//     <p className=" text-sm text-gray-500">{product.description}</p>
//     <span>
//       ⭐⭐⭐⭐
//       <span className="text-gray-500">({product.rating})</span>
//     </span>
//     <div className="sales-item-price flex justify-between items-center">
//       <span className=" text-red-500 font-semibold">${product.price}</span>
//       <span className=" text-gray-500">$129.99</span>
//       <span className="bg-red-500 text-white  px-1 rounded">-40%</span>
//     </div>
//   </div>
// </div>;
