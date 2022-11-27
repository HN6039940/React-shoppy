import { useContext } from "react";
import { CartContext } from "../../context/cartContext.component";
import {
  ShoppingIcon,
  ItemCount,
  CartIconContainer,
} from "./cartlogo.style.jsx";

const CartLogo = () => {
  const { isOpen, setIsOpen, totalQuantity } = useContext(CartContext);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <CartIconContainer onClick={toggle}>
      <ShoppingIcon />
      <ItemCount>{totalQuantity}</ItemCount>
    </CartIconContainer>
  );
};

export default CartLogo;
