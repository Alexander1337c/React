import { SET_CATEGORIES } from './categories.type';

export const INITIAL_CATEGORY_STATE = {
  currentCategory: [],
  isLoading: false,
  error: null,
};

export const cateGoryReducer = (
  state = INITIAL_CATEGORY_STATE,
  action = {}
) => {
  const { type, payload } = action;
  switch (type) {
    case SET_CATEGORIES.FETCH_CATEGORIES_START:
      return { ...state, isLoading: true };
    case SET_CATEGORIES.FETCH_CATEGORIES_SUCCESS:
      return { ...state, currentCategory: payload, isLoading: false };
    case SET_CATEGORIES.FETCH_CATEGORIES_FAILED:
      return { ...state, error: payload, isLoading: false };
    default:
      return state;
  }
};
