import { AuthTypes } from "../types";

const initialState = {
  user: {},
  isLoggedIn: false,
  isLoading: false,
  errorMessage: "",
};

const AuthReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case AuthTypes.LOGIN_REQUEST:
      return {
        ...state,
        user: {},
        isLoading: true,
        errorMessage: "",
        isLoggedIn: false,
      };
    case AuthTypes.SIGNUP_REQUEST:
      return {
        ...state,
        user: {},
        isLoading: true,
        errorMessage: "",
        isLoggedIn: false,
      };
    case AuthTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.data,
        isLoading: false,
        errorMessage: "",
        isLoggedIn: true,
      };
    case AuthTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.data,
        isLoading: false,
        errorMessage: "",
        isLoggedIn: true,
      };
    case AuthTypes.LOGIN_ERROR:
      return {
        ...state,
        user: action.error,
        isLoading: false,
        errorMessage: action.error.message,
        isLoggedIn: false,
      };
    case AuthTypes.LOGOUT_REQUEST:
      return {
        ...state,
        user: {},
        errorMessage: "",
        isLoggedIn: false,
      };
    case AuthTypes.TOGGLE_LOADING:
      return {
        ...state,
        user: {},
        errorMessage: "",
        isLoggedIn: false,
        loading: true,
      };
    default:
      return state;
  }
};

export default AuthReducer;
