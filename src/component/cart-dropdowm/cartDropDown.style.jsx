import styled from "styled-components";
import {
  ButtonContainer,
  GoogleSignInButton,
  InvertedButton,
} from "../button/button.style";
export const CartDropDownContainer = styled.div`
  position: absolute;
  width: 16%;
  height: 36rem;
  padding: 1.5rem;
  top: 10%;
  left: 80%;
  z-index: 6;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border: 3px solid #ffe838;
  border-radius: 2px;
  ${ButtonContainer} ,
  ${GoogleSignInButton} ,
  ${InvertedButton} {
    margin-top: auto;
  }
`;

export const EmptyItem = styled.span`
  width: 100%;
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
  margin: auto;
`;

export const CartItemsContainer = styled.div`
  overflow: scroll;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  ${EmptyItem} {
    justify-self: center;
  }
`;

// .cart-dropdown-container {
//   position: absolute;
//   width: 16%;
//   height: 36rem;
//   padding: 1.5rem;
//   top: 10%;
//   left: 80%;
//   z-index: 6;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   background-color: #ffffff;
//   border: 3px solid #ffe838;
//   border-radius: 2px;

//   .empty-item {
//     width: 100%;
//     font-size: 1.8rem;
//   }

//   .cart-items {
//     overflow: scroll;
//     width: 100%;
//     margin-top: auto;
//     display: flex;
//     flex-direction: column;
//   }
// }
