import React from "react";
import { removeFromCart } from "../store/CartSlice";
import { useDispatch } from "react-redux";

const CartCard = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center flex-col md:flex-row gap-2 justify-between shadow-lg mt-8 bg-red p-5">
      <div className="flex items-center gap-4 flex-col md:flex-row basis-1/2">
        <img src={product?.image} alt="" className="w-[120px]" />
        <p>{product?.description}</p>
      </div>
      <div className="flex items-center gap-4">
        <p>Qty: 1</p>
        <p>${product?.price}</p>
        <button
          onClick={() => dispatch(removeFromCart(product))}
          className="bg-[red] p-2 rounded-lg text-white font-bold"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartCard;
