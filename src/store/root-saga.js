import { all, call } from 'redux-saga/effects'
import { categoriesSaga } from './categories/saga-categories'
import { userSaga } from './user/saga.user'

export function* rootSaga() {
    yield all([call(categoriesSaga), call(userSaga)])
};