import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cartContext.component";
import Button from "../button/button.component";
import CartItem from "../cartitem/cartitem.component";
import "./cartDropDown.style.scss";
const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  const navigation = useNavigate();

  const gotoCheckOutHandler = () => {
    navigation("checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartItem) => {
          return <CartItem cartItem={cartItem} key={cartItem.id} />;
        })}
      </div>
      <Button children={`to checkout`} onClick={gotoCheckOutHandler} />
    </div>
  );
};

export default CartDropDown;
