import {useParams} from 'react-router-dom'
import MobileHeader from "../components/MobileHeader";
import {usePokemon} from "../hooks/usePokemon";
import {GeneralDataT} from "../types/pokemons";
import Evolutions from "../components/Evolutions";

const PokemonDetails = () => {
    const params = useParams()
    const {pokemonData, displayName, getDisplayNumber} = usePokemon(params.pokemonName)

    return (
        <div className="pokemon-details">
            <MobileHeader prevLink="/" nextLink="" header={displayName ?? ''}/>
            <div className="pokemon-header">
                <div className="pokemon-background-image">
                    {pokemonData && (
                        <img className="pokemon-image" src={pokemonData.sprites?.other.home.front_default} alt=""/>
                    )}
                    <div className="pokemon-background-image-overlay" />
                </div>
                <div className="pokemon-image-container">
                    {pokemonData && (
                        <img className="pokemon-image" src={pokemonData.sprites?.other.home.front_default} alt=""/>
                    )}
                </div>
            </div>
            <div className="pokemon-content grid">
                <p className="pokemon-name heading primary">{displayName}</p>
                <p className="pokemon-number body regular">{getDisplayNumber(pokemonData?.id)}</p>
                <div className="types">
                    {pokemonData?.types.map((type: {slot: number, type: GeneralDataT}) => (
                        <span key={type.type.name} className={`type-tag ${type.type.name}`}>{type.type.name}</span>
                    ))}
                </div>
                <div className="description body small">
                    It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.
                </div>
                {pokemonData?.weight && pokemonData?.height && (
                    <div className="specs">
                        {pokemonData.weight && (
                            <div className="spec-container">
                                <img src="/images/weight-icon.svg" alt="Weight Icon"/>
                                <div className="content">
                                    <p className="value">{`${pokemonData.weight} lbs`}</p>
                                    <p className="spec-name">Weight</p>
                                </div>
                            </div>
                        )}
                        {pokemonData.height && (
                            <div className="spec-container">
                                <img src="/images/height-icon.svg" alt="Height Icon"/>
                                <div className="content">
                                    <p className="value">{`${pokemonData.height} ft`}</p>
                                    <p className="spec-name">Height</p>
                                </div>
                            </div>
                        )}
                    </div>
                )}
                {pokemonData?.id && (
                    <Evolutions
                        id={pokemonData.id}
                    />
                )}
            </div>
        </div>
    )
}

export default PokemonDetails
