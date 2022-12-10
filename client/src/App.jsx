import React from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Card from "./components/Card";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container mx-auto px-4">
        <div className="py-4">
          <h1 className="text-3xl">
          Explore
          </h1>
        </div>
        
        <Filter />
        <Card />
      </div>
    </div>
  );}
    