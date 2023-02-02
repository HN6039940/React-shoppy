import styled from "styled-components";
import { ReactComponent as CartSvg } from "../../asset/shopping-cart-svgrepo-com.svg";

export const ShoppingIcon = styled(CartSvg)`
  height: 7rem;
  width: 5rem;
`;

export const ItemCount = styled.span`
  width: 40%;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: #fe4242;
  background-color: #a4ffff;
  border-radius: 50%;

  position: absolute;
`;

export const CartIconContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

// .cart-icon-container {
//   position: relative;
//   cursor: pointer;
//   & .shoping-icon {
//     width: 5rem;
//     height: 7rem;
//   }
//   & .item-count {
//     width: 40%;
//     text-align: center;
//     font-size: 1.5rem;
//     font-weight: bold;
//     color: #fe4242;
//     background-color: #a4ffff;
//     border-radius: 50%;

//     position: absolute;
//   }
// }
