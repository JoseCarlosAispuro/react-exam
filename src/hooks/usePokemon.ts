import {useEffect, useState} from "react";

export const usePokemon = (name: string | undefined) => {
    const [pokemonData, setPokemonData] = useState<any>()
    const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'
    const pokemonUrl = `${baseUrl}${name}`;
    const displayName = name?.replace('-', ' ')

    const fetchData = async () => {
        const response = await fetch(pokemonUrl, {method: 'GET'})
        return response.json()
    }

    useEffect(() => {
        fetchData().then((data) => {
            setPokemonData(data)
        });
    }, [])

    return {pokemonData, displayName}

}
