"use client";
import Image from "next/image";
import BattleBackgroundLarge from "@/src/images/BattleBackgrounds/BattleBackgroundLarge.png";
import { PokemonCardData } from "@/types/PokemonCardData";

export const PokeCard = (pokemon: PokemonCardData) => {
  console.log(pokemon);

  function capatlizeFirstletter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div className=" w-54 h-100 px-1.5 py-1 rounded-sm border grid grid-cols-1 grid-rows-3 gap-2.5">
      {/* The Card itself is above  */}
      <div className="flex flex-col justify-end h-full">
        <div className="relative flex flex-col items-center">
          <Image
            className=" w-25 h-10 border"
            src={BattleBackgroundLarge}
            alt={pokemon.name}
          />
          <img
            className="w-25 h-25  z-10 absolute bottom-0 transform -translate-y-0"
            src={pokemon.sprite}
            alt={pokemon.name}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 ">
        <div className="flex flex-col justify-center items-center w-full">
          {capatlizeFirstletter(pokemon.name)}
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          Test 2
        </div>
        <div className="flex flex-col  items-center w-full">
          <div className=" bg-white rounded-full px-2">#{pokemon.id}</div>
        </div>
        <div>Test 3</div>
      </div>
      <div className="mx-auto">{pokemon.id}</div>
    </div>
  );
};
