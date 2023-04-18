import { createSelector } from "reselect";
import { CategoryInitialState } from "./category.reducer";
import { CategoryMap, Category } from "./category.types";
const CategoriesReducer = (state): CategoryInitialState => state.categories;

export const selectorCategories = createSelector(
  [CategoriesReducer],
  (slice) => slice.categories
);

export const selectorCategoriesMap = createSelector(
  [selectorCategories],
  (categories): CategoryMap =>
    categories.reduce((acc, docSnapshot: Category) => {
      const { title, items } = docSnapshot;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap)
);

export const selectorCategoriesIsloading = createSelector(
  [CategoriesReducer],
  (slice) => slice.isloading
);
