import React from 'react';
import CardItem from "./CardItem";
import "./Cards.css";

const Cards = ({data}) => {
  return (
    <div className="cards-wrapper">
      {
        data.map(card => (
          <CardItem {...card} />
        ))
      }
    </div>
  );
};

export default Cards;