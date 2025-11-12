import Image from "next/image";
import { AllPokemonQueryResult } from "@/types/AllPokemonQueryResult";
import { PokemonType, PokemonTypeObject } from "@/types/PokemonTypes";
import { PokemonCardData } from "@/types/PokemonCardData";
import { PokeCard } from "@/components/PokeCard";

/* To do list:

  Adjust the Fetch API request, we need to pull the types information as well 

*/

/* Need to get the type information */

async function getAllPokemon(): Promise<PokemonCardData[]> {
  try {
    /* Initial fetching of the pokemon */
    const pokeURL = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";
    const res = await fetch(pokeURL);

    const pokeData: { results: AllPokemonQueryResult[] } = await res.json();
    const pokeObjects = pokeData.results;

    /* Setup of the array of promises */
    const pokePromises = pokeObjects.map((p) => {
      return fetch(p.url).then((res) => res.json());
    });

    /* Execute all the promises concurrently */
    const pokeDetails = await Promise.all(pokePromises);

    /* PokeDetails data Transform */
    const finalPokeData: PokemonCardData[] = pokeDetails.map(
      (detail, index) => ({
        name: pokeDetails[index].name,
        id: pokeDetails[index].id,
        sprite: detail.sprites.front_default,
        types: detail.types.map((pokeType: PokemonTypeObject) => pokeType.type),
      })
    );

    console.log(finalPokeData);
    return finalPokeData;
  } catch (e) {
    console.error("Failed to fetch Pokemon data", e);
    throw e;
  }
}

export default async function Home() {
  const pokemonData = await getAllPokemon();

  return (
    <div>
      <div className=" w-full h-full flex flex-wrap gap-10">
        {pokemonData.map((pokemon) => (
          <PokeCard
            key={pokemon.id}
            name={pokemon.name}
            id={pokemon.id}
            sprite={pokemon.sprite}
            types={pokemon.types}
          />
        ))}
      </div>
    </div>
  );
}
