import {Link} from "react-router-dom";
import {usePokemon} from "../../hooks/usePokemon";

const PokemonListItem = ({pokemonName}: {pokemonName: string}) => {
    const {pokemonData, displayName, getDisplayNumber} = usePokemon(pokemonName);

    return(
        <Link to={`/pokemon/${pokemonName}`} className="pokemon-list-item">
            <div className="pokemon-image-container">
                {pokemonData && (
                    <img className="pokemon-image" src={pokemonData.sprites?.other.home.front_default} alt=""/>
                )}
            </div>
            <div className="pokemon-content">
                <p className="pokemon-name body regular">{displayName}</p>
                {pokemonData && (
                    <p className="pokemon-number body regular">{getDisplayNumber(pokemonData.id)}</p>
                )}
            </div>
        </Link>
    )
}

export default PokemonListItem
