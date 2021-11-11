import { combineReducers } from "redux";

import AuthReducer from "./auth.reducer";
import ProductReducer from "./product.reducer";
const allReducers = {
  // Put all of the reducers here!
  auth: AuthReducer,
  product:ProductReducer
};

const rootReducer = combineReducers(allReducers);

export default rootReducer;
