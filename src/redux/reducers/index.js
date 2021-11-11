import { combineReducers } from "redux";

import AuthReducer from "./auth.reducer";
import VendorReducer from "./vendor.reducer";
import ProductReducer from "./product.reducer";
const allReducers = {
  // Put all of the reducers here!
  auth: AuthReducer,
  product: ProductReducer,
  vendor: VendorReducer,
};

const rootReducer = combineReducers(allReducers);

export default rootReducer;
