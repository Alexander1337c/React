import { createAction } from '../../Utils/reducer/reducer.utils';
import { SET_CATEGORIES } from './categories.type';

export const fetchCategoriesStart = () =>
  createAction(SET_CATEGORIES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (category) => {
  return createAction(SET_CATEGORIES.FETCH_CATEGORIES_SUCCESS, category);
};
export const fetchCategoriesFaild = (error) =>
  createAction(SET_CATEGORIES.FETCH_CATEGORIES_FAILED, error);
