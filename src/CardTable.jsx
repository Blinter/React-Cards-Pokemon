import React from "react";
import PlayingCardList from "./PlayingCardList";
import PokeDex from "./PokeDex";
import "./CardTable.css";

function CardTable() {
  return (
    <div className="CardTable">
      <header>
        <h1 className="CardTable-heading">React Custom Hooks</h1>
      </header>
      <main>
        <PlayingCardList />
        <PokeDex />
      </main>
    </div>
  );
}

export default CardTable;
