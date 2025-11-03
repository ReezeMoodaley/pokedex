"use client";

import { PokemonCardData } from "@/types/PokemonCardData";

export const PokeCard = (pokemon: PokemonCardData) => {
  console.log(pokemon);

  return (
    <div className=" w-54 h-100 px-1.5 py-1 rounded-sm border grid grid-cols-1 grid-rows-3 gap-2.5">
      {/* container div  */}
      <div className="mx-auto">
        <img className="w-25" src={pokemon.sprite} alt={pokemon.name} />
      </div>
      <div className="mx-auto">{pokemon.name}</div>
      <div className="mx-auto">{pokemon.id}</div>
    </div>
  );
};
