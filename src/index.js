import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { persistor, store } from "./redux";
import { BrowserRouter } from "react-router-dom";
import history from "./redux/history";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading="<Loader/>" persistor={persistor}>
      <BrowserRouter history={history}>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
