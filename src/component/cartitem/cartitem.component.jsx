import "./cartcomponent.style.scss";

const CartItem = ({ cartItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} className="item-img" />
      <div className="item-details">
        <h2 className="item-name">{name}</h2>
        <p className="item-price">
          {price} x {quantity}
        </p>
      </div>
    </div>
  );
};

export default CartItem;
