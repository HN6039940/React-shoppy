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
