import ProductFilterDetails from "./ProductFilterDetails";

const data = [
  {
    id: 1,
    image: "https://i.imgur.com/EfswbRG.png",
    title: "beige coat Zara",
    description: "Cream-Brown-Formal",
    offer: "new arivals",
    rating: 120,
    price: 102,
  },
  {
    id: 2,
    image: "https://i.imgur.com/Z28Fcbg.png",
    title: "beige coat Zara",
    description: "Cream-Brown-Formal",
    offer: "new arivals",
    rating: 200,
    price: 120,
  },
  {
    id: 3,
    image: "https://i.imgur.com/Z28Fcbg.png",
    title: "beige coat Zara",
    description: "Cream-Brown-Formal",
    offer: "new arivals",
    rating: 109,
    price: 100,
  },
  {
    id: 4,
    image: "https://i.imgur.com/IftSLSn.png",
    title: "Zara",
    description: "Sweather - Black & White - Minimalist",
    offer: "new arivals",
    rating: 301,
    price: 110,
  },
  {
    id: 5,
    image: "https://i.imgur.com/U8sY6WS.png",
    title: "beige coat Zara",
    description: "Cream-Brown-Formal",
    offer: "new arivals",
    rating: 120,
    price: 110,
  },
  {
    id: 6,
    image: "https://i.imgur.com/Y5e6FIU.png",
    title: "Uniqlo",
    description: "Sweather - Casual",
    offer: "new arivals",
    rating: 120,
    price: 110,
  },
];

const Furniture = () => {
  return (
    <div className="furniture">
      <ProductFilterDetails
        data={data}
        category="Furniture"
        items={data.length}
      />
    </div>
  );
};

export default Furniture;
