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
      <Filter />
      <Card />
      <Login />
      <Modal />
      <Footer />
      </div>
  );
}