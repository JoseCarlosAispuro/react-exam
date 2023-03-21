import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const PokemonListItem = ({pokemonName}: {pokemonName: string}) => {
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

    const getPokemonDisplayName = (name: string) => name?.replace('-', ' ')

    return(
        <Link to={`/pokemon/${pokemonName}`} className="pokemon-list-item">
            <div className="pokemon-image-container">
                {pokemonDetails && (
                    <img className="pokemon-image" src={pokemonDetails.sprites?.other.home.front_default} alt=""/>
                )}
            </div>
            <div className="pokemon-content">
                <p className="pokemon-name body regular">{getPokemonDisplayName(pokemonDetails?.name)}</p>
                {pokemonDetails && (
                    <p className="pokemon-number body regular">#00{pokemonDetails.id}</p>
                )}
            </div>
        </Link>
    )
}

export default PokemonListItem
