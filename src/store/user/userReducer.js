import { USER_ACTION_TYPE } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  isloading: false,
  error: null,
  userInfomation: null,
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
      };
    case USER_ACTION_TYPE.CHECK_USER_SEACTION:
      return { ...state, isloading: true };
    case USER_ACTION_TYPE.SIGNIN_FAILTED:
      return { ...state, error: payload, isloading: false };
    case USER_ACTION_TYPE.GOOGLE_SIGNIN_START:
      return { ...state, isloading: true };
    case USER_ACTION_TYPE.MAIL_SIGNIN_START:
      return { ...state, isloading: true, userInfomation: payload };

    default:
      return state;
  }
};
