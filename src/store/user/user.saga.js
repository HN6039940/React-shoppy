import { put, call, all, takeLatest, select } from "redux-saga/effects";
import { USER_ACTION_TYPE } from "./user.types";
import {
  createUserdocumentFromAuth,
  getCurrentUser,
  signinWithGooglePopup,
  signinUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import { SignInFailted, SignInSuccess } from "./user.action";

export function* isGetUserDocSnapShot(userAuth, additonalInfo) {
  try {
    const userSnapShot = yield call(
      createUserdocumentFromAuth,
      userAuth,
      additonalInfo
    );

    yield put(
      SignInSuccess({
        id: userSnapShot.id,
        ...userSnapShot.data(),
      })
    );
  } catch (error) {
    yield put(SignInFailted(error));
  }
}

export function* isUserAuth() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (userAuth) {
      yield call(isGetUserDocSnapShot, userAuth);
    }
  } catch (error) {
    yield put(SignInFailted(error));
  }
}

export function* isUserLoginWithGoogle() {
  try {
    const userInfoFromGoogle = yield call(signinWithGooglePopup);
    yield put(
      SignInSuccess({ id: userInfoFromGoogle.uid, ...userInfoFromGoogle })
    );
  } catch (error) {
    yield put(SignInFailted(error));
  }
}

export function* isUserLoginWithEmail() {
  const { email, password } = yield select(
    (state) => state.user.userInfomation
  );
  try {
    const { user } = yield call(
      signinUserWithEmailAndPassword,
      email,
      password
    );
    yield put(SignInSuccess({ user }));
    alert("ログイン完了しました");
  } catch (error) {
    yield put(SignInFailted(error.code));
  }
}

export function* oncheackGoogleLogIn() {
  yield takeLatest(USER_ACTION_TYPE.GOOGLE_SIGNIN_START, isUserLoginWithGoogle);
}

export function* oncheakEmailLogin() {
  yield takeLatest(USER_ACTION_TYPE.MAIL_SIGNIN_START, isUserLoginWithEmail);
}

export function* onCheakUserSeaction() {
  yield takeLatest(USER_ACTION_TYPE.CHECK_USER_SEACTION, isUserAuth);
}

export function* userSaga() {
  yield all([
    call(onCheakUserSeaction),
    call(oncheackGoogleLogIn),
    call(oncheakEmailLogin),
  ]);
}
