import { MdKeyboardArrowRight } from "react-icons/md";
import TopProductsItem from "./TopProductsItem";

const data = [
  {
    id: 1,
    image: "https://i.imgur.com/KACQtJQ.png",
    title: "Mango",
    descirption: "Kimono & Caftan - Black - Regular fit",
    rating: 289,
    price: 290,
  },
  {
    id: 2,
    image: "https://i.imgur.com/U357pR8.png",
    title: "Zara",
    descirption: "Midi top - Daily fit",
    rating: 523,
    price: 145,
  },
  {
    id: 3,
    image: "https://i.imgur.com/dIj48E8.png",
    title: "Uniqlo",
    descirption: "Midi atlas Slim fit - bohemian",
    rating: 86,
    price: 156,
  },
  {
    id: 4,
    image: "https://i.imgur.com/QJ9S2dN.png",
    title: "Mango dress",
    descirption: "Kimono & Cafan - Colorful - Night club fit",
    rating: 121,
    price: 487,
  },
];

const TopProducts = () => {
  return (
    <div className="top flex flex-col py-5 relative">
      <div className="trending-title w-11/12 mx-auto flex justify-between my-5">
        <h2 className="text-xl font-semibold p-2 md:text-2xl lg:text-3xl">
          Top 100
        </h2>
        <div className=" flex items-center gap-2 cursor-pointer">
          <p className=" flex items-center gap-2">view all</p>
          <span>
            <MdKeyboardArrowRight />
          </span>
        </div>
      </div>

      <div className="top-container grid grid-cols-1 gap-5 w-11/12 mx-auto md:grid-cols-2 lg:grid-cols-4">
        {data.map((product) => (
          <TopProductsItem key={product.id} product={product} />
        ))}
      </div>

      <div className="register hidden  lg:block bg-cyan-700  w-[45vw] mx-auto text-center py-5 xl:py-6 absolute -bottom-40 left-1/2 -translate-x-1/2">
        <h2 className="footer-register-title text-2xl font-semibold capitalize text-gray-50 xl:text-3xl">
          luminae <span className=" text-gray-300">store</span>
        </h2>
        <p className="pt-2 pb-5 text-gray-50 xl:text-lg">
          Register your email not to miss the last minutes off+ Free delivery
        </p>
        <form>
          <input
            type="email"
            placeholder="Enter your email"
            className="py-1 px-3 outline-none w-1/2"
          />
        </form>
      </div>
    </div>
  );
};

export default TopProducts;
