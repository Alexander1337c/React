import { createAction } from '../../Utils/reducer/reducer.utils';
import { USER_ACTION_TIPE } from './user-type';

export const chekUser = () => createAction(USER_ACTION_TIPE.CHECK_USER_SESSION);
export const googleSIgnIn = () => createAction(USER_ACTION_TIPE.GOOGLE_SIGN_IN);
export const emailSignIn = (email, password) =>
  createAction(USER_ACTION_TIPE.EMAIL_SIGN_IN, { email, password });
export const signInSuccess = (user) =>
  createAction(USER_ACTION_TIPE.SIGN_IN_SUCCESS, user);
export const signInFailed = (error) =>
  createAction(USER_ACTION_TIPE.SIGN_IN_FAILURE, error);

export const signUpStart = (email, password, displayName) =>
  createAction(USER_ACTION_TIPE.SIGN_UP_START, {
    email,
    password,
    displayName,
  });
export const signUpSuccess = (user, additionalInformation) =>
  createAction(USER_ACTION_TIPE.SIGN_UP_SUCCESS, {
    user,
    additionalInformation,
  });
export const signUpFailed = (error) =>
  createAction(USER_ACTION_TIPE.SIGN_UP_FAILED, error);

export const signOutStart = () => createAction(USER_ACTION_TIPE.SIGN_OUT_START);

export const signOutSuccess = () =>
  createAction(USER_ACTION_TIPE.SIGN_OUT_SUCCESS);

export const signOutFailed = (error) =>
  createAction(USER_ACTION_TIPE.SIGN_OUT_FAILED, error);
