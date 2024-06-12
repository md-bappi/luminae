const data = {
  name: "Iphone 14 Pro",
  price: 960.99,
  ddr5_ram: [6, 128, 256, 512, 1024],
  color: [
    "bg-gray-500",
    "bg-blue-500",
    "bg-purple-500",
    "bg-sky-500",
    "bg-orange-500",
  ],
  description:
    "The iphone 14 Pro and Pro Max feature a Super Retina XDR OLED display with a typical maximum brightness of 1000 nits. However, it can go all the way up to 1600 nits while watching HDR videos, and 2000 nits outdoors. The display has a refresh rate of 120Hz and utilizes LTPO technology.",
  instructions: [
    "Cushion cover",
    "Do not wash",
    "Do not bleach",
    "Do not tumble dry",
  ],
  display: {
    size: "6.7' ou 6.1' ",
    title: "Super Retina XDR 7 display",
    screen: "Screen alwarys on ",
    technology: "ProMothon Technology",
  },
  network: [
    "Satellite Emergency SOS 5",
    "Emergency call",
    "Accident detection 6",
  ],
  camera: {
    title: "professional camera system",
    regulation: "48MPUltra Wide Angle Main lens",
    feature: "Telephoto",
    des: "Photonic Engine for impressive color and detail Autofocuson TrueDepth front camera",
  },
};

const ProductDetails = () => {
  return (
    <div className="product-details">
      <div className="product-details-image">
        <div className="big-imae">
          <img src="https://i.imgur.com/nxt3efK.png" alt="big image" />
        </div>
        <div className="small-imag">
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
      <div className="product-details-description"></div>
    </div>
  );
};

export default ProductDetails;
