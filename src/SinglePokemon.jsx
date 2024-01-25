import { useGlobalContext } from "./globalContext";
const SinglePokemon = ({ name, image, index }) => {
  const { setActiveCardIndex, setShowCard } = useGlobalContext();
  return (
    <div
      className="single-pokemon"
      onClick={() => {
        setActiveCardIndex(index);
        setShowCard(true);
      }}
    >
      <img className="img" src={image} alt={name} />
      <h4>{name}</h4>
    </div>
  );
};
export default SinglePokemon;
