import React from "react";
import Card from "./Card";

const Portfolio = () => {
  function CardList(props) {
    const { cards } = props;
  
    if (cards.length === 0) {
      return <p>No saved charity found.</p>
    }
  
    return (
      <div>
        {cards.map((card) => (
          <Card key={card.id} title={card.title} description={card.description} />
        ))}
      </div>
    );
  }
}
 
export default Portfolio;