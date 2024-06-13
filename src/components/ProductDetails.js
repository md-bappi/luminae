import { AiOutlineFilePdf } from "react-icons/ai";
import { CiCamera } from "react-icons/ci";
import { FaHeart, FaPlusCircle } from "react-icons/fa";
import {
  MdArrowLeft,
  MdArrowRight,
  MdOutlineNetworkLocked,
} from "react-icons/md";
import { PiShoppingBag } from "react-icons/pi";
import { TbSquarePlus2 } from "react-icons/tb";
import { Link } from "react-router-dom";

const data = {
  name: "Iphone 14 Pro",
  price: 960.99,
  ddr5_ram: [
    {
      id: 1,
      size: 6,
    },
    {
      id: 2,
      size: 128,
    },
    {
      id: 3,
      size: 256,
    },
    {
      id: 4,
      size: 512,
    },
    {
      id: 5,
      size: 1024,
    },
  ],
  color: [
    {
      id: 1,
      color: "bg-rose-500",
    },
    {
      id: 2,
      color: "bg-purple-500",
    },
    {
      id: 3,
      color: "bg-blue-500",
    },
    {
      id: 4,
      color: "bg-green-500",
    },
  ],
  description:
    "The iphone 14 Pro and Pro Max feature a Super Retina XDR OLED display with a typical maximum brightness of 1000 nits. However, it can go all the way up to 1600 nits while watching HDR videos, and 2000 nits outdoors. The display has a refresh rate of 120Hz and utilizes LTPO technology.",
  instructions: [
    {
      id: 1,
      step: "Cushion cover",
    },
    {
      id: 2,
      step: "Do not wash",
    },
    {
      id: 3,
      step: "Do not tumble dry",
    },
    {
      id: 4,
      step: "Do not tumble dry",
    },
  ],
  display: {
    size: "6.7' ou 6.1' ",
    title: "Super Retina XDR 7 display",
    screen: "Screen alwarys on ",
    technology: "ProMothon Technology",
  },
  network: [
    {
      id: 1,
      step: "Satellite Emergency SOS 5",
    },
    {
      id: 2,
      step: "Emergency call",
    },
    {
      id: 3,
      step: "Accident detection 6",
    },
  ],
  camera: {
    title: "professional camera system",
    regulation: "48MPUltra Wide Angle Main lens",
    feature: "Telephoto",
    des: "Photonic Engine for impressive color and detail Autofocuson TrueDepth front camera",
    position: "front camera",
  },
  products: [
    {
      id: 1,
      image: "https://i.imgur.com/niBJOt2.png",
      title: "iPhone 14 Plus 128Go",
      price: 495,
    },
    {
      id: 2,
      image: "https://i.imgur.com/TrHvuEe.png",
      title: "Apple iPhone 12 64GB - Zeleny",
      price: 730,
    },
    {
      id: 3,
      image: "https://i.imgur.com/f5vw7Nx.png",
      title: "Apple iPhone 12 Price in Kenya",
      price: 365,
    },
    {
      id: 4,
      image: "https://i.imgur.com/6WykQXG.png",
      title: "Apple iPhone 12 64GB | DTPobchod",
      price: 512,
    },
  ],
};

