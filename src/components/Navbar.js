import { AiOutlineAlignRight } from "react-icons/ai";
import { CgShoppingBag } from "react-icons/cg";
import { CiHeart, CiSearch, CiUser } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";
import {
  FaChevronDown,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { IoReorderThreeOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="navbar-container flex flex-col">
      {/* navbar top setion start */}
      <div className="navbar-top w-11/12 mx-auto md:flex flex-col lg:flex lg:flex-row lg:items-center lg:gap-28 lg:py-2 ">
        <div className="navbar-top-nav flex flex-col gap-2 mb-3 md:flex md:flex-row md:items-center container mx-auto md:pt-2 lg:flex lg:justify-start items-center">
          <div className=" flex justify-between items-center container mx-auto p-2">
            <span className="text-xl md:hidden">
              <IoReorderThreeOutline />
            </span>

            <div className="nav-logo flex items-center gap-1 cursor-pointer duration-300">
              <img
                src="https://i.imgur.com/z6c6nuG.png"
                alt="logo"
                className=" w-6 md:w-10"
              />
              <Link to="/" className="md:text-3xl font-medium">
                Luminae
              </Link>
            </div>

            <span className="md:hidden">
              <CgShoppingBag />
            </span>
          </div>

          <form className="nav-search  flex justify-between items-center gap-1  py-1 border rounded pl-2  md:w-10/12 md:mx-2">
            <input
              type="text"
              placeholder="Search Products"
              className="  outline-none w-28 md:w-36"
            />

            <div className="flex items-center">
              <select className="navbar-top-category w-28 outline-none md:w-32">
                <option value="">All categories</option>
                <option value="women">Women</option>
                <option value="man">Man</option>
                <option value="mother-child">Mother Child</option>
                <option value="furniture">Furniture</option>
                <option value="super-market">Super Market</option>
                <option value="cosmetics">Cosmetics</option>
                <option value="shoe-&-bag">Shoe & Bag</option>
                <option value="electronic">Electronic</option>
                <option value="sport-&-outdoor">Sport & Outdoor</option>
                <option value="best-seller">Best Seller</option>
              </select>

              <span className=" w-10 flex justify-center items-center text-xl">
                <CiSearch />
              </span>
            </div>
          </form>
        </div>

        <div className="navbar-top-navlink md:flex justify-around items-center gap-2 container mx-auto">
          <nav className="navbar-top-nav-link hidden md:flex list-none items-center gap-5 py-2 text-sm xl:text-md">
            <li className="capitalize ">
              <Link>About us</Link>
            </li>
            <li className="capitalize">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="capitalize">
              <Link>Contact us</Link>
            </li>
            <li className="capitalize">
              <Link>Help & support </Link>
            </li>
          </nav>

          <div className="nav-icons hidden md:flex items-center gap-4 p-2">
            <span className="text-xl cursor-pointer duration-300">
              <FaInstagram />
            </span>
            <span className="text-xl cursor-pointer duration-300">
              <FaFacebookF />
            </span>
            <span className="text-xl cursor-pointer duration-300">
              <FaTwitter />
            </span>
          </div>
        </div>
      </div>
      {/* navbar middle section start */}
      <div className="navbar-mid hidden lg:block  lg:bg-gray-800 lg:text-gray-50">
        <div className=" w-11/12 mx-auto flex justify-between items-center py-3">
          <div className="navbar-mid-left flex items-center gap-12">
            <div className="catagories flex items-center gap-2 text-xl capitalize ">
              <AiOutlineAlignRight />
              <h2 className="cursor-pointer duration-300">categories</h2>
            </div>

            <div className="country-type flex items-center gap-1 text-md  uppercase cursor-pointer duration-300">
              <h2>usd</h2>
              <FaChevronDown />
            </div>

            <div className="language-type flex items-center gap-1 capitalize cursor-pointer duration-300">
              <h2>english</h2>
              <FaChevronDown />
            </div>
          </div>

          <div className="discounts flex items-center gap-3 w-[25vw] cursor-pointer duration-300">
            <img
              src="https://i.imgur.com/9zta6d1.png"
              alt="men cosmetic"
              className=" w-16"
            />
            <div className="discount-description leading-6">
              <h2>Weekly Men's Toiletries Coupons</h2>
              <p className=" text-sm text-gray-300 leading-4 lg:hidden">
                We extend exlusive discounts to our male clientele
              </p>
            </div>
          </div>

          <nav className="mid-nav list-none flex gap-5">
            <li className="flex items-center gap-1 text-lg cursor-pointer duration-300">
              <span className=" text-xl text-white ">
                <CiUser />
              </span>
              <h2>Sign in</h2>
            </li>
            <li className="flex items-center gap-1  text-lg cursor-pointer duration-300">
              <span className=" text-xl text-white ">
                <CiHeart />
              </span>
              <h2>favourites</h2>
            </li>
            <li className="flex items-center gap-1  text-lg cursor-pointer duration-300">
              <span>
                <CgShoppingBag />
              </span>
              <h2>Card</h2>
            </li>
          </nav>
        </div>
      </div>
      {/* navbar  */}
      <div className="navbar-bottom hidden lg:block">
        <nav className="nav-link w-11/12 mx-auto list-none flex justify-between items-center py-4">
          <li className=" capitalize text-gray-600 cursor-pointer duration-300">
            <NavLink end to="/women">
              women
            </NavLink>
          </li>
          <li className=" capitalize text-gray-600 cursor-pointer duration-300">
            <NavLink to="/male">male</NavLink>
          </li>
          <li className=" capitalize text-gray-600 cursor-pointer duration-300">
            <NavLink to="/mother-child">mother-child</NavLink>
          </li>
          <li className=" capitalize text-gray-600 cursor-pointer duration-300">
            <NavLink to="/furniture">furniture</NavLink>
          </li>
          <li className=" capitalize text-gray-600 cursor-pointer duration-300">
            <NavLink to="/super-market">super market</NavLink>
          </li>
          <li className=" capitalize text-gray-600 cursor-pointer duration-300">
            <NavLink to="/cosmetics">cosmetics</NavLink>
          </li>
          <li className=" capitalize text-gray-600 cursor-pointer duration-300">
            <NavLink to="/shoe-bag">shoe & bag</NavLink>
          </li>
          <li className=" capitalize text-gray-600 cursor-pointer duration-300">
            <NavLink to="electronic">electronic</NavLink>
          </li>
          <li className=" capitalize text-gray-600 cursor-pointer duration-300">
            <NavLink to="/sport-outdoor">sport & outdoor</NavLink>
          </li>
          <li className=" capitalize text-gray-600 cursor-pointer duration-300">
            <NavLink to="/best-seller">best seller</NavLink>
          </li>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
