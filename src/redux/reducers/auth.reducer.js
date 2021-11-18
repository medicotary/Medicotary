import { AuthTypes } from "../types";

const initialState = {
  user: {},
  isLoading: true,
  errorMessage: "",
};

const AuthReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case AuthTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.data,
        isLoading: false,
        errorMessage: "",
      };
    case AuthTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.data,
        isLoading: false,
        errorMessage: "",
      };
    case AuthTypes.LOGIN_ERROR:
      return {
        ...state,
        user: action.error,
        isLoading: false,
        errorMessage: action.error.message,
      };
    case AuthTypes.LOGOUT_REQUEST:
      return {
        ...state,
        user: {},
        errorMessage: "",
      };
    default:
      return state;
  }
};

export default AuthReducer;
