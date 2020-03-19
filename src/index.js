// DEPENDENCIES
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import reducer from './reducers/reducer'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

// COMPONENT IMPORTS
import App from './App';
import Navbar from './components/Navbar'
import Order from './components/Order'
import OrderSuccess from './components/OrderSuccess'

// CSS IMPORTS
import './css/index.css'
import './css/Navbar.css'
import './css/Order.css'
import './css/PizzaMenu.css'
import './css/ClosestStore.css'
import './css/OrderSuccess.css'
import './css/DrinksMenu.css'
import 'materialize-css/dist/css/materialize.min.css';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) 

ReactDOM.render(

            <Provider store = {store}>
                <BrowserRouter>
                    <Navbar />
                    <Switch>
                        <Route exact path='/' component = {App} />
                        <Route exact path='/order-details' component = {Order} />
                        <Route exact path='/order-success' component = {OrderSuccess} />
                    </Switch>
                </BrowserRouter>
            </Provider>

    , document.getElementById('root'));

serviceWorker.unregister();
