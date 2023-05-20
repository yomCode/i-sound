import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

// export interface ProductCardProps {
//   id: string;
//   price: number;
//   image: string;
//   description: string;
// }

const ProductCard = ({ id, price, image, description }) => {
  const { addToCart, cartList } = useCart();

  const add = () => {
    const product = { id, price, image, description };
    addToCart(product);
    console.log({ cartList });
  };
  //dark:bg-gray-800 dark:border-gray-700
  //dark:text-white
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
      <Link to="#">
        <img className="p-8 rounded-t-lg" src={image} alt="product Overview" />
      </Link>
      <div className="px-5 pb-5">
        <Link to="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">
            {description}{" "}
          </h5>
        </Link>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900">${price}</span>
          <button
            onClick={add}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
