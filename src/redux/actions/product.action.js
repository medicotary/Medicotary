import { ProductTypes } from "../types";

export const addProduct = (data) => ({
  type: ProductTypes.PRODUCT_ADD_REQUEST,
  payload: data,
});

export const readProduct = (data) => ({
  type: ProductTypes.PRODUCT_READ_REQUEST,
  payload: data,
});