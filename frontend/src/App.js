// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import ProductList from './components/ProductList';
import Order from './components/Order';

const App = () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/products" component={ProductList} />
            <Route path="/order" component={Order} />
        </Switch>
    </Router>
);


export default App;

