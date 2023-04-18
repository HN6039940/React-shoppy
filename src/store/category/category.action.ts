import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORY_ACTION_TYPE, Category } from "./category.types";
import { Action, ActionWithPayload } from "../../utils/reducer/reducer.utils";

type FetchCategoryStart = Action<CATEGORY_ACTION_TYPE.FETCH_CATEGORY_START>;
type SetCategories = ActionWithPayload<
  CATEGORY_ACTION_TYPE.SET_CATEGORY,
  Category[]
>;

type FetchCategoryFailed = ActionWithPayload<
  CATEGORY_ACTION_TYPE.FETCH_CATEGORY_ERROR,
  Error
>;

export type CategoryAction =
  | SetCategories
  | FetchCategoryStart
  | FetchCategoryFailed;

export const setCategories = (categories: Category[]): SetCategories => {
  return createAction(CATEGORY_ACTION_TYPE.SET_CATEGORY, categories);
};

export const fetchCategoryStart = (): FetchCategoryStart =>
  createAction(CATEGORY_ACTION_TYPE.FETCH_CATEGORY_START);

export const fetchCategoryfailed = (error: Error): FetchCategoryFailed =>
  createAction(CATEGORY_ACTION_TYPE.FETCH_CATEGORY_ERROR, error);
