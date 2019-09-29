import React, { Component } from 'react';
import { connect } from 'react-redux'

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import { getLightControllers } from '../../../actions/lightController'
import { getLights } from '../../../actions/bridge/lights'

import PageWrapper from '../../PageWrapper'

import LightControllerCards from './LightControllerCard'



class Home extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getLightControllers)
    dispatch(getLights)
  }

  render() {
    let lightControllers = (<LightControllerCards lightControllers={this.props.lightControllers} lights={this.props.lights} />)

    if (this.props.gettingControllers || this.props.gettingLights) {
      lightControllers = (<CircularProgress />)
    }
    return (
      <PageWrapper>
        <Typography variant="h4">
          All Light Controllers
        </Typography>
        {lightControllers}
      </PageWrapper>
    );
  }
}

function mapStateToProps (state) {
  return ({
    lightControllers: state.reducers.lightController.lightControllers,
    gettingControllers: state.reducers.lightController.gettingControllers,
    gettingLights: state.reducers.lights.gettingLights,
    lights: state.reducers.lights.lights
  })
}

export default connect(
  mapStateToProps
)(Home)