import {
  ButtonContainer,
  GoogleSignInButton,
  InvertedButton,
} from "./button.style.jsx";

export const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
  general: "base",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.general) => {
  return {
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    [BUTTON_TYPE_CLASSES.general]: ButtonContainer,
  }[buttonType];
};

const Button = ({ children, buttonType = "base", ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
