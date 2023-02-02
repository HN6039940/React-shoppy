import styled, { css } from "styled-components";

const CheckOutSpan = css`
  width: 23%;
  display: flex;
  justify-content: center;
`;

export const CheckOutName = styled.span`
  ${CheckOutSpan}
`;
export const CheckOutQuantity = styled.div`
  ${CheckOutSpan}
`;
export const CheckOutPrice = styled.span`
  ${CheckOutSpan}
`;

export const Allow = styled.button`
  font-size: 2.4rem;
  color: #ea047e;
  background-color: inherit;
  border: none;
  margin-right: 1.2rem;
  cursor: pointer;
  &:last-of-type {
    margin-right: 0;
    margin-left: 1.2rem;
  }
`;

export const RemoveButton = styled.div`
  width: calc(100% - (23% * 4));
  text-align: center;
  cursor: pointer;
`;

export const CheckOutImgContainer = styled.div`
  width: 23%;
  height: 30%;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const CheckOutItemContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 2rem 0;
  font-size: 2.4rem;
  border-bottom: 1px solid orange;
`;
// .checkout-item-container {
//   width: 100%;
//   display: flex;
//   align-items: center;
//   padding: 2rem 0;
//   font-size: 2.4rem;
//   border-bottom: 1px solid orange;

//   .checkout-img-container {
//     width: 23%;
//     height: 30%;
//     img {
//       width: 100%;
//       height: 100%;
//     }
//   }
//   .name,
//   .price,
//   .quantity {
//     width: 23%;
//     display: flex;
//     justify-content: center;
//   }

//   .allow {
//     font-size: 2.4rem;
//     color: #ea047e;
//     background-color: inherit;
//     border: none;
//     margin-right: 1.2rem;
//     cursor: pointer;
//     &:last-of-type {
//       margin-right: 0;
//       margin-left: 1.2rem;
//     }
//   }

//   .remove-button {
//     width: calc(100% - (23% * 4));
//     text-align: center;
//     cursor: pointer;
//   }
// }
