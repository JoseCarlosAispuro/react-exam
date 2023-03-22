import {useEffect, useState} from "react";
import {GeneralDataT} from "../../types/pokemons";
import EvolutionCard from "../EvolutionCard";

type evolutions = {
    evolution_details: []
    evolves_to: evolutions[]
    is_baby: boolean
    species: GeneralDataT
}

const Evolutions = ({id}: { id: any }) => {
    const [currentEvolution, setCurrentEvolution] = useState<evolutions | null>(null)
    const [evolutionChain, setEvolutionChain] = useState<GeneralDataT[]>([])
    const evolutionChainUrl = `https://pokeapi.co/api/v2/evolution-chain/${id}`

    const fetchData = async () => {
        const response = await fetch(evolutionChainUrl, {method: 'GET'})
        return response.json()
    }

    useEffect(() => {
        if(!currentEvolution) {
            fetchData().then((data) => {
                setEvolutionChain([data.chain.species])
                setCurrentEvolution(data.chain)
            });
        } else {
            if(currentEvolution.evolves_to.length) {
                setEvolutionChain([...evolutionChain, currentEvolution.evolves_to[0].species])
                setCurrentEvolution(currentEvolution.evolves_to[0])
            }
        }
    }, [evolutionChain]);

    return (
        <div className="evolutions">
            <p className="evolutions-title heading secondary">Evolutions</p>
            <div className="evolution-cards-container">
                {evolutionChain.map((evolution) => (
                    <EvolutionCard key={evolution.name} name={evolution.name}/>
                ))}
            </div>
        </div>
    )
}

export default Evolutions
