import React from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Card from "./components/Card";
import Modal from "./components/Modal"
import Login from "../src/components/Login"
import Signup from "../src/components/Signup"
import Footer from "./components/Footer";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
        <div className="container mx-auto px-1">
          <Dashboard />
          <Filter />
          <Card />
          <Modal />
        </div>
      <Footer />
    </div>
  );
}