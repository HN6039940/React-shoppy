import { useContext } from "react";
import { CartContext } from "../../context/cartContext.component";
import {
  ShoppingIcon,
  ItemCount,
  CartIconContainer,
} from "./cartlogo.style.jsx";

const CartLogo = () => {
  const { setIsOpen, totalQuantity } = useContext(CartContext);
  const toggle = () => {
    setIsOpen();
  };
  return (
    <CartIconContainer onClick={toggle}>
      <ShoppingIcon />
      <ItemCount>{totalQuantity}</ItemCount>
    </CartIconContainer>
  );
};

export default CartLogo;
