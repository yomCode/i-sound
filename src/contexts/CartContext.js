import { createContext, useContext, useReducer } from "react";
import { CartReducer } from "../reducers/CartReducer";
import { ProductCardProps } from "../components/ProductCard";

const initialState = {
  cartList: [],
  total: 0,
  // addToCart: ({ id, price, image, description }) => {},
};

const CartContext = createContext(initialState);

export const CardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = (product) => {
    const updatedProductList = state?.cartList?.concat(product);

    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updatedProductList,
      },
    });
  };

  const removeFromCart = (product) => {
    const updatedProductList = state?.cartList?.filter(
      (item) => item?.id !== product?.id
    );
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        products: updatedProductList,
      },
    });
  };

  const cartContextValue = {
    total: state?.total,
    cartList: state?.cartList,
    addToCart,
    removeFromCart,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
