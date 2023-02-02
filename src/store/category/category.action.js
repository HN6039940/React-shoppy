import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORY_ACTION_TYPE } from "./category.types";
import { getCategoriesAndDocuents } from "../../utils/firebase/firebase.utils";

export const setCategories = (categories) => {
  return createAction(CATEGORY_ACTION_TYPE.SET_CATEGORY, categories);
};

export const fetchCategoryStart = () =>
  createAction(CATEGORY_ACTION_TYPE.FETCH_CATEGORY_START);

export const fetchCategoryfailed = (error) =>
  createAction(CATEGORY_ACTION_TYPE.FETCH_CATEGORY_ERROR, error);

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoryStart());
  try {
    const categoryArray = await getCategoriesAndDocuents();
    dispatch(setCategories(categoryArray));
  } catch (error) {
    dispatch(fetchCategoryfailed(error));
  }
};
