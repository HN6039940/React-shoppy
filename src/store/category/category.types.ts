export enum CATEGORY_ACTION_TYPE {
  SET_CATEGORY = "SET_CATEGORY",
  FETCH_CATEGORY_START = "category/FETCH_CATEGORY_START",
  FETCH_CATEGORY_ERROR = "FETCH_CATEGORY_ERROR",
}

export type CategoriesItem = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
};

export type Category = {
  title: string;
  name: string;
  items: CategoriesItem[];
};

export type CategoryMap = {
  [key: string]: CategoriesItem[];
};
