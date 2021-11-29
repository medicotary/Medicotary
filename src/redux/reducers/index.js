import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import AuthReducer from "./auth.reducer";
import VendorReducer from "./vendor.reducer";
import ProductReducer from "./product.reducer";
const allReducers = {
  // Put all of the reducers here!
  auth: AuthReducer,
  product: ProductReducer,
  vendor: VendorReducer,
  router: routerReducer,
};

const rootReducer = combineReducers(allReducers);

export default rootReducer;
