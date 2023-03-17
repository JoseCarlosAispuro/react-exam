import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const PokemonCard = ({pokemonName}: {pokemonName: string}) => {
    const [pokemonDetails, setPokemonDetails] = useState<any>()
    const fetchPokemon = async () => {
        const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        const response = await fetch(pokemonUrl, {method: 'GET'})
        return response.json()
    }
    useEffect(() => {
        fetchPokemon().then((data) => {
            setPokemonDetails(data)
        });
    }, [])
    return(
        <Link to={`/pokemon/${pokemonName}`} className="pokemon-card columns-6">
            <div className="pokemon-image-container">
                {pokemonDetails && (
                    <img className="pokemon-image" src={pokemonDetails.sprites?.other.home.front_default} alt=""/>
                )}
            </div>
            <div className="pokemon-content">
                <p className="pokemon-name body regular">{pokemonDetails?.name}</p>
                {pokemonDetails && (
                    <p className="pokemon-number body x-small">#00{pokemonDetails.id}</p>
                )}
            </div>
        </Link>
    )
}

export default PokemonCard
