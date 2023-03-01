import { useState, useEffect } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { SignupStart } from "../../store/user/user.action";
import { useDispatch } from "react-redux";
const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const Signup = () => {
  const [formField, setFormField] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = formField;
  const clearFormField = () => setFormField(defaultFormField);
  const dispatch = useDispatch();
  useEffect(() => {
    clearFormField();
  }, []);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormField({ ...formField, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(SignupStart(formField));
    clearFormField();
  };

  return (
    <div>
      <h2>新規登録</h2>
      <span>アカウントはお持ちですか？</span>
      <form onSubmit={submitHandler}>
        <FormInput
          label="displayName"
          onChange={changeHandler}
          type="text"
          required
          name="displayName"
          value={displayName}
        />

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

        <FormInput
          label="confil password"
          onChange={changeHandler}
          type="password"
          required
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button children={"新規登録"} type="submit" />
      </form>
    </div>
  );
};

export default Signup;
