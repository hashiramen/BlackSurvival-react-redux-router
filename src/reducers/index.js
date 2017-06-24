import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

//reducers
import characters from './reducer_characters'
import builder from './reducer_builder'
import items from './reducer_items'

const rootReducer = combineReducers({
  builder : builder,
  characters : characters,
  items: items,
  routing: routerReducer
});

export default rootReducer;
