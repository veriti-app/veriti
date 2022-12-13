import React from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Card from "./components/Card";
import Modal from "./components/Modal"
import Login from "./components/Login";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
        <div className="container mx-auto px-1">
          <Filter />
          <Card />
          <Login />
          <Modal />
        </div>
      <Footer />
    </div>
  );
}