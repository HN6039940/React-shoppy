import { CART_ACTION_TYPE } from "./cart.type";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setIsOpen = (boolean) => {
  return createAction(CART_ACTION_TYPE.TOGGLE_OPEN, boolean);
};

const addCartItem = (cartItems, product) => {
  const exitstingCartItem = cartItems.find((cartItem) => {
    return cartItem.id === product.id;
  });
  if (exitstingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === product.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  } else {
    return [...cartItems, { ...product, quantity: 1 }];
  }
};

const removeCartItem = (cartItems, product) => {
  const exitstingCartItem = cartItems.find((cartItem) => {
    return cartItem.id === product.id;
  });

  if (!exitstingCartItem) return;

  if (product.quantity === 1) {
    return cartItems.filter((cartitem) => cartitem.id !== product.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === product.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const deleteItemFromCart = (cartItems, product) => {
  const targetIndex = cartItems.findIndex((cartitem) => {
    return cartitem.id === product.id;
  });
  return cartItems.filter((_, index) => index !== targetIndex);
};

export const addItemToCart = (cartItems, product) => {
  const newCartItems = addCartItem(cartItems, product);
  return createAction(CART_ACTION_TYPE.SET_ITEM, newCartItems);
};

export const removeItemToCart = (cartItems, product) => {
  const newCartItems = removeCartItem(cartItems, product);
  return createAction(CART_ACTION_TYPE.SET_ITEM, newCartItems);
};

export const deleteItemToCart = (cartItems, product) => {
  const newCartItems = deleteItemFromCart(cartItems, product);
  return createAction(CART_ACTION_TYPE.SET_ITEM, newCartItems);
};
