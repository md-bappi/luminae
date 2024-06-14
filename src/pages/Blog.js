import React from "react";
import { CiClock1 } from "react-icons/ci";
import {
  FaClock,
  FaCommentAlt,
  FaFacebookF,
  FaHeart,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoReorderThreeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="blog">
      {/* <nav className="blog-nav flex justify-between items-center ">
        <span>
          <IoReorderThreeOutline />
        </span>
        <div className=" flex justify-center items-center">
          <img src="https://i.imgur.com/z6c6nuG.png" alt="logo" />
          <h2>Blog</h2>
        </div>
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
      </nav> */}
      <section className="blog-hero relative">
        <div className=" ">
          <img
            src="https://i.imgur.com/8TCxgKd.png"
            alt="blog hero image"
            className=" w-full"
          />
        </div>
        <div className="blog-hero-details absolute top-1/2 left-2 -translate-y-1/2 text-white w-2/3 flex flex-col gap-y-4">
          <h2 className="title text-lg uppercase font-semibold mb-2">
            stunning barerooted woman of {new Date().getFullYear()}
          </h2>
          <p className=" leading-4">
            In the heart of a chicurban studio, the almosphere buzzed wth
            excutement as a trendy fur coat took center stage during a vibrant
            photoshoot
          </p>
          <div className=" flex justify-between items-center py-2 ">
            <div className=" blog-date flex items-center gap-1">
              <span className=" text-gray-300">
                <FaClock />
              </span>
              <div>
                {new Date().getDate()} {new Date().getMonth()}{" "}
                {new Date().getFullYear()}
              </div>
            </div>
            <div className=" blog-like flex items-center gap-1">
              <span className=" text-gray-300">
                <FaHeart />
              </span>
              <h2>830</h2>
            </div>
            <div className="blog-comment flex items-center gap-1">
              <span className=" text-gray-300">
                <FaCommentAlt />
              </span>
              <h2>19</h2>
            </div>
          </div>
          <Link className=" border flex justify-start items-center gap-1">
            read more
            <span>
              <FaArrowRightLong />
            </span>
          </Link>
        </div>
      </section>
      <section className="blog-cards">
        <div className="blog-card">
          <div className="blog-card-datails">
            <h2 className="blog-card-title">
              Stylish women in summer outfit isolated posing in fashion trend
              isolated
            </h2>
            <p>
              In this captivating scene, a stylish woman stands confidently
              against a pristine backdrop, capturing the essence of summer's
              allure. Bathed in the gentle...
            </p>
            <Link className=" border flex justify-start items-center gap-1">
              read more
              <span>
                <FaArrowRightLong />
              </span>
            </Link>
          </div>
          <img src="https://i.imgur.com/15Rnd3s.png" alt="blog card image" />
        </div>
        <img src="https://i.imgur.com/z3NSkPL.png" alt="blog card image" />
        <div className="blog-card">
          <img src="" alt="" />
          <div className="blog-card-details">
            <span>fashion</span>
            <h2 className="title">Stylish young man out in town </h2>
            <p>
              In the heart of the bustling city, a stylish young man navigates
              the urban landscape...
            </p>
            <div className=" blog-card-comments">
              <span>3 hours age</span>
              <h2 className=" flex items-center gap-1">
                <span className=" text-gray-300">
                  <FaCommentAlt />
                </span>
                56
              </h2>
            </div>
          </div>
        </div>
        <div className="blog-card">
          <img src="" alt="" />
          <div className="blog-card-details">
            <span>tech</span>
            <h2 className="title">aptkdoe smartwatch women men </h2>
            <p>
              It seems like you've mentioned "Aptkdoe Smartwatch" in combination
              ...
            </p>
            <div className=" blog-card-comments">
              <span>4 hours age</span>
              <h2 className=" flex items-center gap-1">
                <span className=" text-gray-300">
                  <FaCommentAlt />
                </span>
                56
              </h2>
            </div>
          </div>
        </div>
      </section>
      <div className="blog-description">
        <h2 className="blog-description-title">
          "univeiling timeless elegance: exploring the allure of vintage
          fashion"
        </h2>
        <p>
          The Essence of Time Travel Vintage fashion allows us to transcend
          eras, stepping into the shopes of those who came before us. Each piece
          tells a story, offering a glimpse into the cultural and societal norms
          of its time. From the flapper dresses of the 1920s that embodied the
          spirit of rebellion to the tailored suits of the 1960s that epitomized
          sophisticaion, every has its signature style waiting to be revived.
          Quality Beyond Compare One of the hallmarks of vintage fashion if the
          unparalleled craftsmanship that went into creating garments that stood
          the test of time. In a world where fast fashion often prioritizes
          quantity over Quality, vintage pieces remind us of an qhen attentiion
          to detail and durability were paramount The feel of a vintage silk
          dress or the weight of a hand-sewn coat is a testament to the
          dedication of artisns of yesteryears. Eclectic Personal Style
          Embracing vintage fashion allows us to curate a wardrobe that's
          uniquely ours. Mixing and matching vintage pieces with contemporary
          items creates a personal style that defies categorization. From
          pairing a 1970s ohemian blouse with modern jeans to accessorizing a
          little black dress with vintage broockes, the possibilites are endless
          and the results are often strikingly original. Sustainable Chic As the
          world embraces sustainablility, vintage fashion tages center stage as
          a prime example of eco-conscious style. Choosing pre-loved clothing
          not only reduces the demand for new production but also breathes new
          life into garments that might otherwise be forgotten. It's a node to
          show fashion, a movement that encourages thoughtful consumption and
          reduces the impact on the environment
        </p>
      </div>
      <div className="blog-images">
        <img src="" alt="" />
        <div>
          <img src="" alt="" />
        </div>
      </div>
      <div className="blog-store">
        <div className="blog-email">
          <h2>
            luminae <span>store</span>
          </h2>
          <p>
            Register your email not to miss the last minutes off+ Free delivery
          </p>
          <form>
            <input type="email" placeholder="Enter your email" />
            <span></span>
          </form>
        </div>
        <nav className="blog-store-nav">
          <Link>contact us</Link>
          <Link>advertise</Link>
          <Link>work with us</Link>
          <Link>partners</Link>
          <Link>terms of service</Link>
          <Link>subcriptions</Link>
        </nav>
      </div>
      <footer className="blog-footer">
        <div className="blog-footer-navs">
          <nav className="blog-footer-nav">
            <Link>contact us</Link>
            <Link>advertise</Link>
            <Link>work with us</Link>
            <Link>career</Link>
            <Link>partners</Link>
            <Link>subscriptions</Link>
          </nav>
          <nav className="blog-footer-nav">
            <Link>site map</Link>
            <Link>home delivery</Link>
            <Link>customer service</Link>
            <Link>terms of service</Link>
          </nav>
        </div>
        <div className="blog-footer-social">
          <h2>follow us on social networks</h2>
          <div className="blog-footer-social-icons">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
