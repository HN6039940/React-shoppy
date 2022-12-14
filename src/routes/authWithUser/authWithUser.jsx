import Signup from "../../component/signupForm/signupForm.component";
import SignIn from "../../component/signInForm/signInForm.component";

import { SignUpContainer } from "./authWithUser.style";
// import { getRedirectResult } from "firebase/auth";
// import { useEffect } from "react";
// import {
//   auth,
//   signinWithGoogleRedirect,
//   createUserdocumentFromAuth,
// } from "../../utils/firebase/firebase.utils";

// useEffect(() => {
//   const fetchRedirectData = async () => {
//     const response = await getRedirectResult(auth);
//     if (!response) return;
//     const { user } = response;
//     createUserdocumentFromAuth(user);
//   };
//   fetchRedirectData();
// }, []);

// const logGoogleRedirect = async () => {
//   await signinWithGoogleRedirect();
// };

const AuthWithUser = () => {
  return (
    <SignUpContainer>
      <SignIn />
      <Signup />
    </SignUpContainer>
  );
};

export default AuthWithUser;
