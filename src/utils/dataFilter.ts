import {GeneralDataT} from "../types/pokemons";

export const getResultChunks = (data: GeneralDataT[], offset: number, targetElement: number) => data?.slice(offset, targetElement);