const ProductDetails = () => {
  return (
    <div className="single-product-details flex flex-col gap-3 mb-5 md:gap-y-6">
      <div className=" product-details grid grid-cols-1 gap-2 md:grid-cols-2 content-center relative lg:grid-cols-3">
        <div className="product-details-image flex flex-col col-span-1">
          <div className="big-image w-full ">
            <img
              src="https://i.imgur.com/nxt3efK.png"
              alt="big image"
              className=" w-full"
            />
            <span className=" text-white w-8 h-8 rounded-full bg-rose-500 flex justify-center items-center absolute top-4 right-4 md:hidden">
              <FaHeart />
            </span>
          </div>
          <div className="small-image flex justify-between items-center lg:justify-center">
            <span>
              <img src="https://i.imgur.com/0BBizNo.png" alt="small image 1" />
            </span>
            <span>
              <img src="https://i.imgur.com/8pgRJvy.png" alt="small image 2" />
            </span>
            <span>
              <img src="https://i.imgur.com/cCk04oR.png" alt="small image 3" />
            </span>
          </div>
        </div>
        <div className="product-details-description w-11/12 mx-auto flex flex-col gap-y-4 md:justify-around lg:col-span-2 xl:justify-center xl:gap-y-12">
          <div className="product-title py-2">
            <div className="title flex flex-col gap-y-3 xl:gap-y-10">
              <h2 className=" text-2xl font-bold text-gray-600 xl:text-3xl">
                {data.name}
              </h2>
              <span className=" text-xl font-bold text-gray-600">
                ${data.price}
              </span>
            </div>
          </div>

          <div className="ram flex items-start gap-2">
            <h2 className="ram-title font-bold text-gray-600">LPDDR5 RAM</h2>
            <div className="ram-size flex flex-col ">
              <div className="ram-container flex flex-wrap gap-2  ">
                {data.ddr5_ram.map((ramSize) => (
                  <div
                    key={ramSize.id}
                    className=" border flex justify-center items-center font-semibold text-gray-600 px-2 py-1 rounded "
                  >
                    <button className="w-12">{ramSize.size}Gb</button>
                  </div>
                ))}
              </div>
              <h2 className="guidline mt-2 flex items-center gap-1 capitalize text-orange-600">
                <span>
                  <AiOutlineFilePdf />
                </span>
                guideline
              </h2>
            </div>
          </div>

          <div className="product-color flex items-center gap-2 md:py-2">
            <h2 className="capitalize font-bold text-gray-600 ">Color</h2>
            <div className="prduct-color-container flex items-center gap-1">
              {data.color.map((color) => (
                <div
                  key={color.id}
                  className={` ${color.color} w-4 h-4 rounded-full`}
                ></div>
              ))}
            </div>
          </div>

          <div className="shipping flex items-center md:py-2 lg:gap-x-3">
            <h2 className=" shipping-tilte capitalize font-bold text-gray-600">
              shipping
            </h2>
            <select className=" outline-none text-sm capitalize">
              <option value="free-shipping" className=" bg-white text-gray-600">
                free shipping to victoria teritory
              </option>
            </select>
          </div>

          <div className="quantity flex items-center gap-2 md:py-2">
            <h2 className=" capitalize font-bold text-gray-600">quantity</h2>
            <div className=" flex items-center gap-1 border">
              <span className=" pl-1 lg:px-2">-</span>
              <span className=" px-1">1</span>
              <span className=" pr-1 lg:px-2">+</span>
            </div>
            <p className=" capitalize">10 available / 50 sold</p>
          </div>

          <div className="price bg-gray-200 px-4 xl:w-4/5">
            <span className=" text-xl font-bold text-gray-600 inline-block py-2">
              ${data.price}
            </span>
            <p className="price-des flex items-start gap-2 border-t border-gray-400 py-2">
              <span className=" mt-1">
                <FaPlusCircle />
              </span>
              Add shipping insurance for $9 (declared value only if the package
              gets lost, stolen or damaged)
            </p>
          </div>

          <div className="button flex justify-center items-center md:gap-x-8">
            <Link className=" uppercase text-gray-50 bg-blue-600 py-2 px-8 rounded">
              shop now
            </Link>
            <Link className=" flex items-center gap-1 py-2 px-1 border uppercase rounded">
              <span>
                <PiShoppingBag />
              </span>
              add to basket
            </Link>
          </div>
        </div>
        <span className="product-details-heart hidden  text-white w-8 h-8 rounded-full bg-rose-500 md:text-gray-400 md:bg-white md:border-2  md:flex justify-center items-center absolute top-4 right-8 lg:right-12 xl:top-10 xl:right-14 2xl:right-20">
          <FaHeart />
        </span>
      </div>
      <div className="product-description w-11/12 mx-auto flex flex-col gap-2 md:flex-col-reverse">
        <div className="product-description-details grid grid-cols-1 gap-5 md:grid-cols-3 items-start">
          <div className="title">
            <h2 className=" text-xl capitalize font-semibold md:text-2xl">
              product description
            </h2>
            <p className=" text-gray-900 text-justify">{data.description}</p>
          </div>

          <div className="instructions ">
            <h2 className=" text-xl capitalize font-semibold md:text-2xl">
              care & instructions
            </h2>
            <div className=" instraction-container ">
              {data.instructions.map((insts) => (
                <h2 className=" text-gray-900 text-justify" key={insts.id}>
                  {insts.step}
                </h2>
              ))}
            </div>
          </div>

          <div className="display text-gray-900 ">
            <h2 className=" mb-1">{data.display.size}</h2>
            <h2>{data.display.title}</h2>
            <h2>{data.display.technology}</h2>
            <h2>{data.display.screen}</h2>
          </div>

          <div className="feature">
            <span className=" inline-block text-2xl">
              <TbSquarePlus2 />
            </span>
            <h2 className=" capitalize">dynamic island</h2>
            <p>A new wayto interact with the iPhone</p>
          </div>

          <div className="network">
            <span className=" inline-block text-2xl">
              <MdOutlineNetworkLocked />
            </span>
            <div className="network-container">
              {data.network.map((networkFeature) => (
                <div key={networkFeature.id}>
                  <h2>{networkFeature.step}</h2>
                </div>
              ))}
            </div>
          </div>

          <div className="camera">
            <span className=" text-2xl inline-block ">
              <CiCamera />
            </span>
            <div className="camera-feature capitalize text-gray-900  text-base">
              <h2>{data.camera.title}</h2>
              <h2>{data.camera.regulation}</h2>
              <h2>{data.camera.feature}</h2>
              <h2>{data.camera.des}</h2>
              <h2>{data.camera.position}</h2>
            </div>
          </div>
        </div>
        <div className="product-description-navlink flex justify-between items-center text-sm font-bold capitalize py-2 md:text-xl md:font-semibold lg: w-4/5 mx-auto xl:w-2/5 xl:mx-auto">
          <Link className="uppercase">product deatails</Link>
          <Link to="/product-details/reviews" className="uppercase">
            reviews(5)
          </Link>
          <Link to="/product-details/shipping-payment" className="uppercase">
            shipping & payment
          </Link>
        </div>
      </div>
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
    </div>
  );
};

export default ProductDetails;
