import { PokemonTypeObject } from "./PokemonTypes";

export type PokemonCardData = {
  name: string;
  id: string;
  sprite: string;
  types: PokemonTypeObject[];
};
