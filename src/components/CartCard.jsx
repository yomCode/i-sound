import React from "react";
import { removeFromCart } from "../store/CartSlice";
import { useDispatch } from "react-redux";

const CartCard = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between shadow-lg mt-4 bg-red px-2 py-2">
      <div className="">
        <img src={product?.image} alt="" className="w-[120px]" />
      </div>
      <div className="basis-2/4">
        <p>{product?.description}</p>
      </div>
      <div>
        <p>Qty: 1</p>
      </div>
      <div>
        <p>${product?.price}</p>
      </div>
      <div>
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
