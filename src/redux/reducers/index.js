import { combineReducers } from "redux";

import AuthReducer from "./auth.reducer";

const allReducers = {
  // Put all of the reducers here!
  auth: AuthReducer,
};

const rootReducer = combineReducers(allReducers);

export default rootReducer;
