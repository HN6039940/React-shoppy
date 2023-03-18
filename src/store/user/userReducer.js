import { USER_ACTION_TYPE } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  isloading: false,
  error: null,
  userInfomation: null,
  formData: null,
};
export const UserReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPE.SIGNIN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
        isloading: false,
        error: null,
        userInfomation: null,
        formData: null,
      };
    case USER_ACTION_TYPE.MAIL_SIGNIN_START:
      return { ...state, isloading: true, userInfomation: payload };
    case USER_ACTION_TYPE.CHECK_USER_SEACTION:
    case USER_ACTION_TYPE.GOOGLE_SIGNIN_START:
      return { ...state, isloading: true };
    case USER_ACTION_TYPE.SIGNUP_START:
      return { ...state, isloading: false, formData: payload };
    case USER_ACTION_TYPE.SIGNUP_SUCCESS:
      return { ...state, currentUser: payload };
    case USER_ACTION_TYPE.SIGNOUT_START:
      return { ...state };
    case USER_ACTION_TYPE.SIGNOUT_SUCCESS:
      return { ...state, ...INITIAL_STATE };
    case USER_ACTION_TYPE.SIGNIN_FAILTED:
    case USER_ACTION_TYPE.SIGNUP_FAILTED:
    case USER_ACTION_TYPE.SIGNOUT_FAILTED:
      return { ...state, error: payload, isloading: false };
    default:
      return state;
  }
};
