import styled from "styled-components";
import { SpinnerContainer } from "../spinner/spinner.style.jsx";

export const ButtonContainer = styled.button`
  min-width: 15rem;
  min-height: 5rem;
  font-size: 1.8rem;
  font-weight: bold;
  letter-spacing: 2px;
  background-color: #f1a661;
  color: #ffffff;
  text-transform: uppercase;
  border: 2px solid #ffd8a9;
  border-radius: 4px;
  transition: all 0.3s ease;
  &:hover {
    cursor: pointer;
    background-color: #e38b29;
  }
`;

export const GoogleSignInButton = styled(ButtonContainer)`
  background-color: #fce700;
  color: #ffffff;
  margin-right: 3rem;
  &:hover {
    cursor: pointer;
    background-color: #ffffff;
    color: #fce700;
  }
`;

export const InvertedButton = styled(ButtonContainer)`
  background-color: #00f5ff;
  color: #ffffff;
  border: 2px solid #00f5ff;

  &:hover {
    cursor: pointer;
    background-color: #ffffff;
    color: #00f5ff;
  }
`;

export const SpinnerButton = styled(SpinnerContainer)`
  border: 3px solid rgba(255, 255, 255, 0.9);
  width: 30px;
  height: 30px;
  border-top-color: #444444;
  animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
