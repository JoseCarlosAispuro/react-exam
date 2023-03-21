import PokemonListItem from "../PokemonListItem";
import {GeneralDataT} from "../../types/pokemons";
import SearchResultsState from "../SearchResultsState";

const SearchResults = ({searchString, searchResults}: {searchString: string, searchResults: GeneralDataT[]}) => {
    return (
        <div className="search-results-container">
            {searchString === '' && (
                <SearchResultsState
                    image="/images/magnify-icon-big.svg"
                    heading="Search"
                    copy="Search pokemons by name"
                />
            )}

            {searchResults.length === 0 && searchString !== '' && (
                <SearchResultsState
                    image=""
                    heading="WOOPS!!"
                    copy="We don't have any results for that name try with an other one"
                />
            )}

            {searchResults.length > 0 && searchString !== '' && (
                <div className="search-results grid">
                    {searchResults.map((data) => (
                        <PokemonListItem
                            key={data.name}
                            pokemonName={data.name}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default SearchResults
