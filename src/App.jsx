import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import PokemonList from "./PokemonList";
import { useState } from "react";
import Pagination from "./Pagination";
import PokemonCard from "./PokemonCard";
import Loading from "./Loading";
const baseUrl = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20";
const pokemonListQuery = (searchUrl) => {
  return {
    queryKey: ["pokemonList", searchUrl],
    queryFn: async () => {
      const response = await axios.get(`${searchUrl}`);
      const { next, previous, results } = response.data;
      const pokemon = await Promise.all(
        results.map(async (item) => {
          const resp = await axios.get(item.url);
          return resp.data;
        })
      );
      return { next, previous, pokemon };
    },
  };
};

function App() {
  const [searchUrl, setSearchUrl] = useState(baseUrl);
  const data = useQuery(pokemonListQuery(searchUrl));
  if (data.isLoading) return <Loading />;
  if (data.isError) {
    return <div>{JSON.stringify(pokemonListQuery.error)}</div>;
  }
  const { pokemon, next: nextPageLink, previous: prevPageLink } = data.data;
  return (
    <main>
      <header className="header">
        <h2>PokeBase</h2>
      </header>
      <PokemonList pokemon={pokemon} />
      <Pagination
        setSearchUrl={setSearchUrl}
        nextPageLink={nextPageLink}
        prevPageLink={prevPageLink}
      />
      <PokemonCard pokemon={pokemon} />
    </main>
  );
}

export default App;
