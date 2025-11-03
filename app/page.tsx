import Image from "next/image";

/* To do list:

  -> Fetch data from pokeAPI 
  -> Sort Data from PokeAPI
  -> Display Data from PokeAPI

*/

type PokemonQueryRes = {
  name: string;
  url: string;
};

type PokemonCardData = {
  name: string;
  id: string;
  sprite: string;
};

async function getAllPokemon(): Promise<PokemonCardData[]> {
  try {
    /* Initial fetching of the pokemon */
    const pokeURL = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";
    const res = await fetch(pokeURL);

    const pokeData: { results: PokemonQueryRes[] } = await res.json();
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
      <h2>Pokemon List</h2>
    </div>
  );
}
