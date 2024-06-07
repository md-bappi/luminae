import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const FlashSales = () => {
  return (
    <div className="sales-container1 flex flex-col gap-2">
      <div className="sales-title w-11/12 mx-auto   flex justify-between my-5">
        <h2 className=" text-xl font-semibold p-2">Flash Sales</h2>
        <h2 className=" flex items-center gap-2">
          view all
          <span>
            <MdKeyboardArrowRight />
          </span>
        </h2>
      </div>

      <div className="sales-items w-11/12 mx-auto grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        <div className="sales-item container mx-auto   bg-white py-3 shadow-md border border-gray-50 rounded">
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
            <img
              src="https://i.imgur.com/6vNwcD7.png"
              alt="tonny black"
              className=" w-full"
            />
          </div>
          <div className="sales-item-description flex flex-col gap-1 w-4/5 mx-auto mt-2">
            <h2 className=" text-lg font-bold">Tonny Black</h2>
            <p className=" text-sm text-gray-500">Shoulder bag-white-plain</p>
            <span>
              ⭐⭐⭐⭐<span className="text-gray-500">(54)</span>
            </span>
            <div className="sales-item-price flex justify-between items-center">
              <span className=" text-red-500 font-semibold">$69.99</span>
              <span className=" text-gray-500">$129.99</span>
              <span className="bg-red-500 text-white  px-1 rounded">-40%</span>
            </div>
          </div>
        </div>

        <div className="sales-item   bg-white py-3 shadow-md border border-gray-50 rounded">
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
            <img
              src="https://i.imgur.com/pZWE09x.png"
              alt="reebok"
              className=" w-full"
            />
          </div>
          <div className="sales-item-description flex flex-col gap-1 w-4/5 mx-auto mt-2">
            <h2 className=" text-lg font-bold">Reebok</h2>
            <p className=" text-sm text-gray-500">Women's Powder sneakers</p>
            <span>
              ⭐⭐⭐⭐<span className="text-gray-500">(54)</span>
            </span>
            <div className="sales-item-price flex justify-between items-center">
              <span className=" text-red-500 font-semibold">$112.02</span>
              <span className=" text-gray-500">$129.99</span>
              <span className="bg-red-500 text-white  px-1 rounded">-40%</span>
            </div>
          </div>
        </div>

        <div className="sales-item   bg-white py-3 shadow-md border border-gray-50 rounded">
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
            <img
              src="https://i.imgur.com/kqpQU6m.png"
              alt="bag-pink-plain"
              className=" w-full"
            />
          </div>
          <div className="sales-item-description flex flex-col gap-1 w-4/5 mx-auto mt-2">
            <h2 className=" text-lg font-bold">Patso</h2>
            <p className=" text-sm text-gray-500">Shoulder bag-pink-plain</p>
            <span>
              ⭐⭐⭐⭐<span className="text-gray-500">(54)</span>
            </span>
            <div className="sales-item-price flex justify-between items-center">
              <span className=" text-red-500 font-semibold">$69.99</span>
              <span className=" text-gray-500">$129.99</span>
              <span className="bg-red-500 text-white  px-1 rounded">-40%</span>
            </div>
          </div>
        </div>

        <div className="sales-item   bg-white py-3 shadow-md border border-gray-50 rounded">
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
            <img
              src="https://i.imgur.com/QEH4MYd.png"
              alt="sport-shoe 2102"
              className=" w-full"
            />
          </div>
          <div className="sales-item-description flex flex-col gap-1 w-4/5 mx-auto mt-2">
            <h2 className=" text-lg font-bold">Sketckers</h2>
            <p className=" text-sm text-gray-500">Sport-shoe 2102</p>
            <span>
              ⭐⭐⭐⭐<span className="text-gray-500">(54)</span>
            </span>
            <div className="sales-item-price flex justify-between items-center">
              <span className=" text-red-500 font-semibold">$80.00</span>
              <span className=" text-gray-500">$129.99</span>
              <span className="bg-red-500 text-white  px-1 rounded">-40%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSales;
