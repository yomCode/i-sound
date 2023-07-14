const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartList: [],
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const updatedCartList = state?.cartList?.concat(action?.payload);
      const total = state?.total + action?.payload?.price;
      return { ...state, cartList: updatedCartList, total: total };
    },
    removeFromCart: (state, action) => {
      const updatedCartList = state?.cartList?.filter(
        (item) => item?.id !== action?.payload?.id
      );
      const total = state?.total - action?.payload?.price;
      return { ...state, cartList: updatedCartList, total: total };
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice?.actions;
export const cartReducer = cartSlice?.reducer;
