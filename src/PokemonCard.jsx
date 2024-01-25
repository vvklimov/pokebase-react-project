import { useGlobalContext } from "./globalContext";

const PokemonCard = ({ pokemon }) => {
  const { activeCardIndex, setShowCard, showCard } = useGlobalContext();
  const { front_default: image } = pokemon[activeCardIndex].sprites;
  const { name, types, abilities, stats } = pokemon[activeCardIndex];
  return (
    <section className={`pokemon-card ${showCard ? "pokemon-card-show" : ""}`}>
      <div className="card-container">
        <button
          onClick={() => {
            setShowCard(false);
          }}
          className="btn"
        >
          close
        </button>
        <div className="card-content">
          <div className="left-col">
            <div className="desc-header">
              <img className="img" src={image} alt={name} />
              <h4>{name}</h4>
            </div>
            <div className="description">
              <p>
                Type:
                {types.map((item, index) => {
                  return (
                    <span key={index}>
                      {" "}
                      {item.type.name}
                      {index === types.length - 1 ? "" : ", "}
                    </span>
                  );
                })}
              </p>
              <p>
                Abilities:{" "}
                {abilities.map((item, index) => {
                  return (
                    <span key={index}>
                      {item.ability.name}
                      {index === abilities.length - 1 ? "" : ", "}
                    </span>
                  );
                })}
              </p>
            </div>
          </div>
          <div className="right-col">
            <h3>STATS</h3>
            <div className="description">
              {stats.map((item) => {
                const { base_stat: value, stat } = item;
                const { name } = stat;
                return (
                  <p key={name}>
                    {name}: <span>{value}</span>
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PokemonCard;
