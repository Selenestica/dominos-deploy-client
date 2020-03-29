// DEPENDENCIES
import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import reducer from "./reducers/reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

// COMPONENT IMPORTS
import App from "./App";
import Navbar from "./components/Navbar";
import Order from "./components/Order";
import OrderSuccess from "./components/OrderSuccess";
import About from "./components/About";

// CSS IMPORTS
import "./css/index.css";
import "./css/Navbar.css";
import "./css/Order.css";
import "./css/PizzaMenu.css";
import "./css/ClosestStore.css";
import "./css/OrderSuccess.css";
import "./css/DrinksMenu.css";
import "./css/About.css";
import "materialize-css/dist/css/materialize.min.css";

const store = configureStore({
  reducer: reducer
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/order-details" component={Order} />
        <Route exact path="/order-success" component={OrderSuccess} />
        <Route exact path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);

serviceWorker.unregister();
