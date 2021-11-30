import { VendorTypes } from "../types";

export const addVendor = (data) => ({
  type: VendorTypes.VENDOR_ADD_REQUEST,
  payload: data,
});

export const readVendor = (data) => ({
  type: VendorTypes.VENDOR_READ_REQUEST,
  payload: data,
});
