import { CATEGORY_ACTION_TYPE } from "./category.types";

const CATEGORY_INITIAL_STATE = {
  categories: [],
  isloading: false,
  iserror: null,
};

export const categoriesReducer = (state = CATEGORY_INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORY_ACTION_TYPE.SET_CATEGORY:
      return { ...state, categories: payload, isloading: false };
    case CATEGORY_ACTION_TYPE.FETCH_CATEGORY_START:
      return { ...state, isloading: true };
    case CATEGORY_ACTION_TYPE.FETCH_CATEGORY_ERROR:
      return { ...state, iserror: payload, isloading: false };
    default:
      return state;
  }
};
