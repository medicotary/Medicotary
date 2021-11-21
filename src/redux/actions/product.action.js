import { ProductTypes } from "../types";

export const addProduct = (data) => ({
  type: ProductTypes.PRODUCT_ADD_REQUEST,
  payload: data,
});

export const editProduct = (data) => ({
  type: ProductTypes.PRODUCT_EDIT_REQUEST,
  payload: data,
});

// export const load = () => ({
//   type: ProductTypes.PRODUCT_LOAD,
// });

export const readProduct = (data) => ({
  type: ProductTypes.PRODUCT_READ_REQUEST,
  payload: data,
});
