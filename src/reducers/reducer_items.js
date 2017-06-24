import { FETCH_ITEMS } from '../actions/action_items'

export default function items(state = [], action) {
    switch(action.type) {
        case FETCH_ITEMS:
            return [ ...action.payload ]
    }

    return state
}