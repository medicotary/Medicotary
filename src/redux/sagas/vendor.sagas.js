import { put, call, takeLatest, all } from "redux-saga/effects";
import { VendorService } from "../services";
import { VendorTypes } from "../types";

const productService = new VendorService();

export function* addVendor(action) {
  try {
    const res = yield call(productService.create, action.payload);
    console.log(res);
    if (res.error) {
      yield put({
        type: VendorTypes.VENDOR_ADD_ERROR,
        error: res.message,
      });
    } else {
      yield put({ type: VendorTypes.VENDOR_SUCCESS, data: res });
    }
  } catch (error) {
    yield put({ type: VendorTypes.VENDOR_ADD_ERROR, error });
  }
}

export default function* allSaga() {
  yield all([takeLatest(VendorTypes.VENDOR_ADD_REQUEST, addVendor)]);
}
