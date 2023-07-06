import {
  fetchCategoriesSuccess,
  fetchCategoriesFaild,
} from './categories.action';
import { getCategoryAndDocument } from '../../Utils/Firebase/firebase.utils';
import { takeLatest, all, call, put } from 'redux-saga/effects';
import { SET_CATEGORIES } from './categories.type';

export function* fetchCategoriesAsync() {
  try {
    const categories = yield call(getCategoryAndDocument, 'categories');
    yield put(fetchCategoriesSuccess(categories));
  } catch (error) {
    yield put(fetchCategoriesFaild(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(SET_CATEGORIES.FETCH_CATEGORIES_START, fetchCategoriesAsync);
}
export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
