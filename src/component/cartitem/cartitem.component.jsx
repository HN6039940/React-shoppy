import {
  ItemImg,
  ItemDetails,
  CartItemContainer,
} from "./cartcomponent.style.jsx";

const CartItem = ({ cartItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;
  return (
    <CartItemContainer>
      <ItemImg src={imageUrl} alt={`${name}`} />
      <ItemDetails className="item-details">
        <h2 className="item-name">{name}</h2>
        <p className="item-price">
          {price} x {quantity}
        </p>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
