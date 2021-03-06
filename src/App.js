// DEPENDENCIES
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

// COMPONENT IMPORTS
import Order from "./components/Order";
import OrderSuccess from "./components/OrderSuccess";
import About from "./components/About";
import Landing from "./components/Landing";
import Layout from "./components/Layout";

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

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/order-details" component={Order} />
        <Route path="/order-success" component={OrderSuccess} />
        <Route path="/about" component={About} />
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
