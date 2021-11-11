import { put, call, takeLatest, all } from "redux-saga/effects";
import { ProductService } from "../services";
import { ProductTypes } from "../types";

const productService = new ProductService();

export function* login(action) {
  try {
    const res = yield call(productService.create, action.payload);
    console.log(res);
    if (res.error) {
      yield put({
        type: ProductTypes.PRODUCT_ADD_ERROR,
        error: res.message,
      });
    } else {
      yield put({ type: ProductTypes.PRODUCT_SUCCESS, data: res });
    }
  } catch (error) {
    yield put({ type: ProductTypes.PRODUCT_ADD_ERROR, error });
  }
}

export default function* allSaga() {
  yield all([takeLatest(ProductTypes.PRODUCT_ADD_REQUEST, login)]);
}
