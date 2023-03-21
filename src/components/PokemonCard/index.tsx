import {Link} from "react-router-dom";
import {usePokemon} from "../../hooks/usePokemon";

const PokemonCard = ({pokemonName}: {pokemonName: string}) => {
    const {pokemonData, displayName} = usePokemon(pokemonName);

    return(
        <Link to={`/pokemon/${pokemonName}`} className="pokemon-card columns-6">
            <div className="pokemon-image-container">
                {pokemonData && (
                    <img className="pokemon-image" src={pokemonData.sprites?.other.home.front_default} alt=""/>
                )}
            </div>
            <div className="pokemon-content">
                <p className="pokemon-name body regular">{displayName}</p>
                {pokemonData && (
                    <p className="pokemon-number body x-small">#00{pokemonData.id}</p>
                )}
            </div>
        </Link>
    )
}

export default PokemonCard
