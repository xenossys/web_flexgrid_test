import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
// redux config
import rootReducer from 'module/redux/reducers';
import globalSaga from 'module/redux/saga/globalSaga';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false,
      })
    : compose;

const configureStore = () => {
  const store = createStore(
    rootReducer,
    {},
    composeEnhancers(applyMiddleware(sagaMiddleware, logger)),
  );

  return {
    ...store,
    runSaga: sagaMiddleware.run,
  };
};

let store = configureStore();

sagaMiddleware.run(globalSaga);

export default store;
