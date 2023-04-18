import { CATEGORY_ACTION_TYPE } from "./category.types";
import { CategoryAction } from "./category.action";

export type CategoryInitialState = {
  readonly categories: [];
  readonly isloading: false;
  readonly iserror: Error | null;
};

const CATEGORY_INITIAL_STATE: CategoryInitialState = {
  categories: [],
  isloading: false,
  iserror: null,
};

export const categoriesReducer = (
  state = CATEGORY_INITIAL_STATE,
  action = {} as CategoryAction
) => {
  switch (action.type) {
    case CATEGORY_ACTION_TYPE.SET_CATEGORY:
      return { ...state, categories: action.payload, isloading: false };
    case CATEGORY_ACTION_TYPE.FETCH_CATEGORY_START:
      return { ...state, isloading: true };
    case CATEGORY_ACTION_TYPE.FETCH_CATEGORY_ERROR:
      return { ...state, iserror: action.payload, isloading: false };
    default:
      return state;
  }
};
