import React from "react";
import CardNoCTA from "./CardNoCTA"; //This is placeholder

const Recommendations = () => {
  function RecoList() {}
  return (
    <div
      class="flex flex-row flex-wrap justify-center space-x-4 py-4"
      type="card"
    >
      <div className="flex flex-row flex-wrap">
        <h1 className="my-2 p-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Your Recommendations
        </h1>
        {/* Recommended cards is referenced here */}
        <CardNoCTA />
      </div>
    </div>
  );
};

export default Recommendations;
