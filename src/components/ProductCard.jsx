import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../store/CartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const productsInCart = useSelector((state) => state?.cartState?.cartList);
  const { id, description, price, image } = product;
  const [productInCart, setProductInCart] = useState(false);

  useEffect(() => {
    const productAlreadyInCart = productsInCart?.find(
      (item) => item?.id === id
    );
    productAlreadyInCart ? setProductInCart(true) : setProductInCart(false);
  }, [productsInCart, id]);
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
      <Link to="#">
        <img className="p-8 rounded-t-lg" src={image} alt="product Overview" />
      </Link>
      <div className="px-5 pb-5 mt-4">
        <Link to="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">
            {description}{" "}
          </h5>
        </Link>
        <div className="flex items-center justify-between mt-6">
          <span className="text-3xl font-bold text-gray-900">${price}</span>
          <button
            onClick={
              !productInCart
                ? () => dispatch(addToCart(product))
                : () => dispatch(removeFromCart(product))
            }
            className={`${
              productInCart
                ? "bg-[red] dark:bg-[red]"
                : "bg-blue-700 dark:bg-blue-600"
            } text-white focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
          >
            {productInCart ? "Remove" : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
