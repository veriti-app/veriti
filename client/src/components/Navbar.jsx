import React from "react";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div>
        <ul>
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
        <ul className="flex p-2">
          <li className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/portfolio">
              Portfolio
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex flex-row-reverse">
      <h1>
      <Link to="/">
            <span className="self-center text-xl p-2 font-semibold whitespace-nowrap dark:text-white">veriti</span>
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
