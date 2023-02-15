import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORY_ACTION_TYPE } from "./category.types";

export const setCategories = (categories) => {
  return createAction(CATEGORY_ACTION_TYPE.SET_CATEGORY, categories);
};

export const fetchCategoryStart = () =>
  createAction(CATEGORY_ACTION_TYPE.FETCH_CATEGORY_START);

export const fetchCategoryfailed = (error) =>
  createAction(CATEGORY_ACTION_TYPE.FETCH_CATEGORY_ERROR, error);
