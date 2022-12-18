import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useQuery } from "@apollo/client";
// import { useMutation } from "@apollo/client";
// import { ALL_CHARITIES } from "../utils/queries";
// import { SAVE_CHARITY } from "../utils/mutations";
// import CardNoCTA from "./CardNoCTA";
import { useQuery } from "@apollo/client";
import EmptyState from "./EmptyState";
import CardSaved from "../components/CardSaved";
import { QUERY_ME } from "../utils/queries";



const Portfolio = () => {
  // checking user has saved user chairities or not
  const { data } = useQuery(QUERY_ME);

  if (data.length === 0) {
    return (
      <div className="">
        <EmptyState />
      </div>
    );
  } else {
    // if user has saved chairities then it's dispalyed on card saved component
    return (
      <div className="rounded-lg px-4">
        <h1 className="py-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Your Saved Charities</h1>
        <CardSaved />
      </div>
    );
  }

  
};

export default Portfolio;
