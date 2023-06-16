import { combineReducers } from 'redux';
import { userReducer } from './user/user-reducer';
import { cateGoryReducer } from './categories/categories.reducer';
import { cartReduce } from './cart/cart.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  categories: cateGoryReducer,
  cart: cartReduce,
});
