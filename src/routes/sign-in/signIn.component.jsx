import {
  auth,
  signinWithGooglePopup,
  createUserdocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signinWithGooglePopup();
    const { user } = response;
    createUserdocumentFromAuth(user);
  };

  return (
    <div>
      <h1>This is SignIN</h1>
      <button onClick={logGoogleUser}>click sign in</button>
    </div>
  );
};

export default SignIn;
