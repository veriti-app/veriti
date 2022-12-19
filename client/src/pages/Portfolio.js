import React from "react";
import Summary from "../components/Summary";
import PortfolioComp from "../components/PortfolioComp";
import Recommendations from "../components/Recommendations";

export default function PortfolioPage() {
  return (
    <div className="portfoliopage">
      {/* the Summary component renders your contributions, how many charities you've donated to and the download buttons */}
      <div>
        <Summary />
      </div>
      <div>
        {/* the PortfolioComp component is where we store the saved cards data to the portfolio */}
        <PortfolioComp />
      </div>
    </div>
  );
}
