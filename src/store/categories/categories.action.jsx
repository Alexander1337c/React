import { createAction } from '../../Utils/reducer/reducer.utils';
import { SET_CATEGORIES } from './categories.type';

export const getCategoryMap = (category) => {
  return createAction(SET_CATEGORIES.GET_CATEGORIES, category);
};
