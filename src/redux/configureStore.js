import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";

const masterConfig = (rootReducer, rootSaga) => {
  const middlewares = [];
  const enhancers = [];

  const sagaMiddleware = createSagaMiddleware();

  // All Redux Middlewares
  middlewares.push(sagaMiddleware); // Saga Middleware
  middlewares.push(createLogger()); // Redux Logger Middleware

  // Assemble middlewares
  enhancers.push(applyMiddleware(...middlewares));

  // Create Redux Store
  const store = createStore(rootReducer, compose(...enhancers));

  // kick off root saga
  const sagasManager = sagaMiddleware.run(rootSaga);

  return {
    store,
    sagasManager,
    sagaMiddleware,
  };
};

export default masterConfig;
