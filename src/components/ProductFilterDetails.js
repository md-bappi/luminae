import { CiSearch } from "react-icons/ci";
import {
  MdChevronRight,
  MdKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import ProductCard from "./ProductCard";
import { PiSquaresFourLight } from "react-icons/pi";
import { IoFunnelOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const style = [
  "casual",
  "business casual",
  "bohemian",
  "Minimalist",
  "uniqlo",
  "zara",
  "gucci",
  "mango",
  "ralph lauren",
  "calvin klein",
  "rachel pally",
];

const models = [
  {
    id: 1,
    name: "short",
    count: 60,
  },
  {
    id: 2,
    name: "mid-length",
    count: 10,
  },
  {
    id: 3,
    name: "sweather",
    count: 56,
  },
  {
    id: 4,
    name: "party dress",
    count: 80,
  },
  {
    id: 5,
    name: "regular fit",
    count: 100,
  },
];

const colorsName = [
  { colorName: "red", utility: "bg-red-500" },
  { colorName: "blue", utility: "bg-blue-500" },
  { colorName: "green", utility: "bg-green-500" },
  { colorName: "yellow", utility: "bg-yellow-500" },
  { colorName: "purple", utility: "bg-purple-500" },
  { colorName: "pink", utility: "bg-pink-500" },
  { colorName: "indigo", utility: "bg-indigo-500" },
  { colorName: "gray", utility: "bg-gray-500" },
  { colorName: "teal", utility: "bg-teal-500" },
];

const size = ["2xs", "xs", "s", "m", "l", "xl", "2xl", "3xl"];

const ProductFilterDetails = ({ data, category, items }) => {
  // const [selectedColor, setSelectedColor] = useState("");

  // const HandleClick = (color) => {
  //   setSelectedColor(color);
  // };

  return (
    <div className="product-filter-details w-11/12 mx-auto flex flex-col gap-8 ">
      <div>
        <h2 className="inner-pages hidden md:flex items-center text-lg pt-4 pb-3 ">
          Homepage
          <span>
            <MdChevronRight />
          </span>
          <span className=" capitalize">{category}</span>
        </h2>
        <div className="model-category flex justify-between items-center py-2 mb-2 md:hidden">
          <h2 className=" text-lg font-semibold">Women Regular Fit</h2>
          <span className=" flex items-center">
            view all
            <MdChevronRight />
          </span>
        </div>
        <div className=" category-count flex justify-between items-center py-2 border">
          <div className=" hidden md:flex items-center gap-5 pl-2">
            <h2 className=" capitalize">{category}</h2>
            <h2>{items} items</h2>
          </div>
          <select className=" outline-none">
            <option value="">Sort by order</option>
            <option value="price(low>high)">Price (low-high)</option>
            <option value="price(low>high)">Price (high-low)</option>
          </select>

          <h2 className="filter flex items-center gap-2 font-semibold capitalize md:hidden">
            <span className=" text-orange-500 text-xl">
              <IoFunnelOutline />
            </span>
            filter
          </h2>
        </div>
      </div>

      <div className="all-products md:grid grid-cols-3 xl:grid-cols-4">
        <div className="all-category bg-white absolute top-0 left-0 w-3/5 p-4 flex flex-col gap-3 md:relative  md:w-full md:pr-5 md:p-0 md:col-span-1 xl:col-span-1">
          <div className="flex items-center gap-3 md:gap-2">
            <button className=" md:text-xl">
              <PiSquaresFourLight />
            </button>
            <h2 className="capitalize md:text-xl">all categories</h2>
          </div>
          <div className="brand flex flex-col border-b pb-3">
            <div className="brand-title flex justify-between items-center">
              <h2 className=" capitalize md:font-semibold">brand</h2>
              <button>
                <MdOutlineKeyboardArrowDown />
              </button>
            </div>
            <form className=" bg-white">
              <div className=" brand-search flex items-center ">
                <input
                  type="search"
                  placeholder="Search"
                  className=" outline-none text-normal border-r w-4/5"
                />
                <span className=" px-3">
                  <CiSearch />
                </span>
              </div>
            </form>
          </div>

          <div className="model flex flex-col border-b pb-3">
            <div className="model-title flex justify-between items-center">
              <h2 className=" capitalize md:font-semibold">model</h2>
              <button>
                <MdOutlineKeyboardArrowDown />
              </button>
            </div>

            <div className="model-container flex flex-col gap-1 leading-5">
              {models.map((model) => (
                <div
                  key={model.id}
                  className=" flex justify-between items-center"
                >
                  <h2 className="capitalize">{model.name}</h2>
                  <span>{model.count}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="style flex flex-col border-b pb-3">
            <div className="style-title flex justify-between items-center">
              <h2 className=" capitalize md:font-semibold">style</h2>
              <button>
                <MdOutlineKeyboardArrowDown />
              </button>
            </div>

            <div className="style-container flex flex-col">
              {style.map((item, i) => (
                <div
                  key={i}
                  className=" flex justify-start items-center gap-1 capitalize"
                >
                  <input type="checkbox" />
                  <h2>{item}</h2>
                </div>
              ))}
            </div>
          </div>

          {/* <div className="color">
            <div className="color-title">
              <h2>style</h2>
              <button>
                <MdKeyboardArrowUp />
              </button>
            </div>
            <div className="color-container">
              {colorsName.map((color) => (
                <div key={color.colorName}>
                  <div
                    className={`${color.colorName}`}
                    onClick={() => HandleClick(color.colorName)}
                  >
                    {selectedColor === color.colorName && <TiTick />}
                  </div>
                </div>
              ))}
            </div>
          </div> */}

          <div className="size flex flex-col gap-2">
            <div className="size-title flex justify-between items-center">
              <h2 className=" capitalize md:font-semibold">size</h2>
              <button>
                <MdOutlineKeyboardArrowDown />
              </button>
            </div>
            <div className="size-container grid grid-cols-4">
              {size.map((item, i) => (
                <div
                  key={i}
                  className=" flex justify-center items-center border"
                >
                  <button>{item}</button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="products-container grid grid-cols-1 gap-3 md:col-span-2 lg:grid-cols-2 xl:grid-cols-3 xl:col-span-3">
          {data.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductFilterDetails;

{
  /* <div className="style-container">
  <div>
    <input type="checkbox" />
    <h2>Casual</h2>
  </div>

  <div>
    <input type="checkbox" />
    <h2>Business casual</h2>
  </div>
  <div>
    <input type="checkbox" />
    <h2>Bohemian</h2>
  </div>
  <div>
    <input type="checkbox" />
    <h2>Uniqlo</h2>
  </div>
  <div>
    <input type="checkbox" />
    <h2>Zara</h2>
  </div>
  <div>
    <input type="checkbox" />
    <h2>Gucci</h2>
  </div>
  <div>
    <input type="checkbox" />
    <h2>Mango</h2>
  </div>
  <div>
    <input type="checkbox" />
    <h2></h2>
  </div>
  <div>
    <input type="checkbox" />
    <h2></h2>
  </div>
  <div>
    <input type="checkbox" />
    <h2></h2>
  </div>
  <div>
    <input type="checkbox" />
    <h2></h2>
  </div>
</div>; */
}
