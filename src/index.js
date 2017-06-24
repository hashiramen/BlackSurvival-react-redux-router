import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory, Link } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

//components
import App from './components/app';
import Characters from './containers/Characters'
import Items from './containers/Items'
import Builder from './containers/Builder'

//initial fetch actions
import {fetchCharacters} from './actions/action_characters'
import { fetchItems } from './actions/action_items'

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const store = createStoreWithMiddleware(reducers)
store.dispatch(fetchCharacters())
store.dispatch(fetchItems())

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <div id="container">
      <Router history={history}>
        <Route path="/" component={App}>
          <Route path="items" component={Items}></Route>
          <Route path="characters" component={Characters}></Route>
          <Route path="build(/:array)" component={Builder}></Route>
        </Route>
      </Router>
    </div>
  </Provider>
  , document.querySelector('.container'));
