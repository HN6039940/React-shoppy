import { useState } from "react";
import { useSelector } from "react-redux";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { totalItemPrice } from "../../store/categories/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  FormContainer,
  PaymentFormWrapper,
  CardElementContainer,
} from "./payment-form.style.jsx";
const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const currentUser = useSelector(selectCurrentUser);
  const totalPrice = useSelector(totalItemPrice);

  const paymenthandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    setIsProcessing(true);
    const resopnse = await fetch("/.netlify/functions/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: totalPrice * 100 }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = resopnse;

    const result = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "ゲスト",
        },
      },
    });

    setIsProcessing(false);

    if (result.error) {
      alert(result.error.message);
    } else {
      if (result.paymentIntent.status === "succeeded") alert("Payment Success");
    }
  };
  return (
    <div>
      <PaymentFormWrapper>
        <FormContainer onSubmit={paymenthandler}>
          <CardElementContainer>
            <CardElement />
          </CardElementContainer>
          <h2>クレジット払い</h2>
          <Button
            isloading={isProcessing}
            children={"Pay Now"}
            buttonType={BUTTON_TYPE_CLASSES.inverted}
          ></Button>
        </FormContainer>
      </PaymentFormWrapper>
    </div>
  );
};

export default PaymentForm;

// connfig = {root:"",storage,whitelist:[]}
// const sagaMiddleware = crreateSagaMiddleWare()
// const const middleWare =[process.env.NODE]