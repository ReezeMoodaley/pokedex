import Image from "next/image";
import PokeMain from "@/components/pokeMain";

/* To do list:

  -> Fetch data from pokeAPI 
  -> Sort Data from PokeAPI
  -> Display Data from PokeAPI

*/

export default function Home() {
  return (
    <div>
      <PokeMain />
    </div>
  );
}
