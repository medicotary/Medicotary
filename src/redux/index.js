import { persistReducer, persistStore } from "redux-persist";

import ReduxPersist from "./config/reduxPersist.config";
import configureStore from "./configureStore";
import reducers from "./reducers";
import rootSaga from "./sagas";

// Redux Persist
const persistConfig = ReduxPersist.storeConfig;
const finalReducers = persistReducer(persistConfig, reducers);

const { store } = configureStore(finalReducers, rootSaga);

const persistor = persistStore(store);

export { store, persistor };
