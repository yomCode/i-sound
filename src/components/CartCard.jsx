import React from "react";
import { ProductCardProps } from "./ProductCard";

const CartCard = ({ id, price, image, description }) => {
  return (
    <div className="flex items-center justify-between shadow-lg mt-4 bg-red px-2 py-2">
      <div className="">
        <img src={image} alt="" className="w-[120px]" />
      </div>
      <div className="basis-2/4">
        <p>{description}</p>
      </div>
      <div>
        <p>${price}</p>
      </div>
      <div>
        <button className="bg-[red] p-2 rounded-lg text-white font-bold">
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartCard;
