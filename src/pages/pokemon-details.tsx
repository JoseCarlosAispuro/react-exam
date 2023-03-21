import {useParams} from 'react-router-dom'
import MobileHeader from "../components/MobileHeader";
import {usePokemon} from "../hooks/usePokemon";
import {GeneralDataT} from "../types/pokemons";

const PokemonDetails = () => {
    const params = useParams()
    const {pokemonData, displayName} = usePokemon(params.pokemonName)

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
            <div className="pokemon-content">
                <p className="pokemon-name heading primary">{displayName}</p>
                <p className="pokemon-number body regular">#00{pokemonData?.id}</p>
                <div className="types">
                    {pokemonData?.types.map((type: {slot: number, type: GeneralDataT}) => (
                        <span key={type.type.name} className={`type-tag ${type.type.name}`}>{type.type.name}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PokemonDetails
