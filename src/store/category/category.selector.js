import { createSelector } from "reselect";

const CategoriesReducer = (state) => state.categories;

export const selectorCategories = createSelector(
  [CategoriesReducer],
  (slice) => slice.categories
);

export const selectorCategoriesMap = createSelector(
  [selectorCategories],
  (categories) =>
    categories.reduce((acc, docSnapshot) => {
      const { title, items } = docSnapshot;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);

export const selectorCategoriesIsloading = createSelector(
  [CategoriesReducer],
  (slice) => slice.isloading
);
