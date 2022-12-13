import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
// import { LOGIN } from '../utils/mutations'; 
import Auth from '../utils/auth';
import Login from '../components/Login';
import Signup from '../components/Signup';

function LoginSignup(props) {
 const [login, setLogin] = useState(true)
      // State var True / false  
      // true = login / false = signup 

      //rrturn
      // switch - updateing the stateVar 
      // {stateVar ? loginComponenet : signupComponent}

    return (
        <div>
            {
                login === true?(
                <div>
                    <Login/> 
                    <p>
                        Not a member? 
                        <button onClick = {() => setLogin(false)}>Sign up</button>
                    </p>
                 </div>
        )
         : 
        (
            <div>
                <Signup /> 
                <p>
                    I already have a account 
                    <button onClick = {() => setLogin(true)}>login</button>
                </p>
            </div>
        )
            }
    
        </div>
    )
}

export default LoginSignup; 