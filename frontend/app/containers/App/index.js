import React, { Component } from 'react';
import { Router, Route } from 'react-router'
import { Provider } from 'react-redux'

import initialState from '../../store/initialState'
import configureStore from '../../store/configureStore'

const store = configureStore(initialState)
const history = require("history").createBrowserHistory()

import Home from '../pages/Home'
import NewLightController from '../pages/LightContollers/new'


class App extends Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
            <Route exact path='/' component={Home} />
            <Route path='/light_contollers/new' component={NewLightController} />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App