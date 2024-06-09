import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer flex flex-col py-2 relative">
      <div className="footer-categorys w-11/12 mx-auto bg-blue-100 grid grid-cols-2 gap-x-2 gap-y-4 p-5  lg:grid-cols-4 lg:gap-x-4 lg:py-10 lg:mt-16 lg:pt-28 xl:gap-x-8">
        <div className="footer-category flex flex-col gap-3">
          <h2 className=" font-semibold">Company</h2>
          <div className=" text-sm flex flex-col gap-1">
            <Link>About Us</Link>
            <Link>Our Store</Link>
            <Link>Contact Us</Link>
          </div>
        </div>

        <div className="footer-category flex flex-col gap-3">
          <h2 className=" font-semibold">Career Opportunities</h2>
          <div className=" text-sm flex flex-col gap-1">
            <Link>Selling Programs</Link>
            <Link>Advertise</Link>
            <Link>Cooperation</Link>
          </div>
        </div>

        <div className="footer-category flex flex-col gap-3">
          <h2 className=" font-semibold">How to Buy</h2>
          <div className=" text-sm flex flex-col gap-1">
            <Link>Making payments</Link>
            <Link>Delivery Options</Link>
            <Link>buyer Protection</Link>
            <Link>New User Guide</Link>
          </div>
        </div>

        <div className="footer-category flex flex-col gap-3">
          <h2 className=" font-semibold">Help</h2>
          <div className=" text-sm flex flex-col gap-1">
            <Link>Contacts</Link>
            <Link>FAQ </Link>
            <Link>Privacy Policy</Link>
          </div>
        </div>
      </div>
      <div className="footer-cards w-11/12 mx-auto pt-3">
        <div className=" footercards-top md:flex justify-between items-center md:border-b">
          <div className=" footer-cards-logo  flex justify-center items-center gap-4 py-2">
            <img
              src="https://i.imgur.com/OXw2CeP.png"
              alt="visa"
              className=" w-10"
            />
            <img
              src="https://i.imgur.com/NeZpc9i.png"
              alt="master card"
              className=" w-10"
            />
            <img
              src="https://i.imgur.com/hLG9WDL.png"
              alt="paypal"
              className=" w-12"
            />
          </div>
          <div className=" language hidden md:flex items-center gap-1">
            <select>
              <option value="english">English</option>
            </select>
          </div>
        </div>

        <div className="footer-cards-bottom hidden md:flex justify-between items-center py-8 ">
          <h2 className="location">
            Foster City of Monash, Melbourne, Australia
          </h2>
          <span className=" text-gray-500">
            {new Date().getFullYear()} Copyright in reserved for luminae shop
          </span>
          <div className="social-media-logo flex items-center gap-1 lg:gap-2 xl:gap-3">
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

      <div className="footer-register hidden  lg:block bg-cyan-700  w-[45vw] mx-auto text-center py-5 xl:py-6 absolute top-0 left-1/2 -translate-x-1/2">
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

export default Footer;
