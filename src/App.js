import React, { createContext, useState } from 'react';
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
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
// import AddEvents from './components/AddEvents/AddEvents';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const nav = [
    { link: '/', name: 'Home' },
    { link: '/orders', name: 'Orders' },
    { link: '/admin', name: 'Admin' },
    { link: '/manageProduct', name: 'Manage Products' },
    { link: '/login', name: 'Login' },
  ]


  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <div className="content-container">
          <div className="link-container">

            {
              nav.map(item => {
                const { link, name } = item;
                return (<Link className="link" to={link}>{name}</Link>)
              }
              )
            }

            {/* <Link to="/">Home</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/admin">Admin</Link>
            <Link to="/manageProduct">Manage Product</Link>
            <Link to="/login">Login</Link> */}


          </div>

          <hr />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/orders">
              <Orders></Orders>
            </Route>
            <PrivateRoute path="/admin">
              <Admin></Admin>
            </PrivateRoute>
            <PrivateRoute path="/details/:_id">
              <CheckOut></CheckOut>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/manageProduct">
              <ManageProduct></ManageProduct>
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

