import { createAction } from '../../Utils/reducer/reducer.utils';
import { USER_ACTION_TIPE } from './user-type';

export const setCurrentUser = (user) =>
  createAction(USER_ACTION_TIPE.SET_CURRENT_USER, user);
