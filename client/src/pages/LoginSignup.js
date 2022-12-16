import React, { useState } from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";

function LoginSignup(props) {
  const [login, setLogin] = useState(true);

  return (
    <div>
      {login === true ? (
        <div>
          <Login setLogin={setLogin} />
        </div>
      ) : (
        <div>
          <Signup setLogin={setLogin} />
        </div>
      )}
    </div>
  );
}

export default LoginSignup;
