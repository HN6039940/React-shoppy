import styled from "styled-components";
import {
  ButtonContainer,
  GoogleSignInButton,
  InvertedButton,
} from "../button/button.style";

export const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
  opacity: 0.9;

  & .name {
    width: 90%;
    color: orange;
  }
  & .price {
    width: 10%;
    font-size: 1.8rem;
    font-weight: bold;
  }
`;

export const ProductImgContainer = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid rgb(255, 203, 151);
  transition: scale 2s ease;
  overflow: hidden;
  & img {
    width: 100%;
    height: 100%;
    transition: all 5s ease;
    object-fit: cover;
  }
`;

export const ProductsCardContainer = styled.div`
  width: 100%;
  max-height: 50rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 4px;
  position: relative;

  &:hover {
    cursor: pointer;

    ${Footer} {
      opacity: 1;
    }
    img {
      transform: scale(1.2);
    }
  }

  ${ButtonContainer},${GoogleSignInButton},${InvertedButton} {
    width: 60%;
    position: absolute;
    top: 65%;
  }
`;

/* .products-card-container {
  width: 100%;
  max-height: 50rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 4px;
  position: relative;

  &:hover {
    cursor: pointer;

    .footer {
      opacity: 1;
    }
    img {
      transform: scale(1.2);
    }
  }

  .products-img-container {
    width: 100%;
    height: 100%;
    border: 2px solid rgb(255, 203, 151);
    transition: scale 2s ease;
    overflow: hidden;
    & img {
      width: 100%;
      height: 100%;
      transition: all 5s ease;
      object-fit: cover;
    }
  }

  & .footer {
    width: 100%;
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: space-between;
    opacity: 0.9;

    & .name {
      width: 90%;
      color: orange;
    }
    & .price {
      width: 10%;
      font-size: 1.8rem;
      font-weight: bold;
    }
  }
  .btn-container {
    width: 60%;
    position: absolute;
    top: 65%;
  }
} */
