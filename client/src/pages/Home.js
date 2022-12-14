import React from "react";

import Filter from "../components/Filter";
import Card from "../components/Card";
import Modal from "../components/Modal"
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";

export default function App() {
  return (
    <div className="App">
      <Header />
        <div className="container mx-auto px-1">
          <Dashboard />
          <Filter />
          <Card />
          <Modal />
        </div>
    </div>
  );
}