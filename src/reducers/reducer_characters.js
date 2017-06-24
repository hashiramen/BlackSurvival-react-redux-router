import { FETCH_CHARACTERS, REMOVE_CHARACTER } from '../actions/action_characters' 

export default function characters(state = [], action){
    switch(action.type)
    {
        case FETCH_CHARACTERS:
            return [...action.payload]
        case REMOVE_CHARACTER:
            return [...state.filter((character) => character.id !== action.payload)]
    }

    return state
}