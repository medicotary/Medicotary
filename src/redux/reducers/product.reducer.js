import { ProductTypes } from "../types";

const initialState = {
  product: [],
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case ProductTypes.PRODUCT_ADDED:
      return {
        ...state,
        product: action.data,
      };
    case ProductTypes.PRODUCT_ADD_ERROR:
      return {
        ...state,
        product: action.data,
      };
    case ProductTypes.PRODUCT_READ:
      return {
        ...state,
        product: action.data,
      };
    case ProductTypes.PRODUCT_ERROR:
      return {
        ...state,
        product: action.data,
      };
    default:
      return state;
  }
};

export default ProductReducer;
