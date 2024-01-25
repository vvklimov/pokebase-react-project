import SinglePokemon from "./SinglePokemon";

const PokemonList = ({ pokemon }) => {
  return (
    <section className="pokemon-list">
      {pokemon.map((singlePokemon, index) => {
        const { id, name, sprites } = singlePokemon;
        const image = sprites.front_default;
        return (
          <SinglePokemon key={id} name={name} image={image} index={index} />
        );
      })}
    </section>
  );
};
export default PokemonList;
