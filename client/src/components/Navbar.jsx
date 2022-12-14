import React from "react";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div>
        <ul className="flex flex-row-reverse">
          <li className="mx-1">
            <Link to="/">
              Home
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/portfolio">
              Portfolio
            </Link>
          </li>
          <li className="mx-1">
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
        </div>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
      <Link to="/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">veriti</span>
        </Link>
      </h1>

      <nav className="flex flex-row">
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
