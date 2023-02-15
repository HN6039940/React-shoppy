import { useSelector, useDispatch } from "react-redux";
import { setIsOpen } from "../../store/categories/cart.action";
import {
  selectorIsOpen,
  sumQuantity,
} from "../../store/categories/cart.selector";
import {
  ShoppingIcon,
  ItemCount,
  CartIconContainer,
} from "./cartlogo.style.jsx";

const CartLogo = () => {
  const isOpen = useSelector(selectorIsOpen);
  const totalQuantity = useSelector(sumQuantity);
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(setIsOpen(!isOpen));
  };
  return (
    <CartIconContainer onClick={toggle}>
      <ShoppingIcon />
      <ItemCount>{totalQuantity}</ItemCount>
    </CartIconContainer>
  );
};

export default CartLogo;
