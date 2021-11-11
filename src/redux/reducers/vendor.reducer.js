import { VendorTypes } from "../types";

const initialState = {
  product: {},
};

const VendorReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case VendorTypes.VENDOR_ADDED:
      return {
        ...state,
        user: action.data,
      };
    case VendorTypes.VENDOR_ADD_ERROR:
      return {
        ...state,
        user: action.data,
      };
    default:
      return state;
  }
};

export default VendorReducer;
