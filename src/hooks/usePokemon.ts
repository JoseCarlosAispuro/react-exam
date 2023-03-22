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

    const getDisplayNumber = (id: number) => {
        if(id) {
            switch (id.toString().length) {
                case 1: {
                    return `#00${id}`
                }
                case 2: {
                    return `#0${id}`
                }
                default: {
                    return `#${id}`
                }
            }
        }
    }

    return {pokemonData, displayName, getDisplayNumber}

}
