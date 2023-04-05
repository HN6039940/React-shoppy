import {
  ButtonContainer,
  GoogleSignInButton,
  InvertedButton,
  SpinnerButton,
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

const Button = ({
  isloading,
  children,
  buttonType = BUTTON_TYPE_CLASSES.general,
  ...otherProps
}) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton {...otherProps} disabled={isloading}>
      {isloading ? <SpinnerButton></SpinnerButton> : children}
    </CustomButton>
  );
};

export default Button;
