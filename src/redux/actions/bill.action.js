import { BillTypes } from "../types";

export const addBill = (data) => ({
  type: BillTypes.BILL_ADD_REQUEST,
  payload: data,
});

export const editBill = (data) => ({
  type: BillTypes.BILL_EDIT_REQUEST,
  payload: data,
});

export const readBill = (data) => ({
  type: BillTypes.BILL_READ_REQUEST,
  payload: data,
});
