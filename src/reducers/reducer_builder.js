import { ADD_HERO, ADD_ITEM, REMOVE_ITEM } from '../actions/action_builder'

export default function builder(state = { hero : { }, build : [] }, action) {
    switch(action.type){
        case ADD_HERO:
            return { hero : { ...action.payload }, build : [ ...state.build ],  }
        case ADD_ITEM:
            console.log({...action.payload})
            return { hero : { ...state.hero }, build : [ ...state.build, action.payload ]}
        case REMOVE_ITEM:
            return { hero : { ...state.hero }, build : [ ...state.build.slice(0, action.payload), 
                                                            ...state.build.slice(action.payload + 1) ] }
    }

    return state
}