export const FETCH_ITEMS = 'FETCH_ITEMS'


//items data
import ingredient from '../data/ingredients'
import blade from '../data/blades'

export function fetchItems() {
    const ingredients = ingredient
    return{
        type: FETCH_ITEMS,
        payload: [ ...ingredients, ...blade ]
    }
}

