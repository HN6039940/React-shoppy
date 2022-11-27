import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cartContext.component";
import Button from "../button/button.component";
import CartItem from "../cartitem/cartitem.component";
import {
  CartDropDownContainer,
  EmptyItem,
  CartItemsContainer,
} from "./cartDropDown.style";
const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  const navigation = useNavigate();

  const gotoCheckOutHandler = () => {
    navigation("checkout");
  };
  return (
    <CartDropDownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => {
            return <CartItem cartItem={cartItem} key={cartItem.id} />;
          })
        ) : (
          <EmptyItem>カートは空です</EmptyItem>
        )}
      </CartItemsContainer>
      <Button children={`to checkout`} onClick={gotoCheckOutHandler} />
    </CartDropDownContainer>
  );
};

export default CartDropDown;
