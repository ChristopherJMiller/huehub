import { combineReducers } from 'redux'

import lightController from './lightController'
import lights from './lights'

export default combineReducers({
  lightController,
  lights
})