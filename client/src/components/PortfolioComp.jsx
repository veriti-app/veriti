import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { ALL_CHARITIES } from "../utils/queries";
import { SAVE_CHARITY } from "../utils/mutations";
import CardNoCTA from "./CardNoCTA";

const Portfolio = () => {
  const cards = data?.charities || [];
  // function CardList(props) {
  //   const { cards } = props;

  //   if (cards.length === 0) {
  //     return <p>No saved charity found.</p>
  //   }

  return (
    <div className="flex flex-row flex-wrap justify-center space-x-4 py-4" type="card">
      {cards.map((card) => (
          <Card key={card.id} title={card.title} description={card.description} />
        ))}
      <div className="flex flex-col flex-wrap">
        <h1 className="my-2 p-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Your Saved Charities
        </h1>
        {/* Saved charity cards populate here */}
      </div>
    </div>
  );
};

export default Portfolio;
