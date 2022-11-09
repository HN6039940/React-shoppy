import { useContext } from "react";
import { CartContext } from "../../context/cartContext.component";
import CheckOutItem from "../../component/checkout-item/checkOutItem.component";
import "./checkout.style.scss";
const CheckOut = () => {
  const { cartItems, totalPrice } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>商品名</span>
        </div>
        <div className="header-block">
          <span>説明</span>
        </div>
        <div className="header-block">
          <span>数量</span>
        </div>
        <div className="header-block">
          <span>値段</span>
        </div>
        <div className="header-block">
          <span>削除</span>
        </div>
      </div>

      {cartItems.map((cartitem) => {
        return <CheckOutItem cartitem={cartitem} />;
      })}

      <span className="total-price">合計:¥{totalPrice}</span>
    </div>
  );
};

export default CheckOut;
