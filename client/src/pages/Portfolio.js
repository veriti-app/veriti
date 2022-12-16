import React from "react";
import Summary from "../components/Summary";
import PortfolioComp from "../components/PortfolioComp";

export default function PortfolioPage() {
    return (
        <div className="container mx-auto px-1">
            <div className="mx-auto px-1">
                <Summary />
            </div>
            <div className="mx-auto px-1">
                <PortfolioComp />
            </div>
        </div>
    ); 
}