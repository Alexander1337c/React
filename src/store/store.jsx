import { compose, createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import { rootReducer } from './root-reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleWare from 'redux-saga';
import { rootSaga } from './root-saga';

const sagaMiddleWare = createSagaMiddleWare();
const middleWares = [
  process.env.NODE_ENV !== 'production' && logger,
  sagaMiddleWare,
].filter(Boolean);

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composedEnhancer(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);
sagaMiddleWare.run(rootSaga);
export const persistor = persistStore(store);
