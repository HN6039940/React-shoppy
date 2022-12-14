import styled from "styled-components";

export const ItemImg = styled.img`
  width: 30%;
  height: 100%;
`;

export const ItemDetails = styled.div`
  width: 70%;
  font-size: 1.2rem;
`;

export const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  width: 100%;
  height: 10rem;
  margin-bottom: 1.8rem;
`;

// .cart-item-container {
//   display: flex;
//   align-items: center;
//   gap: 30px;
//   width: 100%;
//   height: 10rem;
//   margin-bottom: 1.8rem;
//   & .item-img {
//     width: 30%;
//     height: 100%;
//   }
//   & .item-details {
//     width: 70%;
//     font-size: 1.2rem;
//   }
// }
