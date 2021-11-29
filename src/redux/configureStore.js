import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
// import { routerMiddleware } from "react-router-redux";
import history from "./history";

const masterConfig = (rootReducer, rootSaga) => {
  const middlewares = [];
  const enhancers = [];

  const sagaMiddleware = createSagaMiddleware();
  // const createRouterMiddleware = routerMiddleware(history);
  // All Redux Middlewares
  middlewares.push(sagaMiddleware); // Saga Middleware
  middlewares.push(createLogger()); // Redux Logger Middleware
  // middlewares.push(createRouterMiddleware); //
  // Assemble middlewares
  enhancers.push(applyMiddleware(...middlewares));

  // Create Redux Store
  const store = createStore(rootReducer, composeWithDevTools(...enhancers));

  // kick off root saga
  const sagasManager = sagaMiddleware.run(rootSaga);

  return {
    store,
    sagasManager,
    sagaMiddleware,
  };
};

export default masterConfig;
