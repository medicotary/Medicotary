import { UserTypes } from "../types";

export const update = (data) => ({
  type: UserTypes.USER_REQUEST,
  payload: data,
});
