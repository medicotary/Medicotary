import { all, fork } from "redux-saga/effects";

// Sagas
// Import your sagas here!
import authSaga from "./auth.saga";

// Connect types to sagas
const rootSaga = function* root() {
  yield all([
    // Seperate the sagas by comma
    fork(authSaga),
  ]);
};

export default rootSaga;
