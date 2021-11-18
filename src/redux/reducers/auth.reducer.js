import { AuthTypes } from "../types";

const initialState = {
  user: {},
};

const AuthReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case AuthTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.data,
      };
    case AuthTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.data,
      };
    case AuthTypes.LOGIN_ERROR:
      return {
        ...state,
        user: action.data,
      };
    case AuthTypes.LOGOUT_REQUEST:
      return {
        ...state,
        user: {},
      }
    default:
      return state;
  }
};

export default AuthReducer;
