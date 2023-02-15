import { combineReducers } from "redux";
import { UserReducer } from "./user/userReducer";
import { categoriesReducer } from "./category/category.reducer";
import { CartReducer } from "./categories/cart.reducer";
export const RootReducer = combineReducers({
  user: UserReducer,
  categories: categoriesReducer,
  cart: CartReducer,
});
