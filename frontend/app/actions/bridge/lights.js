export const GET_LIGHTS = 'GET_LIGHTS'
export const GETTING_LIGHTS = 'GETTING_LIGHTS'

import { HUE_URL } from '../../constants'

function updateLights(lights) {
  return {
    type: GET_LIGHTS,
    lights
  }
}

function gettingLights() {
  return {
    type: GETTING_LIGHTS
  }
}

export function getLights(dispatch) {
  dispatch(gettingLights())
  return fetch(`${HUE_URL}/lights`)
      .then(response => response.json())
      .then(json => dispatch(updateLights(json)))
}