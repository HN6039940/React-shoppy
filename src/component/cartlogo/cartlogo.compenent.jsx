import { useContext } from "react";
import { ReactComponent as Cartlogo } from "../../asset/shopping-cart-svgrepo-com.svg";
import { CartContext } from "../../context/cartContext.component";
import "./cartlogo.style.scss";

const CartLogo = () => {
  const { isOpen, setIsOpen, totalQuantity } = useContext(CartContext);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="cart-icon-container" onClick={toggle}>
      <Cartlogo className="shoping-icon" />
      <span className="item-count">{totalQuantity}</span>
    </div>
  );
};

export default CartLogo;
