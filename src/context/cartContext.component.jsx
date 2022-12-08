import { createContext, useEffect, useReducer } from "react";

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

const sumQuantity = (cartItems) => {
  const sum = cartItems.reduce((quantity, curitem) => {
    return (quantity = quantity + curitem.quantity);
  }, 0);
  return sum;
};

const totalItemPrice = (cartItems) => {
  const total = cartItems.reduce((totalPrice, curitem) => {
    return (totalPrice = totalPrice + curitem.price * curitem.quantity);
  }, 0);
  return total;
};

export const CartContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  setCartItems: () => {},
  addItemToCart: () => {},
  totalQuantity: 0,
  totalPrice: 0,
  removeItemToCart: () => {},
  deleteItemToCart: () => {},
});

const CART_ACTION_TYPE = {
  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
  DELITE_ITEM: "DELITE_ITEM",
  SUM_QUANTITY: "SUM_QUANTITY",
  TOTAL_PRICE: "TOTAL_PRICE",
  TOGGLE_OPEN: "TOGGLE_OPEN",
};

const CartReducer = (state, action) => {
  const { cartItems, isOpen } = state;
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPE.ADD_ITEM:
      return { ...state, cartItems: addCartItem(cartItems, payload) };
    case CART_ACTION_TYPE.REMOVE_ITEM:
      return { ...state, cartItems: removeCartItem(cartItems, payload) };
    case CART_ACTION_TYPE.DELITE_ITEM:
      return { ...state, cartItems: deleteItemFromCart(cartItems, payload) };
    case CART_ACTION_TYPE.SUM_QUANTITY:
      return { ...state, totalQuantity: sumQuantity(cartItems) };
    case CART_ACTION_TYPE.TOTAL_PRICE:
      return { ...state, totalPrice: totalItemPrice(cartItems) };
    case CART_ACTION_TYPE.TOGGLE_OPEN:
      return { ...state, isOpen: !isOpen };
    default:
      throw new Error("error");
  }
};

const CardProvider = ({ children }) => {
  const INITIAL_STATE = {
    isOpen: false,
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0,
  };

  const [state, dispatch] = useReducer(CartReducer, INITIAL_STATE);
  const { isOpen, cartItems, totalQuantity, totalPrice } = state;

  const addItemToCart = (product) => {
    dispatch({ type: CART_ACTION_TYPE.ADD_ITEM, payload: product });
  };

  const removeItemToCart = (product) => {
    dispatch({ type: CART_ACTION_TYPE.REMOVE_ITEM, payload: product });
  };

  const deleteItemToCart = (product) => {
    dispatch({ type: CART_ACTION_TYPE.DELITE_ITEM, payload: product });
  };

  const setIsOpen = () => {
    dispatch({ type: CART_ACTION_TYPE.TOGGLE_OPEN });
  };

  useEffect(() => {
    dispatch({ type: CART_ACTION_TYPE.SUM_QUANTITY, payload: cartItems });
    dispatch({ type: CART_ACTION_TYPE.TOTAL_PRICE, payload: cartItems });
  }, [cartItems]);

  const value = {
    isOpen,
    setIsOpen,
    addItemToCart,
    removeItemToCart,
    deleteItemToCart,
    cartItems,
    totalQuantity,
    totalPrice,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CardProvider;
