import { put, call, takeLatest, all } from "redux-saga/effects";
import { BillingService } from "../services";
import { BillTypes } from "../types";
import history from "../history";
const billService = new BillingService();

export function* addBill(action) {
  try {
    const res = yield call(billService.create, action.payload);
    console.log(res);
    if (res.error) {
      yield put({
        type: BillTypes.BILL_ERROR,
        error: res.error,
      });
    } else {
      yield put({ type: BillTypes.BILL_ADDED, data: res });
    }
  } catch (error) {
    yield put({ type: BillTypes.BILL_ERROR, error });
  }
}

export function* readBill(action) {
  try {
    const res = yield call(billService.read, action.payload);
    console.log(res);
    if (res.error) {
      yield put({
        type: BillTypes.BILL_ERROR,
        error: res.message,
      });
    } else {
      yield put({ type: BillTypes.BILL_READ, data: res });
    }
  } catch (error) {
    yield put({ type: BillTypes.BILL_ERROR, error });
  }
}

export default function* allSaga() {
  yield all([
    takeLatest(BillTypes.BILL_ADD_REQUEST, addBill),
    takeLatest(BillTypes.BILL_READ_REQUEST, readBill),
  ]);
}
