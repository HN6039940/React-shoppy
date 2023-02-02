import { useSelector, useDispatch } from "react-redux";
import {
  addItemToCart,
  removeItemToCart,
  deleteItemToCart,
} from "../../store/categories/cart.action";
import { selectorCart } from "../../store/categories/cart.selector";
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
  const cartItems = useSelector(selectorCart);
  const dispatch = useDispatch();
  const { id, name, imageUrl, price, quantity } = cartitem;
  const removeItemHandler = () => {
    dispatch(removeItemToCart(cartItems, cartitem));
  };
  const addItemHandler = () => {
    dispatch(addItemToCart(cartItems, cartitem));
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
      <RemoveButton
        onClick={() => dispatch(deleteItemToCart(cartItems, cartitem))}
      >
        &#10005;
      </RemoveButton>
    </CheckOutItemContainer>
  );
};

export default CheckOutItem;
