import styled from "styled-components";
import { CardElement } from "@stripe/react-stripe-js";

export const PaymentFormWrapper = styled.div`
  width: 50rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  margin: 10px 0;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 10rem;
  min-height: 500px;
`;

export const CardElementContainer = styled.div`
  :first-child {
    width: 30rem;
  }
`;
