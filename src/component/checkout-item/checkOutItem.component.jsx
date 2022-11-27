import { useContext } from "react";
import { CartContext } from "../../context/cartContext.component";
import {
  CheckOutName,
  CheckOutPrice,
  CheckOutQuantity,
  Allow,
  CheckOutItemContainer,
  CheckOutImgContainer,
  RemoveButton,
} from "./checkOutItem.style.jsx";
const CheckOutItem = ({ cartitem }) => {
  const { addItemToCart, removeItemToCart, deleteItemToCart } =
    useContext(CartContext);
  const { id, name, imageUrl, price, quantity } = cartitem;
  const removeItemHandler = () => {
    removeItemToCart(cartitem);
  };
  const addItemHandler = () => {
    addItemToCart(cartitem);
  };
  return (
    <CheckOutItemContainer key={id}>
      <CheckOutImgContainer>
        <img src={imageUrl} alt="" />
      </CheckOutImgContainer>
      <CheckOutName>{name}</CheckOutName>
      <CheckOutQuantity>
        <Allow onClick={removeItemHandler}>&#10094;</Allow>
        <span className="">{quantity}</span>
        <Allow onClick={addItemHandler}>&#10095;</Allow>
      </CheckOutQuantity>
      <CheckOutPrice>{price}</CheckOutPrice>
      <RemoveButton onClick={() => deleteItemToCart(cartitem)}>
        &#10005;
      </RemoveButton>
    </CheckOutItemContainer>
  );
};

export default CheckOutItem;
