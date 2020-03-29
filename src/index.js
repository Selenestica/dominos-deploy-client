// DEPENDENCIES
import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import reducer from "./reducers/reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

// COMPONENT IMPORTS
import App from "./App";

const store = configureStore({
  reducer: reducer
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);

serviceWorker.unregister();
