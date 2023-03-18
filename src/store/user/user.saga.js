import { put, call, all, takeLatest, select } from "redux-saga/effects";
import { USER_ACTION_TYPE } from "./user.types";
import {
  createUserdocumentFromAuth,
  createAuthUserWithEmailAndPassword,
  getCurrentUser,
  signinWithGooglePopup,
  signinUserWithEmailAndPassword,
  UserSignOut,
} from "../../utils/firebase/firebase.utils";
import {
  SignInFailted,
  SignInSuccess,
  SignOutFailted,
  SignOutSucces,
  SignUpFailted,
  SignupSuccess,
} from "./user.action";

export function* isGetUserDocSnapShot(userAuth, additonalInfo) {
  try {
    const userSnapShot = yield call(
      createUserdocumentFromAuth,
      userAuth,
      additonalInfo
    );
    const { email, displayName } = userSnapShot.data();
    yield put(
      SignInSuccess({
        id: userSnapShot.id,
        email: email,
        displayName: displayName,
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
    const { user } = yield call(signinWithGooglePopup);
    yield call(isGetUserDocSnapShot, user);
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

export function* iscreateUserFromSignupData({
  payload: { user, displayName },
}) {
  try {
    yield call(isGetUserDocSnapShot, user, { displayName });
  } catch (error) {
    throw new Error(error);
  }
}

export function* isUserSignUp({
  payload: { displayName, email, password, confirmPassword },
}) {
  try {
    if (password !== confirmPassword) {
      alert("パスワードが一致しません");
      throw new Error("パスワードが一致しません");
    }
    const { user } = yield call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );

    yield put(SignupSuccess(user, displayName));
  } catch (error) {
    yield put(SignUpFailted(error));
  }
}

export function* isUserSignOut() {
  try {
    yield call(UserSignOut);
    yield put(SignOutSucces());
  } catch (error) {
    yield put(SignOutFailted(error));
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

export function* oncreateUserSignUp() {
  yield takeLatest(USER_ACTION_TYPE.SIGNUP_START, isUserSignUp);
}

export function* userSignUpAfterSignIn() {
  yield takeLatest(USER_ACTION_TYPE.SIGNUP_SUCCESS, iscreateUserFromSignupData);
}

export function* onUserSignOut() {
  yield takeLatest(USER_ACTION_TYPE.SIGNOUT_START, isUserSignOut);
}
export function* userSaga() {
  yield all([
    call(onCheakUserSeaction),
    call(oncheackGoogleLogIn),
    call(oncheakEmailLogin),
    call(oncreateUserSignUp),
    call(userSignUpAfterSignIn),
    call(onUserSignOut),
  ]);
}
