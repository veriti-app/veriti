import React from "react";
import Auth from "../utils/auth";
import { useState } from "react";
import { ADD_USER } from "../utils/mutations";
import { useMutation } from "@apollo/client";

const Signup = (props) => {
  const [signUp, { error, data }] = useMutation(ADD_USER);
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await signUp({
        variables: formState,
      });
      Auth.login(data.addUser.token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl m-5 text-center">Join the Movement</h1>
      <div className="p-8 max-w-auto bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <form className="flex flex-col gap-4 mt-4 mb-2 px-8 items-center border-gray-200 rounded-lg">
          <div className="signup-name-input">
            <h1>Name</h1>
            <div className="m-2 block">
              <label htmlFor="name1" value="Your name" />
            </div>
            <input
              onChange={handleInputChange}
              className="rounded-md"
              name="username"
              id="name1"
              type="email"
              placeholder="First Last"
              required={true}
            />
          </div>

          <div>
            <h1>Email</h1>
            <div className="m-2 block">
              <label htmlFor="email1" value="Your email" />
            </div>
            <input
              onChange={handleInputChange}
              className="rounded-md"
              name="email"
              id="email1"
              type="email"
              placeholder="name@mail.com"
              required={true}
            />
          </div>

          <div>
            <h1>Password</h1>
            <div className="m-2 block">
              <label htmlFor="password1" value="Your password" />
            </div>
            <input
              onChange={handleInputChange}
              className="rounded-md"
              name="password"
              id="password1"
              type="password"
              placeholder="password"
              required={true}
            />
          </div>
          <div className="m-2">
            <div
              onClick={handleSubmit}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
            >
              Sign up
            </div>
          </div>
          <p className="text-xs m-3 underline">
            <div
              className="text-xs m-3 underline"
              onClick={() => props.setLogin(true)}
            >
              Already a member? Login here
            </div>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
