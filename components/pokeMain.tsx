"use client";

import { useState, useEffect } from "react";

type Pokemon = {
  name: string;
  url: string;
};

function PokeMain() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllPokemon = async () => {
      try {
        const pokeURL = "https://pokeapi.co/api/v2/pokemon?limit=2000&offset=0";

        const res = await fetch(pokeURL);

        if (!res.ok) {
          throw new Error("failed to fetch pokemon Data");
        }

        const pokeData: { results: Pokemon[] } = await res.json();
        setPokemon(pokeData.results);
      } catch (e) {
        console.error("Error: ", e);
      } finally {
        setLoading(false);
      }
    };

    getAllPokemon();
  }, []);

  /* The below function controls the loading functionality:  */
  if (loading) {
    return <div>Loading Pokemon....</div>;
  }

  return (
    <div>
      <h1>Pokemon:</h1>
      {pokemon.map((p) => {
        return <h2 key={p.url}>{p.name}</h2>;
      })}
    </div>
  );
}
export default PokeMain;
