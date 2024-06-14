import { LiaLuggageCartSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const TrendingItem = ({ product }) => {
  return (
    <div className="trending-item shadow-md">
      <div className="trending-image relative">
        <img src={product.image} alt="trending image 1" className="w-full" />
        <div className=" bg-green-600 text-gray-50 py-2 px-4 flex items-center gap-2 w-42 absolute top-3 left-3">
          <span>
            <LiaLuggageCartSolid />
          </span>
          <p>{product.offer}</p>
        </div>
      </div>
      <div className="trending-description bg-gray-800 text-gray-50 flex justify-around items-center  py-5">
        <div>
          <h2 className="trending-title text-xl mb-2">{product.title}</h2>
          <p className="trending-description text-gray-300">
            {product.description}
          </p>
        </div>
        <Link to="/single-product-details/card" className=" border p-2 ">
          <span>${product.price}</span> Shop Now
        </Link>
      </div>
    </div>
  );
};

export default TrendingItem;
