import {useEffect, useState} from "react";
import {getResultChunks} from "../utils/dataFilter";
import {GeneralDataT} from "../types/pokemons";

export const useSearch = (searchableData: GeneralDataT[]) => {
    const [searchString, setSearchString] = useState<string>('')
    const [searchResults, setSearchResults]  = useState<GeneralDataT[]>([]);
    const [searchIsActive, setSearchIsActive] = useState<boolean>(false)

    useEffect(() => {
        const search = searchableData?.filter(data => data.name.includes(searchString));
        setSearchResults(getResultChunks(search, 0, 20))
    }, [searchString]);

    const resetSearch = () => {
        setSearchString('')
        setSearchIsActive(false)
        setSearchResults([])
    }

    return {searchString, setSearchString, searchResults, searchIsActive, setSearchIsActive, resetSearch};
}
