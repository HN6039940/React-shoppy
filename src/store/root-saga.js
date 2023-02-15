import { all, call } from "redux-saga/effects";
import { categoriesSaga } from "./category/categories.saga";

export function* rootsaga() {
  yield all([call(categoriesSaga)]);
}
