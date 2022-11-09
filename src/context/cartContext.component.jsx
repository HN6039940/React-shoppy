import { useState, createContext, useEffect } from "react";

const addCartItem = (cartItems, product) => {
  const exitstingCartItem = cartItems.find((cartItem) => {
    return cartItem.id === product.id;
  });
  if (exitstingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === product.id
        ? { ...cartItem, quantity: ++cartItem.quantity }
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
      ? { ...cartItem, quantity: --cartItem.quantity }
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

const CardProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addItemToCart = (product) => {
    setCartItems(addCartItem(cartItems, product));
  };

  const removeItemToCart = (product) => {
    setCartItems(removeCartItem(cartItems, product));
  };

  const deleteItemToCart = (product) => {
    setCartItems(deleteItemFromCart(cartItems, product));
  };

  useEffect(() => {
    setTotalQuantity(sumQuantity(cartItems));
  }, [cartItems]);

  useEffect(() => {
    setTotalPrice(totalItemPrice(cartItems));
  }, [cartItems]);

  const value = {
    isOpen,
    setIsOpen,
    cartItems,
    addItemToCart,
    totalQuantity,
    totalPrice,
    removeItemToCart,
    deleteItemToCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CardProvider;
