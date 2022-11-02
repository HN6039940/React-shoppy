import Button from "../button/button.component";
import "./cartDropDown.style.scss";
const CartDropDown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      <Button children={`to checkout`} />
    </div>
  );
};

export default CartDropDown;
