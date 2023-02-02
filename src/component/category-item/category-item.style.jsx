import styled from "styled-components";

export const CategoryItemTitle = styled.h2`
  color: #f1a661;
  font-size: 2.4rem;
  font-weight: bold;
`;

export const CategoryDescription = styled.p`
  font-size: 1.8rem;
  font-weight: lighter;
`;

export const CategoryBackGroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  opacity: 0.9;
  background-image: ${({ img }) => `url(${img})`};
`;

export const CategoryBodyContainer = styled.div`
  width: 15%;
  height: 15rem;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fdeedc;
  border: 3px solid #ffd8a9;
  border-radius: 3px;
  opacity: 0.9;
  position: absolute;
`;

export const CategoryContainer = styled.div`
  min-width: 30%;
  height: 30rem;
  margin: 0 0.75rem 1.5rem;
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
  border: 5px solid #fdeedc;
  overflow: hidden;

  &.large {
    height: 380px;
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
  &:hover {
    cursor: pointer;

    ${CategoryBackGroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    ${CategoryBodyContainer} {
      opacity: 1;
      transition: opacity 0.5s ease-in;
    }
  }
`;

// .category-container {
//   min-width: 30%;
//   height: 30rem;
//   margin: 0 0.75rem 1.5rem;
//   display: flex;
//   flex: 1 1 auto;
//   align-items: center;
//   justify-content: center;
//   border: 5px solid #fdeedc;
//   overflow: hidden;

//   &:hover {
//     cursor: pointer;

//     & .background-img {
//       transform: scale(1.1);
//       transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
//     }

//     & .category-body-container {
//       opacity: 1;
//       transition: opacity 0.5s ease-in;
//     }
//   }

//   &.large {
//     height: 380px;
//   }

//   &:first-child {
//     margin-right: 7.5px;
//   }

//   &:last-child {
//     margin-left: 7.5px;
//   }

//   .background-img {
//     width: 100%;
//     height: 100%;
//     background-position: center;
//     background-size: cover;
//     opacity: 0.9;
//   }

//   .category-body-container {
//     height: 15rem;
//     padding: 1rem 2rem;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     background-color: #fdeedc;
//     border: 3px solid #ffd8a9;
//     border-radius: 3px;
//     opacity: 0.9;
//     position: absolute;

//     .category-item-title {
//       color: #f1a661;
//       font-size: 2.4rem;
//       font-weight: bold;
//     }
//     & p {
//       font-size: 1.8rem;
//       font-weight: lighter;
//     }
//   }
// }
