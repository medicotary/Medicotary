import { put, call, takeLatest, all } from "redux-saga/effects";
import { VendorService } from "../services";
import { VendorTypes } from "../types";
import history from "../history";
const vendorService = new VendorService();

export function* addVendor(action) {
  try {
    const res = yield call(vendorService.create, action.payload);
    console.log(res);
    if (res.error) {
      console.error("Error Found");
      yield put({
        type: VendorTypes.VENDOR_ERROR,
        error: res.message,
      });
    } else {
      yield put({ type: VendorTypes.VENDOR_ADDED, data: res });
    }
  } catch (error) {
    console.log(error, " Error Found");
    yield put({ type: VendorTypes.VENDOR_ERROR, error: error.message });
  }
}

export function* readVendor(action) {
  try {
    const res = yield call(vendorService.read, action.payload);
    console.log(res);
    if (res.error) {
      yield put({
        type: VendorTypes.VENDOR_ERROR,
        error: res.message,
      });
    } else {
      yield put({ type: VendorTypes.VENDOR_READ, data: res });
    }
  } catch (error) {
    yield put({ type: VendorTypes.VENDOR_ERROR, error });
  }
}

export default function* allSaga() {
  yield all([
    takeLatest(VendorTypes.VENDOR_ADD_REQUEST, addVendor),
    takeLatest(VendorTypes.VENDOR_READ_REQUEST, readVendor),
  ]);
}
