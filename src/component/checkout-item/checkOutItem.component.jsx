import { useContext } from "react";
import { CartContext } from "../../context/cartContext.component";
import "./checkOutItem.style.scss";
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
    <div className="checkout-item-container" key={id}>
      <div className="checkout-img-container">
        <img src={imageUrl} alt="" />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <button className="allow" onClick={removeItemHandler}>
          &#10094;
        </button>
        <span className="">{quantity}</span>
        <button className="allow" onClick={addItemHandler}>
          &#10095;
        </button>
      </div>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => deleteItemToCart(cartitem)}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckOutItem;
