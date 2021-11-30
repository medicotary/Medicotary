import { VendorTypes } from "../types";

const initialState = {
  vendor: { vendor: {} },
  isLoading: false,
  isError: false,
};

const VendorReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case VendorTypes.VENDOR_ADD_REQUEST:
      return {
        ...state,
        vendor: { vendors: {} },
        isLoading: true,
        isError: false,
      };
    case VendorTypes.VENDOR_DELETE_REQUEST:
      return {
        ...state,
        vendor: { vendors: {} },
        isLoading: true,
        isError: false,
      };
    case VendorTypes.VENDOR_EDIT_REQUEST:
      return {
        ...state,
        vendor: { vendors: {} },
        isLoading: true,
        isError: false,
      };
    case VendorTypes.VENDOR_ADDED:
      return {
        ...state,
        vendor: { vendors: {} },
        isLoading: false,
        isError: false,
      };
    case VendorTypes.VENDOR_DELETED:
      return {
        ...state,
        vendor: { vendors: {} },
        isLoading: false,
        isError: false,
      };
    case VendorTypes.VENDOR_ERROR:
      return {
        ...state,
        vendor: { vendors: {} },
        isLoading: false,
        isError: true,
      };
    case VendorTypes.VENDOR_READ:
      return {
        ...state,
        vendor: action.data,
        isLoading: false,
        isError: false,
      };
    case VendorTypes.VENDOR_UPDATED:
      return {
        ...state,
        vendor: action.data,
        isLoading: false,
        isError: false,
      };
    default:
      return state;
  }
};

export default VendorReducer;
