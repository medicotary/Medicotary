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
    case AuthTypes.LOGIN_ERROR:
      return {
        ...state,
        user: action.data,
      };
    default:
      return state;
  }
};

export default AuthReducer;
