import { createContext, useContext, useReducer } from "react";
import { CartReducer } from "../reducers/CartReducer";

const initialState = {
  cartList: [],
  total: 0,
};

const CartContext = createContext(initialState);

export const CardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const value = {
    total: state.total,
    cartList: state.cartList,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  return useContext(CartContext);
};
