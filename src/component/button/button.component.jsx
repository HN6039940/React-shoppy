import "./button.style.scss";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
  general: "",
};

const Button = ({ children, buttonType = "general", ...otherProps }) => {
  return (
    <button
      className={`btn-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
