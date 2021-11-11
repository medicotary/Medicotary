import { ProductTypes } from "../types";

export const login = (data) => ({
  type: ProductTypes.PRODUCT_ADD_REQUEST,
  payload: data,
});
