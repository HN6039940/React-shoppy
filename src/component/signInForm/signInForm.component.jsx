import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  googleSigninInStart,
  mailSignInStart,
} from "../../store/user/user.action";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

const defaultFormField = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formField, setFormField] = useState(defaultFormField);
  const { email, password } = formField;
  const dispatch = useDispatch();
  const clearFormField = () => setFormField(defaultFormField);
  useEffect(() => clearFormField(), []);

  const logGoogleUser = async () => {
    dispatch(googleSigninInStart());
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormField({ ...formField, [name]: value });
  };

  const logInHandler = async (e) => {
    e.preventDefault();
    dispatch(mailSignInStart(email, password));
    clearFormField();
  };
  return (
    <div>
      <h2>ログインはこちらから</h2>
      <FormInput
        label="email"
        onChange={changeHandler}
        type="email"
        required
        name="email"
        value={email}
      />

      <FormInput
        label="pass word"
        onChange={changeHandler}
        type="password"
        required
        name="password"
        value={password}
      />

      <Button
        buttonType={BUTTON_TYPE_CLASSES.google}
        type="submit"
        children={"Googleでログイン"}
        onClick={logGoogleUser}
      />
      <Button
        buttonType={BUTTON_TYPE_CLASSES.general}
        type="submit"
        children={"ログイン"}
        onClick={logInHandler}
      />
    </div>
  );
};

export default SignIn;
