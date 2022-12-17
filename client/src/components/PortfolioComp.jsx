import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useQuery } from "@apollo/client";
// import { useMutation } from "@apollo/client";
// import { ALL_CHARITIES } from "../utils/queries";
// import { SAVE_CHARITY } from "../utils/mutations";
// import CardNoCTA from "./CardNoCTA";
import EmptyState from "./EmptyState";

const Portfolio = () => {
  const [data] = useState([]);
  if (data.length === 0) {
    return (
      <div><EmptyState /></div>
    )
  } else {
    
  };
}

export default Portfolio;
