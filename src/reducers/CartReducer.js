export const CartReducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case "ADD_TO_CART":
      return { ...state, cartList: payload?.products };

    case "REMOVE_FROM_CART":
      return { ...state, cartList: payload?.products };

    // case "CLEAR_CART":
    //   return;

    // case "UPDATE_TOTAL":
    //   return;

    default:
      return state;
  }
};
