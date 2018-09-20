import { GET_LIGHTS, GETTING_LIGHTS } from '../actions/bridge/lights'

const lights = (state = { gettingLights: false, lights: [] }, action) => {
  switch(action.type) {
    case GETTING_LIGHTS:
      return Object.assign({}, state, {
        gettingLights: true
      })
    case GET_LIGHTS:
      return Object.assign({}, state, {
        gettingLights: false,
        lights: action.lights
      })
    default:
      return state
  }
}

export default lights
