import { useSelector } from "react-redux";
import { totalItemPrice } from "../../store/categories/cart.selector";
import CheckOutItem from "../../component/checkout-item/checkOutItem.component";
import PaymentForm from "../../component/payment-form/payment-form.compenent";
import {
  CheckoutContainer,
  CheckOutHeader,
  HeaderBlock,
} from "./checkout.style.jsx";
import { selectorCart } from "../../store/categories/cart.selector";
const CheckOut = () => {
  const cartItems = useSelector(selectorCart);
  const totalPrice = useSelector(totalItemPrice);
  return (
    <CheckoutContainer>
      <CheckOutHeader>
        <HeaderBlock>
          <span>商品名</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>説明</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>数量</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>値段</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>削除</span>
        </HeaderBlock>
      </CheckOutHeader>

      {cartItems.map((cartitem) => {
        return <CheckOutItem cartitem={cartitem} key={cartitem.id} />;
      })}

      <span className="total-price">合計:¥{totalPrice}</span>
      <PaymentForm />
    </CheckoutContainer>
  );
};

export default CheckOut;
