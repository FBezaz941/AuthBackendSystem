import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Customers from "./components/customers/Customers";
import CourierForm from "./components/couriers/CourierForm";
import Navbar1 from "./components/layout/Navbar";
import AuthContext from "./context/AuthContext";
import Home from "./components/layout/Home"
export default function Router() {
  const { loggedIn } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Navbar1 />
      <Switch>
        <Route exact path="/">
          <div><Home/></div>
        </Route>
        {loggedIn === false && (
          <>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </>
        )}
        {loggedIn === true && (
          <>
            <Route path="/customer">
              <Customers/>
            </Route>
            <Route path="/courier">
              <CourierForm/>
            </Route>
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
}
