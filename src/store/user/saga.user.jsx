import { takeLatest, all, call, put } from 'redux-saga/effects';
import { USER_ACTION_TIPE } from './user-type';
import {
  createUserDocumentFromAuth,
  createUserWithPasswordAndEmail,
  getCurrentUser,
  signInWithGooglePopup,
  signInWithPasswordAndEmail,
} from '../../Utils/Firebase/firebase.utils';
import {
  signInFailed,
  signInSuccess,
  signOutSuccess,
  signOutFailed,
  signUpFailed,
  signUpSuccess,
} from './user-action';
import { signOutUser } from '../../Utils/Firebase/firebase.utils';

export function* getSnapshotFromUserAuth(userAuth, additionalInformation) {
  try {
    const userSnapShot = yield call(
      createUserDocumentFromAuth,
      userAuth,
      additionalInformation
    );

    yield put(signInSuccess({ id: userSnapShot.id, ...userSnapShot.data() }));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* isGoogleSignIn() {
  try {
    const { user } = yield call(signInWithGooglePopup);
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* isSignWithEmail({ payload: { email, password } }) {
  try {
    console.log('fair');
    const { user } = yield call(signInWithPasswordAndEmail, email, password);
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* isUserAuthentication() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* userSignUpStart({
  payload: { email, password, displayName },
}) {
  try {
    const { user } = yield call(
      createUserWithPasswordAndEmail,
      email,
      password
    );
    yield put(signUpSuccess(user, { displayName }));
  } catch (error) {
    yield put(signUpFailed(error));
  }
}

export function* signOutUserAuth() {
  try {
    yield call(signOutUser);
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailed(error));
  }
}

export function* userSignUpSuccess({
  payload: { user, additionalInformation },
}) {
  console.log(user, additionalInformation);
  yield call(getSnapshotFromUserAuth, user, additionalInformation);
}

export function* onGoogleSignIn() {
  yield takeLatest(USER_ACTION_TIPE.GOOGLE_SIGN_IN, isGoogleSignIn);
}

export function* checkUserSession() {
  yield takeLatest(USER_ACTION_TIPE.CHECK_USER_SESSION, isUserAuthentication);
}

export function* onSignInWithEmail() {
  yield takeLatest(USER_ACTION_TIPE.EMAIL_SIGN_IN, isSignWithEmail);
}

export function* onSignUpStart() {
  yield takeLatest(USER_ACTION_TIPE.SIGN_UP_START, userSignUpStart);
}

export function* onSignUpSuccess() {
  yield takeLatest(USER_ACTION_TIPE.SIGN_UP_SUCCESS, userSignUpSuccess);
}

export function* onSignOut() {
  yield takeLatest(USER_ACTION_TIPE.SIGN_OUT_START, signOutUserAuth);
}

export function* userSaga() {
  yield all([
    call(checkUserSession),
    call(onGoogleSignIn),
    call(onSignInWithEmail),
    call(onSignUpStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOut),
  ]);
}
