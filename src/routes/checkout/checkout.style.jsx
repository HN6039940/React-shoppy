import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  .total-price {
    font-size: 2.4rem;
    margin-left: auto;
  }
`;

export const CheckOutHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  font-size: 2.4rem;
  padding: 1rem 0;
  border-bottom: 1px solid orange;
`;
export const HeaderBlock = styled.div`
  width: 23%;
  text-align: center;
  &:last-child {
    width: 8%;
  }
`;
// .checkout-container {
//   width: 55%;
//   min-height: 90vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin: 0 auto;

//   .checkout-header {
//     width: 100%;
//     display: flex;
//     justify-content: space-around;
//     font-size: 2.4rem;
//     padding: 1rem 0;
//     border-bottom: 1px solid orange;

//     .header-block {
//       width: 23%;
//       text-align: center;
//       &:last-child {
//         width: 8%;
//       }
//     }
//   }

//   .total-price {
//     font-size: 2.4rem;
//     margin-left: auto;
//   }
// }
