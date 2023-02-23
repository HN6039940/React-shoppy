import { takeLatest, all, call, put } from "redux-saga/effects";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { fetchCategoryfailed, setCategories } from "./category.action";
import { CATEGORY_ACTION_TYPE } from "./category.types";

export function* fetchCategoriesAsync() {
  try {
    const categoryArray = yield call(getCategoriesAndDocuments, "categories");
    yield put(setCategories(categoryArray));
  } catch (error) {
    yield put(fetchCategoryfailed(error));
  }
}

export function* onfetchCategories() {
  yield takeLatest(
    CATEGORY_ACTION_TYPE.FETCH_CATEGORY_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield all([call(onfetchCategories)]);
}
