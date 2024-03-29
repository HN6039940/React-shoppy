import { all, call } from "redux-saga/effects";
import { categoriesSaga } from "./category/categories.saga";
import { userSaga } from "./user/user.saga";
export function* rootsaga() {
  yield all([call(categoriesSaga), call(userSaga)]);
}
