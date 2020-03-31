// DEPENDENCIES
import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
<<<<<<< HEAD
import { BrowserRouter, Route, Switch } from "react-router-dom";
=======
import { BrowserRouter } from "react-router-dom";
>>>>>>> 9eb0e0ff1cce0d0e3a46ac21903f9b4920ca4822
import reducer from "./reducers/reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

// COMPONENT IMPORTS
import App from "./App";
<<<<<<< HEAD
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

=======

>>>>>>> 9eb0e0ff1cce0d0e3a46ac21903f9b4920ca4822
const store = configureStore({
  reducer: reducer
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
<<<<<<< HEAD
      <Navbar />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/order-details" component={Order} />
        <Route exact path="/order-success" component={OrderSuccess} />
        <Route exact path="/about" component={About} />
      </Switch>
=======
      <App />
>>>>>>> 9eb0e0ff1cce0d0e3a46ac21903f9b4920ca4822
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);

serviceWorker.unregister();
