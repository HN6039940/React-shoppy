import { createSelector } from "reselect";

const CartReducer = (state) => state.cart;

export const selectorCart = createSelector(
  [CartReducer],
  (cart) => cart.cartItems
);

export const selectorIsOpen = createSelector(
  [CartReducer],
  (cart) => cart.isOpen
);

export const sumQuantity = createSelector([selectorCart], (cartItems) => {
  const sum = cartItems.reduce((quantity, curitem) => {
    return (quantity = quantity + curitem.quantity);
  }, 0);
  return sum;
});

export const totalItemPrice = createSelector([selectorCart], (cartItems) => {
  const total = cartItems.reduce((totalPrice, curitem) => {
    return (totalPrice = totalPrice + curitem.price * curitem.quantity);
  }, 0);
  return total;
});
