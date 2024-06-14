import { MdArrowLeft, MdArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const AlsoProducts = ({ data }) => {
  return (
    <div className="also-products w-11/12 mx-auto flex flex-col gap-2 mt-3 ">
      <div className="title flex justify-between items-center">
        <h2 className="uppercase font-semibold md:text-xl">
          you might also like
        </h2>
        <div className=" flex items-center border">
          <span className=" border-r p-2">
            <MdArrowLeft />
          </span>
          <span className=" p-2">
            <MdArrowRight />
          </span>
        </div>
      </div>
      <div className="also-products-container grid grid-cols-1 gap-3 md:grid-cols-2 lg:gap-x-16 lg:gap-y-2 xl:grid-cols-4">
        {data.products.map((item) => (
          <div
            key={item.id}
            className="also-product-item grid grid-cols-3 gap-x-3"
          >
            <img
              src={item.image}
              alt={item.image}
              className=" w-full col-span-1"
            />
            <div className="also-product-des flex flex-col justify-evenly gap-2 col-span-2">
              <h2 className=" text-gray-600 font-semibold md:text-lg">
                {item.title}
              </h2>
              <div className=" flex justify-between items-center text-md">
                <span className=" text-rose-600">$69.99</span>
                <span className=" text-gray-500">$129.99</span>
                <span className=" text-gray-50 bg-red-500 px-1">-40%</span>
              </div>
              <Link className=" border p-2 flex justify-around items-center font-semibold">
                <span>${item.price}</span>
                Add to cart
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlsoProducts;
