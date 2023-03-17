import SearchHeader from "../components/SearchHeader";
import PokemonCard from "../components/PokemonCard";
import {useEffect, useState} from "react"

type PokemonResponseT = {
    name: string,
    url: string
}

const Home = () => {
    const [pokemons, setPokemons] = useState<PokemonResponseT[]>([{name: '', url:''}])
    const [visiblePokemons, setVisiblePokemons] = useState<PokemonResponseT[]>([{name: '', url:''}])
    const [searchString, setSearchString] = useState<string>('')
    const [isActive, setIsActive] = useState<boolean>(false)
    const [searchResults, setSearchResults] = useState<PokemonResponseT[]>([{name: '', url:''}])

    const fetchPokemons = async () => {
        const url = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
        const response = await fetch(url, {method: 'GET'})
        return response.json()
    }

    useEffect(() => {
        fetchPokemons().then((data) => {
            setPokemons(data.results)
            setVisiblePokemons(data.results.slice(0, 20))
        });
    }, [])

    useEffect(() => {
        const search = pokemons.filter(pokemon => pokemon.name.includes(searchString)).slice(0, 20);
        setSearchResults(search)
    }, [searchString])

    const resetSearch = () => {
        setSearchString('')
        setIsActive(false)
        setSearchResults([{name: '', url: ''}])
    }

    return (
        <div className="home">
            <SearchHeader
                searchValue={searchString}
                onSearchChange={event => setSearchString(event.target.value)}
                searchIsActive={isActive}
                onSearchFocus={() => setIsActive(true)}
                resetSearch={resetSearch}
            />
            {!isActive && (
                <div className="pokemon-cards-container grid container">
                    {visiblePokemons.map((pokemon) => (
                        <PokemonCard
                            key={pokemon.name}
                            pokemonName={pokemon.name}
                        />
                    ))}
                </div>
            )}
            {isActive && (
                <div className="pokemon-cards-container grid container">
                    {searchResults.map((pokemon) => (
                        <PokemonCard
                            key={pokemon.name}
                            pokemonName={pokemon.name}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Home
