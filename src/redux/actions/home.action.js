import { HomeTypes } from "../types";

export const read = (data) => ({
  type: HomeTypes.HOME_REQUEST,
  payload: data,
});
