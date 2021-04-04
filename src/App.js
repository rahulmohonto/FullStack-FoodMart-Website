import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Orders from './components/Orders/Orders';
import Login from './components/Login/Login';
import Admin from './components/Admin/Admin';
import ManageProduct from './components/ManageProduct/ManageProduct';
import CheckOut from './components/CheckOut/CheckOut';
// import AddEvents from './components/AddEvents/AddEvents';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/orders">Orders</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
            <li>
              <Link to="/manageProduct">Manage Product</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/orders">
            <Orders></Orders>
          </Route>
          <Route path="/admin">
            <Admin></Admin>
          </Route>
          <Route path="/details/:_id">
            <CheckOut></CheckOut>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/manageProduct">
            <ManageProduct></ManageProduct>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

