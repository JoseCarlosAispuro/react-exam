import {usePokemon} from "../../hooks/usePokemon";

const EvolutionCard = ({name}: { name: string }) => {
    const {pokemonData, displayName, getDisplayNumber} = usePokemon(name)
    return (
        <div className="evolution-card">
            <div className="pokemon-image-container">
                {pokemonData && (
                    <img className="pokemon-image" src={pokemonData.sprites?.other.home.front_default} alt=""/>
                )}
            </div>
            <div className="pokemon-content">
                <p className="pokemon-name body small">{displayName}</p>
                {pokemonData && (
                    <p className="pokemon-number body x-small">{getDisplayNumber(pokemonData.id)}</p>
                )}
            </div>
        </div>
    )
}

export default EvolutionCard
