import { SET_CATEGORIES } from './categories.type';

export const INITIAL_CATEGORY_STATE = {
  currentCategory: [],
};

export const cateGoryReducer = (
  state = INITIAL_CATEGORY_STATE,
  action = {}
) => {
  const { type, payload } = action;
  switch (type) {
    case SET_CATEGORIES.GET_CATEGORIES:
      return { ...state, currentCategory: payload };
    default:
      return state;
  }
};
