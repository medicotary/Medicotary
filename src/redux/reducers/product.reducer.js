import { ProductTypes } from "../types";

const initialState = {
  product: { product: {} },
  isLoading: false,
  isError: false,
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case ProductTypes.PRODUCT_ADD_REQUEST:
      return {
        ...state,
        product: { product: {} },
        isLoading: true,
        isError: false,
      };
    case ProductTypes.PRODUCT_DELETE_REQUEST:
      return {
        ...state,
        product: { product: {} },
        isLoading: true,
        isError: false,
      };
    case ProductTypes.PRODUCT_EDIT_REQUEST:
      return {
        ...state,
        product: { product: {} },
        isLoading: true,
        isError: false,
      };
    case ProductTypes.PRODUCT_ADDED:
      return {
        ...state,
        product: { product: {} },
        isLoading: false,
        isError: false,
      };
    case ProductTypes.PRODUCT_DELETED:
      return {
        ...state,
        product: { product: {} },
        isLoading: false,
        isError: false,
      };
    case ProductTypes.PRODUCT_ERROR:
      return {
        ...state,
        product: {},
        isLoading: false,
        isError: true,
      };
    case ProductTypes.PRODUCT_READ:
      return {
        ...state,
        product: action.data,
        isLoading: false,
        isError: false,
      };
    case ProductTypes.PRODUCT_UPDATED:
      return {
        ...state,
        product: {},
        isLoading: false,
        isError: false,
      };
    default:
      return state;
  }
};

export default ProductReducer;
