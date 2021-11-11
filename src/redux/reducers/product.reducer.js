import { ProductTypes } from "../types";

const initialState = {
  product: {},
};

const ProductReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ProductTypes.PRODUCT_ADDED:
      return {
        ...state,
        user: action.data,
      };
    case ProductTypes.PRODUCT_ADD_ERROR:
      return {
        ...state,
        user: action.data,
      };
    default:
      return state;
  }
};

export default ProductReducer;
