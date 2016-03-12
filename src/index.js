import React from 'react';
import { render } from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './stores';
import App from './containers/App';

import SearchContainer from  './containers/SearchContainer';

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={App}>
        <Route path="/search" component={SearchContainer}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
