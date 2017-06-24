export const ADD_HERO = 'ADD_HERO'
export const ADD_ITEM = 'ADD_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'

export function addHero(hero){
    return {
        type : ADD_HERO,
        payload : hero
    }
}

export function addItem(item) {
    return {
        type: ADD_ITEM,
        payload: item
    }
}

export function removeItem(index) {
    return {
        type: REMOVE_ITEM,
        payload: index
    }
}