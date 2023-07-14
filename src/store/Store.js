import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./CartSlice";

const store = configureStore({
  reducer: {
    cartState: cartReducer,
  },
});

export default store;
