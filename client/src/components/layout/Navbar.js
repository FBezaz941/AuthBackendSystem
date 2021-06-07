import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import LogoutBtn from "../auth/LogoutBtn";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";

export default function Navbar1() {
  const { loggedIn } = useContext(AuthContext); //data from context hook allows for conditional rendering in navbar
  console.log(loggedIn);
  return (
    <div>
      <Navbar className="navbar" variant="light">
        <Navbar.Brand id="brand" href="/">
          Courier Pals
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {loggedIn === false && (
            <>
              <Nav className="mr-auto">
                <Nav.Link href="/register">Register</Nav.Link>
                <Nav.Link href="/login">Log in</Nav.Link>
              </Nav>
            </>
          )}
          {loggedIn === true && (
            <>
              <Nav className="mr-auto">
                <Nav.Link href="/courier">Become a Courier</Nav.Link>
                <LogoutBtn />
              </Nav>
            </>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
