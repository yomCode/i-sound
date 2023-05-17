import React from "react";
import { ProductCardProps } from "./ProductCard";

const CartCard = ({ id, price, image, description }: ProductCardProps) => {
  return (
    <div className="flex items-center justify-between shadow-lg mt-4 bg-red px-[50px] py-4">
      <img src={image} alt="" className="w-[70px]" />
      <p>{description}</p>
      <p>${price}</p>
      <button className="bg-[red] p-2 rounded-lg text-white font-bold">
        Remove
      </button>
    </div>
  );
};

export default CartCard;
