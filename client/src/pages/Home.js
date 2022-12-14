import React from "react";

import Filter from "../components/Filter";
import Card from "../components/Card";
import Modal from "../components/Modal"
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="home">
      <Header />
        <div className="container mx-auto px-1">
          <Filter />
          <Card />
          <Modal />
        </div>
    </div>
  );
}