import React, { useState } from "react";
import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";
import "./PokeDex.css";
import { useAxios } from './hooks/useAxios';
import { v4 as uuidv4 } from 'uuid';

function PokeDex() {
  const [pokemonData, addPokemon, resetState] = useAxios(
    'https://pokeapi.co/api/v2/pokemon/');
  const [displayedPokemon, setDisplayedPokemon] = useState([]);
  const handleAddPokemon = async name => {
    await addPokemon(`${name}/`, (newData) => {
      setDisplayedPokemon(newData);
    });
  }
  const handleResetState = () => {
    setDisplayedPokemon([]);
    resetState(true);
  };
  const handleClearBoard = () => {
    setDisplayedPokemon([]);
  };
  return (
    <div className="PokeDex">
      <div className="PokeDex-buttons">
        <h3>Please select your pokemon:</h3>
        <PokemonSelect
          add={handleAddPokemon}
        />
        <button onClick={handleResetState}>Reset State</button>
        <button onClick={handleClearBoard}>Clear Board</button>
      </div>
      <div className="PokeDex-card-area">
        {displayedPokemon.map(cardData => {
          const frontSprite = cardData.sprites?.front_default || '';
          const backSprite = cardData.sprites?.back_default || '';
          return (
            <PokemonCard
              key={uuidv4()}
              front={frontSprite}
              back={backSprite}
              name={cardData.name || ''}
              stats={cardData.stats ?
                cardData.stats.map(stat => ({
                  value: stat.base_stat,
                  name: stat.stat.name
                })) : []}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PokeDex;