import React from "react";

import Header from "../components/Header"


export default function Home() {
  return (
    <div className="home"                 
          style={{ 
            background: "rgb(238,174,202)",
            background: "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
            height: "100vh"
            }}>
      <Header />
    </div>
  );
}