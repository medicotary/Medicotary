import { VendorTypes } from "../types";

const initialState = {
  vendor: {},
};

const VendorReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case VendorTypes.VENDOR_ADDED:
      return {
        ...state,
        vendor: action.data,
      };
    case VendorTypes.VENDOR_ERROR:
      return {
        ...state,
        vendor: action.data,
      };
    
    case VendorTypes.VENDOR_READ:
      return {
        ...state,
        vendor: action.data,
      };
    
    default:
      return state;
  }
};

export default VendorReducer;
