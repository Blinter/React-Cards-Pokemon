// src/PlayingCardList.jsx

import React, { useState } from "react";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import { v4 as uuidv4 } from 'uuid';
import { useAxios } from './hooks/useAxios';

function PlayingCardList() {
  const [cards, addCard, resetState] = useAxios(
    "https://deckofcardsapi.com/api/deck/new/draw/?count=52");
  const [displayedCards, setDisplayedCards] = useState(cards);
  const handleAddCard = async () => {
    await addCard("", newData => {
      setDisplayedCards(newData);
    });
  };
  const handleResetState = () => {
    setDisplayedCards([]);
    resetState(true);
  };
  const handleClearBoard = () => {
    setDisplayedCards([]);
  };
  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={handleAddCard}>Add a playing card!</button>
        <button onClick={handleResetState}>Reset State</button>
        <button onClick={handleClearBoard}>Clear Board</button>
      </div>
      <div className="PlayingCardList-card-area">
        {displayedCards.map(cardData => (
          <PlayingCard
            key={uuidv4()}
            front={cardData.cards[0].image}
          />
        ))}
      </div>
    </div>
  );
}

export default PlayingCardList;