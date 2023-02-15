import { createAction } from "../../utils/reducer/reducer.utils";
import { USER_ACTION_TYPE } from "./user.types";

export const setCurrentUser = (payload) => {
  return createAction(USER_ACTION_TYPE.SET_CURRENT_USER, payload);
};
