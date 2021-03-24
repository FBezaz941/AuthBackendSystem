import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import LogoutBtn from "../auth/LogoutBtn";

export default function Navbar() {
  const { loggedIn } = useContext(AuthContext); //data from context hook allows for conditional rendering in navbar
  console.log(loggedIn);
  return (
    <div>
      <Link to="/">Home</Link>
      {loggedIn === false && (
        <>
          <Link to="/register">Register</Link>
          <Link to="/login">Log in</Link>
        </>
      )}
      {loggedIn === true && (
        <>
          <Link to="/customer">Customers</Link>
          <LogoutBtn />
        </>
      )}
    </div>
  );
}
