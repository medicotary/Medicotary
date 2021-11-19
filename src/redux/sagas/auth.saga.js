import { put, call, takeLatest, all } from "redux-saga/effects";
import { AuthService } from "../services";
import history from "../history";
import { AuthTypes } from "../types";
const authService = new AuthService();

export function* login(action) {
  console.log("entered");
  try {
    const res = yield call(authService.login, action.payload);
    if (res.error) {
      history.push("/");
      yield put({
        type: AuthTypes.LOGIN_ERROR,
        error: res.message,
      });
    } else {
      history.push("/dash");
      yield put({ type: AuthTypes.LOGIN_SUCCESS, data: res });
    }
  } catch (error) {
    yield put({ type: AuthTypes.LOGIN_ERROR, error });
  }
}

export function* signup(action) {
  try {
    const res = yield call(authService.signup, action.payload);
    console.log(res);
    if (res.error) {
      yield put({
        type: AuthTypes.LOGIN_ERROR,
        error: res.message,
      });
    } else {
      yield put({ type: AuthTypes.SIGNUP_SUCCESS, data: res });
    }
  } catch (error) {
    yield put({ type: AuthTypes.LOGIN_ERROR, error });
  }
}

// export function* loading(action) {
//   yield put({
//     type: AuthTypes.TOGGLE_LOADING,
//   });
// }

export default function* allSaga() {
  yield all([
    takeLatest(AuthTypes.LOGIN_REQUEST, login),
    takeLatest(AuthTypes.SIGNUP_REQUEST, signup),
  ]);
}
