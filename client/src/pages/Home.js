import React from "react";

import Header from "../components/Header";

export default function Home() {
  return (
    <div
      className="home"
      style={{
        background:
          "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
      }}
    >
      <div className="container mx-auto px-1">
        <Header />
      </div>
    </div>
  );
}
