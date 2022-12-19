import React from "react";
import CardRec from "./CardRec";
import { QUERY_ME, ALL_CHARITIES } from "../utils/queries";
import { useQuery } from "@apollo/client";

const Recommendations = () => {
  // {/* TODO: Add Recommended cards logic here */}
  const { data } = useQuery(QUERY_ME);
  const { data: allCharities } = useQuery(ALL_CHARITIES);
  const savedCharities = data.me?.charities || [];
  console.log(savedCharities);

  return (
    <div className="rounded-lg px-4">
      <h1 className="mt-10 py-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Your Recommendations
      </h1>
      <CardRec />
    </div>
  );
};

export default Recommendations;
