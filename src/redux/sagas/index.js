import { all, fork } from "redux-saga/effects";

// Sagas
// Import your sagas here!
import authSaga from "./auth.saga";
import productSaga from "./product.saga";
import vendorSaga from "./vendor.sagas";
import homeSaga from "./home.sagas";
// Connect types to sagas
const rootSaga = function* root() {
  yield all([
    // Seperate the sagas by comma
    fork(authSaga),
    fork(productSaga),
    fork(vendorSaga),
    fork(homeSaga),
  ]);
};

export default rootSaga;
