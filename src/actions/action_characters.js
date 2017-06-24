export const FETCH_CHARACTERS = 'FETCH_CHARACTERS'
export const REMOVE_CHARACTER = 'REMOVE_CHARACTER'

import character from '../data/characters'

export function fetchCharacters(){
    const characters = character
    return {
        type: FETCH_CHARACTERS,
        payload: characters
    }
}

export function removeCharacter(character){
    return{
        type: REMOVE_CHARACTER,
        payload: character
    }
}