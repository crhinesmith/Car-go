import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/orderHistory">Order History</Link>
            <Link to="/Admin">Admin</Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="d-flex justify-content-around py-1">
      <Link to="/">
        <span className="logo" role="img" aria-label="wheel">
          <h1>Car-G🛞</h1>
        </span>
      </Link>

      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
