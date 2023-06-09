import { USER_ACTION_TIPE } from './user-type';

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};
export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TIPE.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
      };
    case USER_ACTION_TIPE.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
      };
    case USER_ACTION_TIPE.SIGN_IN_FAILURE:
    case USER_ACTION_TIPE.SIGN_UP_FAILED:
    case USER_ACTION_TIPE.SIGN_OUT_FAILED:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
