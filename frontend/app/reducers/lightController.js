import { GET_LIGHT_CONTROLLERS, GETTING_LIGHT_CONTROLLERS } from '../actions/lightController'

const lightController = (state = { gettingControllers: false, lightControllers: [] }, action) => {
  switch(action.type) {
    case GETTING_LIGHT_CONTROLLERS:
      return Object.assign({}, state, {
        gettingControllers: true
      })
    case GET_LIGHT_CONTROLLERS:
      return Object.assign({}, state, {
        gettingControllers: false,
        lightControllers: action.lightControllers
      })
    default:
      return state
  }
}

export default lightController
