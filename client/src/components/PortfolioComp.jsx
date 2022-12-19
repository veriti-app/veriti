import React from "react";
import { useQuery } from "@apollo/client";
import EmptyState from "./EmptyState";
import CardSaved from "../components/CardSaved";
import { QUERY_ME } from "../utils/queries";



const Portfolio = () => {
  // checking user has saved user charities or not
  const { data } = useQuery(QUERY_ME);
  // Changed this from data == 0  (data was undefined)
  if (!data) {
    return (
      <div className="">
        <EmptyState />
      </div>
    );
  } else {
    // if user has saved charities then it's dispalyed on card saved component
    return (
      <div className="rounded-lg px-4">
        <h1 className="py-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Your Saved Charities</h1>
        <CardSaved />
      </div>
    );
  }

  
};

export default Portfolio;
