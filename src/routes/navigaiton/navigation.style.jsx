import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  width: 100%;
  height: 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem 0 4rem;
  margin-top: 1.5rem;
  margin-bottom: 1.8rem;
`;

export const NavLinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  letter-spacing: 2px;
  &:link,
  &:visited {
    font-weight: bold;
    color: #f1a661;
    font-size: 2.4rem;
    transition: all 0.2s;
  }

  &:hover,
  &:active {
    color: #e38b29;
    transition: all 0.2s;
  }

  &:not(:first-of-type) {
    margin-left: 3rem;
  }
`;

export const LogoContainer = styled.div`
  height: 7rem;
  width: 5rem;
  transition: transform ease 0.3s;
  &:hover {
    transform: scale(1.2);
  }
`;

// .navigation {
//   width: 100%;
//   height: 8rem;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 0 4rem 0 4rem;
//   margin-top: 1.5rem;
//   margin-bottom: 1.8rem;

//   .nav-link {
//     display: flex;
//     align-items: center;
//   }

//   .logo-container {
//     height: 7rem;
//     width: 5rem;
//     transition: transform ease 0.3s;
//     &:hover {
//       transform: scale(1.2);
//     }
//   }

//   .nav-links-container {
//     display: flex;
//     align-items: center;
//     justify-content: flex-end;
//     gap: 20px;
//   }

//   .nav-link {
//     letter-spacing: 2px;
//     &:link,
//     &:visited {
//       font-weight: bold;
//       color: #f1a661;
//       font-size: 2.4rem;
//       transition: all 0.2s;
//     }

//     &:hover,
//     &:active {
//       color: #e38b29;
//       transition: all 0.2s;
//     }

//     &:not(:first-child) {
//       margin-left: 3rem;
//     }
//   }
// }
