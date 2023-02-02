import styled from "styled-components";

export const ShopGridContainer = styled.div`
  width: 95%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 30px;
  row-gap: 30px;
  justify-items: center;
  margin: 0 auto;
`;
export const ShopContainer = styled.div`
  & .shop-title {
    width: 95%;
    margin: 0 auto 2rem auto;
    font-size: 3rem;
    font-weight: bold;
    span {
      cursor: pointer;
      color: darkcyan;
    }
  }
`;

// .shop-container {
//   & .shop-title {
//     width: 95%;
//     margin: 0 auto 2rem auto;
//     font-size: 3rem;
//     font-weight: bold;
//     span {
//       cursor: pointer;
//       color: darkcyan;
//     }
//   }
//   & .shop-grid-container {
//     width: 95%;
//     display: grid;
//     grid-template-columns: repeat(4, 1fr);
//     column-gap: 30px;
//     row-gap: 30px;
//     justify-items: center;
//     margin: 0 auto;
//   }
// }
