function PokemonCard({ pokemon, isFavorite, toggleFavorite }) {
  return (
    <div className="card">

  {/* Top row */}
  <div className="card-header">
    <button onClick={() => toggleFavorite(pokemon.id)}>
      {isFavorite ? "♥️" : "🤍"}
    </button>
  </div>

  {/* Image center */}
  <div className="card-image">
    <img
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
      alt={pokemon.name}
    />
  </div>

  {/* Text */}
  <h2>{pokemon.name}</h2>
  <p>Type: {pokemon.type}</p>
  <hr className="divider" />
  <div className="stats">
  <div>
    <span className="label">HP</span>
    <p>{pokemon.hp}</p>
  </div>
  <div>
    <span className="label">ATK</span>
    <p>{pokemon.attack}</p>
  </div>
</div>

</div>
  );
}

export default PokemonCard;