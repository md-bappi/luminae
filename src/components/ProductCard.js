import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card flex flex-col border-2 shadow-sm rounded-mdj cursor-pointer duration-300">
      <img
        src={product.image}
        alt={product.title}
        className=" w-full h-72 xl:h-80"
      />

      <div className="top-details flex flex-col gap-1 px-3 py-2">
        <div className="top-heading flex flex-row justify-between items-center">
          <div>
            <div className="top-title text-lg font-semibold md:text-xl lg:text-xl">
              {product.title}
            </div>
            <div className="top-description text-gray-500 font-medium">
              {product.descirption}
            </div>
          </div>
          <span className=" text-xl md:text-2xl lg:text-4xl">
            <CiHeart />
          </span>
        </div>
        <div className="rating flex items-center gap-1">
          <span className=" text-yellow-400 flex">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </span>
          ({product.rating})
        </div>
        <div className="price flex items-center gap-5">
          <span className=" text-rose-500 font-bold">${product.price}</span>
          <span className=" text-gray-500 ">{product.price}</span>
          <span className=" text-rose-400">10%</span>
        </div>
        <Link
          to="/single-product-details"
          className=" capitalize bg-sky-500 w-32 mt-2  py-2 px-5 rounded text-white text-lg font-semibold "
        >
          shop now
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
