import { AuthTypes } from "../types";

export const login = (data) => ({
  type: AuthTypes.LOGIN_REQUEST,
  payload: data,
});
