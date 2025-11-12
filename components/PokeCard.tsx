"use client";
import Image from "next/image";
import BattleBackgroundLarge from "@/src/images/BattleBackgrounds/BattleBackgroundLarge.png";
import PokeBorder from "@/src/images/PokeBorder/PokeBorder8bit2.png";
import { PokemonCardData } from "@/types/PokemonCardData";

export const PokeCard = (pokemon: PokemonCardData) => {
  function capatlizeFirstletter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div className=" w-54 h-100 px-1.5 py-1 rounded-sm border grid grid-cols-1 grid-rows-3 gap-2.5 bg-[#CD0327]">
      {/* The Card itself is above  */}
      <div className="flex flex-col  h-full">
        <div className="relative flex flex-col items-center ">
          <Image
            className="w-full h-36 absolute inset-0 z-0 bg-amber-100"
            src={PokeBorder}
            alt={pokemon.name}
          />
          <Image
            className=" w-25 h-10 border translate-y-19"
            src={BattleBackgroundLarge}
            alt={pokemon.name}
          />
          <img
            className="w-25 h-25 z-10 absolute bottom-0 transform translate-y-19"
            src={pokemon.sprite}
            alt={pokemon.name}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 ">
        <div className="flex flex-col justify-center items-center w-full">
          <div
            className="flex flex-col justify-center items-center h-8 w-full bg-[#930327] rounded-4xl text-white 
  shadow-sm shadow-black/50 opacity-90"
          >
            {capatlizeFirstletter(pokemon.name)}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          {/* pokemon.types
            // We only need one map to loop through the main types array
            .map((typeObject) => typeObject.type.name)

            // No need for .flat() since the map returns an array of strings
            .join(", ") */}
          <div className=" bg-white rounded-full px-2">#{pokemon.id}</div>
        </div>
        <div className="flex flex-col  items-center w-full">
          <div className=" bg-white rounded-full px-2">#{pokemon.id}</div>
        </div>
        <div>No. Evos</div>
      </div>
      <div className="mx-auto"></div>
    </div>
  );
};
