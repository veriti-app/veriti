import React from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import CardNoCTA from "./CardNoCTA";

function Header() {
  const isLoggedIn = Auth.loggedIn();
  return (
    <div className="py-12 overflow-y-hidden">
      <dh-component>
        <div className="w-full px-4 justify-center">
          <div className="mt-2 relative rounded-lg container mx-auto flex flex-col items-center pt-12 sm:pt-24 pb-24 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64">
            <div className="mt-8 w-11/12 sm:w-2/3 mb-5 sm:mb-10">
              <h1
                style={{ textTransform: "uppercase" }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-bold leading-tight"
              >
                Value your verity
              </h1>
              <h5 className="text-lg text-center text-white font-bold leading-tight py-2">
                {" "}
                Build your own charitable portfolio{" "}
              </h5>
            </div>
            <div className="flex justify-center items-center mb-10 sm:mb-20">
              {isLoggedIn ? (
                <Link
                  to="/explore"
                  className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-indigo-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Start Donating Today
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-indigo-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Start Donating Today
                </Link>
              )}
            </div>
            <CardNoCTA />
          </div>
        </div>
      </dh-component>
    </div>
  );
}

export default Header;
