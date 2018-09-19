import React, { Component } from 'react';
import { Router, Route } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import { Provider } from 'react-redux'

import initialState from '../../store/initialState'
import configureStore from '../../store/configureStore'
import routes from '../../routes'

const store = configureStore(initialState)
const history = createBrowserHistory()

import Home from '../pages/Home'

class App extends Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route exact path='/' component={Home} />
        </Router>
      </Provider>
    )
  }
}

export default App