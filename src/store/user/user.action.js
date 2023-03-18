import { createAction } from "../../utils/reducer/reducer.utils";
import { USER_ACTION_TYPE } from "./user.types";

export const setCurrentUser = (payload) => {
  return createAction(USER_ACTION_TYPE.SET_CURRENT_USER, payload);
};

export const checkUserSeaction = () =>
  createAction(USER_ACTION_TYPE.CHECK_USER_SEACTION);
export const googleSigninInStart = () =>
  createAction(USER_ACTION_TYPE.GOOGLE_SIGNIN_START);
export const mailSignInStart = (email, password) =>
  createAction(USER_ACTION_TYPE.MAIL_SIGNIN_START, { email, password });
export const SignInSuccess = (user) =>
  createAction(USER_ACTION_TYPE.SIGNIN_SUCCESS, user);
export const SignInFailted = (error) =>
  createAction(USER_ACTION_TYPE.SIGNIN_FAILTED, error);
export const SignupStart = (formData) =>
  createAction(USER_ACTION_TYPE.SIGNUP_START, formData);
export const SignupSuccess = (user, displayName) =>
  createAction(USER_ACTION_TYPE.SIGNUP_SUCCESS, { user, displayName });
export const SignUpFailted = (error) =>
  createAction(USER_ACTION_TYPE.SIGNUP_FAILTED, error);
export const SignOutStart = () => createAction(USER_ACTION_TYPE.SIGNOUT_START);
export const SignOutSucces = () =>
  createAction(USER_ACTION_TYPE.SIGNOUT_SUCCESS);
export const SignOutFailted = (error) =>
  createAction(USER_ACTION_TYPE.SIGNOUT_FAILTED, error);
