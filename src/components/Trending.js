import { MdKeyboardArrowRight } from "react-icons/md";
import TrendingItem from "./TrendingItem";

const data = [
  {
    id: 1,
    image: "https://i.imgur.com/EfswbRG.png",
    title: "beige coat Zara",
    description: "Cream-Brown-Formal",
    offer: "new arivals",
    price: 102,
  },
  {
    id: 2,
    image: "https://i.imgur.com/Z28Fcbg.png",
    title: "beige coat Zara",
    description: "Cream-Brown-Formal",
    offer: "new arivals",
    price: 120,
  },
  {
    id: 3,
    image: "https://i.imgur.com/Z28Fcbg.png",
    title: "beige coat Zara",
    description: "Cream-Brown-Formal",
    offer: "new arivals",
    price: 100,
  },
  {
    id: 4,
    image: "https://i.imgur.com/U8sY6WS.png",
    title: "beige coat Zara",
    description: "Cream-Brown-Formal",
    offer: "new arivals",
    price: 110,
  },
];

const Trending = () => {
  return (
    <div className="trending-container flex flex-col gap-5 lg:pt-10">
      <div className="trending-title w-11/12 mx-auto flex justify-between my-5">
        <h2 className="text-xl font-semibold p-2 md:text-2xl lg:text-3xl">
          Trending must-haves
        </h2>
        <div className=" flex items-center gap-2 cursor-pointer">
          <p className=" flex items-center gap-2">view all</p>
          <span>
            <MdKeyboardArrowRight />
          </span>
        </div>
      </div>

      <div className="trending-items grid grid-cols-1 gap-5 w-11/12 mx-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {data.map((product) => (
          <TrendingItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Trending;

//  w-11/12 mx-auto grid grid-cols-1 justify-center gap-5 md:grid-cols-2 lg:grid-cols-4
