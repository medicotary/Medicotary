import { AuthTypes } from "../types";

export const login = (data) => ({
  type: AuthTypes.LOGIN_REQUEST,
  payload: data,
});


export const signup = (data) => ({
  type: AuthTypes.SIGNUP_REQUEST,
  payload: data,
});

export const load = () => ({
  type: AuthTypes.TOGGLE_LOADING,
});

export const logout = () => ({
  type: AuthTypes.LOGOUT_REQUEST,
});
