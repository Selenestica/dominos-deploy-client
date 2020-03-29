// DEPENDENCIES
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

// COMPONENT IMPORTS
import Navbar from "./components/Navbar";
import Order from "./components/Order";
import OrderSuccess from "./components/OrderSuccess";
import About from "./components/About";
import Landing from "./components/Landing";

// CSS IMPORTS
import "./css/index.css";
import "./css/Navbar.css";
import "./css/Order.css";
import "./css/PizzaMenu.css";
import "./css/ClosestStore.css";
import "./css/OrderSuccess.css";
import "./css/DrinksMenu.css";
import "./css/About.css";
import "./css/App.css";
import "materialize-css/dist/css/materialize.min.css";
import Layout from "./components/Layout";

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route exact path="/order-details" component={Order} />
        <Route exact path="/order-success" component={OrderSuccess} />
        <Route exact path="/about" component={About} />
        <Route exact path="/" component={Landing} />
      </Switch>
    );

    return (
      <>
        <Layout>{routes}</Layout>
      </>
    );
  }
}

export default App;
