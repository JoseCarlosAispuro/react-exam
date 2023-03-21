export type PokemonT = {
    abilities: AbilitiesT[]
    base_experience: number
    forms: GeneralDataT[]
    game_indices: GameIndicesT[]
    height: number
    held_items: []
    id: number
    is_default: boolean
    location_area_encounters: string
    moves: MovesT[]
    name: string
    order: 1
    past_types: []
    species: GeneralDataT

}

type MovesT = {
    move: GeneralDataT
    version_group_details: VersionGroupDetails[]
}

type VersionGroupDetails = {
    level_learned_at: 0
    move_learn_method: GeneralDataT
    version_group: GeneralDataT
}

type GameIndicesT = {
    game_index: number
    version: GeneralDataT
}

export type GeneralDataT = {
    name: string
    url: string
}

type AbilitiesT = {
    ability: {
        name: string
        url: string
    }
}
