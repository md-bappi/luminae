import { CiCamera } from "react-icons/ci";
import { MdOutlineNetworkLocked } from "react-icons/md";
import { TbSquarePlus2 } from "react-icons/tb";

const ProductDetails = ({ data }) => {
  return (
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
  );
};

export default ProductDetails;
