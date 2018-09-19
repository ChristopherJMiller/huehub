export const GET_LIGHT_CONTROLLERS = 'GET_LIGHT_CONTROLLERS'
export const GETTING_LIGHT_CONTROLLERS = 'GETTING_LIGHT_CONTROLLERS'


function updateLightControllers(lightControllers) {
  return {
    type: GET_LIGHT_CONTROLLERS,
    lightControllers
  }
}

function gettingLightControllers() {
  return {
    type: GETTING_LIGHT_CONTROLLERS
  }
}

export function getLightControllers(dispatch) {
  dispatch(gettingLightControllers())
  return fetch(`http://localhost:5000/light_controller.json`)
      .then(response => response.json())
      .then(json => dispatch(updateLightControllers(json.light_controllers)))
}