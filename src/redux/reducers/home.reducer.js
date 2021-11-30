import { HomeTypes } from "../types";

const initialState = {
  home: {},
  isLoading: false,
  isError: false,
};

const HomeReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case HomeTypes.HOME_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case HomeTypes.HOME_SUCCESS:
      return {
        ...state,
        home: action.data,
        isLoading: false,
        isError: false,
      };
    case HomeTypes.HOME_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default HomeReducer;
