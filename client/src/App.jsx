import React, { useState } from 'react';
import Navbar from "./components/Navbar";
// import Filter from "./components/Filter";
// import Card from "./components/Card";
import Modal from "./components/Modal"
import Login from "./components/Login";
import Signup from "./components/Signup";
import Footer from "./components/Footer";

export default function App() {
  // return (
  //   <div className="App">
  //     <Navbar />
  //     <div className="container mx-auto px-4">
  //       <div className="py-4">
  //         <h1 className="text-3xl">
  //         {/* Explore */}
  //         </h1>
  //       </div>
        
  //       {/* <Filter />*/}
  //       {/* <Card />  */}
  //       {/* <Login /> */}
  //       <Modal />
  //     </div>
  //   </div>
  // );
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
                <Login /> 
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
    