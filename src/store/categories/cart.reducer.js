import { CART_ACTION_TYPE } from "./cart.type";

const CART_INITIAL_STATE = {
  isOpen: false,
  cartItems: [],
};

export const CartReducer = (state = CART_INITIAL_STATE, action) => {
  const { payload, type } = action;
  switch (type) {
    case CART_ACTION_TYPE.SET_ITEM:
      return { ...state, cartItems: payload };
    case CART_ACTION_TYPE.TOGGLE_OPEN:
      return { ...state, isOpen: payload };
    default:
      return state;
  }
};
