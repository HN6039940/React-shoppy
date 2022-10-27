import { useState, useEffect } from "react";
import { signinUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import {
  signinWithGooglePopup,
  createUserdocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const defaultFormField = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formField, setFormField] = useState(defaultFormField);
  const { email, password } = formField;
  const clearFormField = () => setFormField(defaultFormField);

  useEffect(() => clearFormField(), []);

  const logGoogleUser = async () => {
    const response = await signinWithGooglePopup();
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormField({ ...formField, [name]: value });
  };

  const logInHandler = async (e) => {
    e.preventDefault();
    try {
      const { user } = await signinUserWithEmailAndPassword(email, password);
      alert("ログイン完了しました");
      clearFormField();
    } catch (error) {
      clearFormField();
      switch (error.code) {
        case "auth/wrong-password":
          alert("パスワードが違います");
          break;
        case "auth/too-many-requests":
          alert(
            "ログインに失敗しました 時間をおいてから再度ログインしてください"
          );
          break;
        default:
          alert("正しい情報を入力してください");
      }
    }
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
        buttonType="google"
        type="submit"
        children={"Googleでログイン"}
        onClick={logGoogleUser}
      />
      <Button
        buttonType="inverted"
        type="submit"
        children={"ログイン"}
        onClick={logInHandler}
      />
    </div>
  );
};

export default SignIn;
