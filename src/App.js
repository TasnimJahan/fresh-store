import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createContext, useState } from 'react';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin';
import Orders from './components/Orders/Orders';
import CheckOut from './components/CheckOut/CheckOut';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      {/* <h2>Name: {loggedInUser.name}</h2> */}
      <Router className="container">
          <Header/>
          <Switch>
            <Route path="/home">
              <Home />
            </Route> 
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/checkOut">
              <CheckOut></CheckOut>
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <Admin></Admin>
            </PrivateRoute>
            <PrivateRoute path="/orders">
              <Orders />
            </PrivateRoute>
            {/* <PrivateRoute path="/destination/:vehicleType">
              <Destination />
            </PrivateRoute>
            <Route path="/destination">
              <Destination />
            </Route> */}
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
