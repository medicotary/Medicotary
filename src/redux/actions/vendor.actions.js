import { VendorTypes } from "../types";

export const login = (data) => ({
  type: VendorTypes.VENDOR_ADD_REQUEST,
  payload: data,
});
