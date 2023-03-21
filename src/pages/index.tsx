import SearchHeader from "../components/SearchHeader";
import PokemonCard from "../components/PokemonCard";
import {useEffect, useState} from "react"
import {GeneralDataT} from "../types/pokemons";
import {useScroll} from "../hooks/useScroll";
import {useSearch} from "../hooks/useSearch";
import {getResultChunks} from "../utils/dataFilter";
import SearchResults from "../components/SearchResults";

const Home = () => {
    const [data, setData] = useState<GeneralDataT[]>([])
    const [visibleData, setVisibleData] = useState<GeneralDataT[]>([])
    const {scrollPosition} = useScroll()
    const {
        searchString,
        setSearchString,
        searchResults,
        searchIsActive,
        setSearchIsActive,
        resetSearch
    } = useSearch(data)

    const fetchPokemons = async () => {
        const url = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
        const response = await fetch(url, {method: 'GET'})
        return response.json()
    }

    useEffect(() => {
        fetchPokemons().then((data) => {
            setData(data.results)
            setVisibleData(getResultChunks(data.results, 0, 20))
        });
    }, [])

    useEffect(() => {
        if(!searchIsActive) {
            const documentHeight = document.documentElement.scrollHeight
            const windowHeight = window.innerHeight
            if ((scrollPosition + windowHeight + 50) > documentHeight) {
                const nextChunk = getResultChunks(data, visibleData.length, visibleData.length + 20)
                const newVisiblePokemons = visibleData.concat(nextChunk)
                setVisibleData(newVisiblePokemons)
            }
        }
    }, [scrollPosition])

    return (
        <div className="home">
            <SearchHeader
                searchString={searchString}
                onSearchChange={event => setSearchString(event.target.value)}
                searchIsActive={searchIsActive}
                onSearchFocus={() => setSearchIsActive(true)}
                resetSearch={resetSearch}
            />
            <div className={`pokemon-cards-container grid container ${searchIsActive ? 'hide' : ''}`}>
                {visibleData.map((data) => (
                    <PokemonCard
                        key={data.name}
                        pokemonName={data.name}
                    />
                ))}
            </div>
            {searchIsActive && (
                <SearchResults
                    searchString={searchString}
                    searchResults={searchResults}/>
            )}
        </div>
    )
}

export default Home
