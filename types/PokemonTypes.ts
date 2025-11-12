/* Structure defining the nested type object */

export type PokemonType = {
  name: string;
  url: string;
};

/* Structure defining the overall type object (multiple of the above may be nested in the below) */

export type PokemonTypeObject = {
  slot: number;
  type: PokemonType[];
};
