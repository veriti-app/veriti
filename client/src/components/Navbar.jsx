import React from "react";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import { Navbar } from "flowbite-react";

function Nav() {
  const isLoggedIn = Auth.loggedIn();

  return (
      <nav className="flex flex-row-reverse items-center justify-between bg-indigo-700 p-6">
          <h1>
            <Link to="/">
              <span className="self-center text-xl p-2 font-bold whitespace-nowrap text-white">veriti</span>
            </Link>
          </h1>
          <ul className="flex flex-wrap items-end">
            <li className="block mt-4 lg:inline-block lg:mt-0 text-white hover:font-semibold mr-4">
              <Link to="/">Home</Link>
            </li>
            <li className="block mt-4 lg:inline-block lg:mt-0 text-white hover:font-semibold mr-4">
              <Link to="/portfolio">Portfolio</Link>
            </li>
            {isLoggedIn ? (
              <li className="block mt-4 lg:inline-block lg:mt-0 text-white hover:font-semibold mr-4">
                <a href="/" onClick={() => Auth.logout()}>Logout</a>
              </li>
            ) : (
              <li className="block mt-4 lg:inline-block lg:mt-0 text-white font-bold mr-4">
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
      </nav>
  );
}

export default Nav;