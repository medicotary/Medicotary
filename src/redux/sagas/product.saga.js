import { put, call, takeLatest, all } from "redux-saga/effects";
import { ProductService } from "../services";
import { ProductTypes } from "../types";
import history from "../history";
const productService = new ProductService();

export function* addProduct(action) {
  try {
    const res = yield call(productService.create, action.payload);
    console.log(res);
    if (res.error) {
      yield put({
        type: ProductTypes.PRODUCT_ERROR,
        error: res.error,
      });
    } else {  
      yield put({ type: ProductTypes.PRODUCT_ADDED, data: res });
    }
  } catch (error) {
    yield put({ type: ProductTypes.PRODUCT_ERROR, error });
  }
}

export function* readProduct(action) {
  try {
    const res = yield call(productService.read, action.payload);
    console.log(res);
    if (res.error) {
      yield put({
        type: ProductTypes.PRODUCT_ERROR,
        error: res.message,
      });
    } else {
      yield put({ type: ProductTypes.PRODUCT_READ, data: res });
    }
  } catch (error) {
    yield put({ type: ProductTypes.PRODUCT_ERROR, error });
  }
}

export function* deleteProduct(action) {
  try {
    const res = yield call(productService.delete, action.payload);
    console.log(res);
    if (res.error) {
      yield put({
        type: ProductTypes.PRODUCT_ERROR,
        error: res.message,
      });
    } else {
      yield;
      put([
        { type: ProductTypes.PRODUCT_DELETED, data: res },
        history.push("/products"),
      ]);
    }
  } catch (error) {
    yield put({ type: ProductTypes.PRODUCT_ERROR, error });
  }
}

export function* editProduct(action) {
  try {
    const res = yield call(productService.edit, action.payload);
    console.log(res);
    if (res.error) {
      yield put({
        type: ProductTypes.PRODUCT_ERROR,
        error: res.message,
      });
    } else {
      yield put({ type: ProductTypes.PRODUCT_UPDATED, data: res });
    }
  } catch (error) {
    yield put({ type: ProductTypes.PRODUCT_ERROR, error });
  }
}

export default function* allSaga() {
  yield all([
    takeLatest(ProductTypes.PRODUCT_ADD_REQUEST, addProduct),
    takeLatest(ProductTypes.PRODUCT_READ_REQUEST, readProduct),
    takeLatest(ProductTypes.PRODUCT_EDIT_REQUEST, editProduct),
    takeLatest(ProductTypes.PRODUCT_DELETE_REQUEST, deleteProduct),
  ]);
}
