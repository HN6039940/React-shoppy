import { useContext } from "react";
import { ReactComponent as Cartlogo } from "../../asset/shopping-cart-svgrepo-com.svg";
import { CardContext } from "../../context/cardContext.component";
import "./cartlogo.style.scss";

const CartLogo = () => {
  const { isOpen, setIsOpen } = useContext(CardContext);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="cart-icon-container" onClick={toggle}>
      <Cartlogo className="shoping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartLogo;
