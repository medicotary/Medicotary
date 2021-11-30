import { put, call, takeLatest, all } from "redux-saga/effects";
import { HomeService } from "../services";
// import { push } from "react-router-redux";
// import history from "../history";
import { HomeTypes } from "../types";
const homeService = new HomeService();

export function* read(action) {
  console.log("entered");
  try {
    const res = yield call(homeService.read, action.payload);
    if (res.error) {
      yield put({
        type: HomeTypes.HOME_ERROR,
        error: res.message,
      });
    } else {
      yield put({ type: HomeTypes.HOME_SUCCESS, data: res });
    }
  } catch (error) {
    yield put({ type: HomeTypes.HOME_ERROR, error });
  }
}

export default function* allSaga() {
  yield all([takeLatest(HomeTypes.HOME_REQUEST, read)]);
}
