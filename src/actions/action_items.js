export const FETCH_ITEMS = 'FETCH_ITEMS'


//items data
import ingredient from '../data/ingredients'
import blade from '../data/blades'
import blunt from '../data/blunts'
import thrown from '../data/throwns'
import gun from '../data/guns'
import bow from '../data/bows'
import hand from '../data/hands'
import trap from '../data/traps'
import area from '../data/areas'
import extra from '../data/extras'
import stab from '../data/stabs'

export function fetchItems() {
    const ingredients = ingredient
    return{
        type: FETCH_ITEMS,
        payload: [ ...ingredients, ...blade, ...blunt, ...thrown, ...gun, ...bow, ...hand, ...trap, ...area, ...extra, ...stab ]
    }
}

