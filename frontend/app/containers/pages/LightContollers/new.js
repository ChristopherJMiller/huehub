import React, { Component } from 'react';
import { connect } from 'react-redux'

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import { getLights } from '../../../actions/bridge/lights'

import PageWrapper from '../../PageWrapper'


class NewLightContoller extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getLights)
  }

  render() {
    return (
      <PageWrapper>
        <Typography variant="display1" gutterBottom>
          New Light Contoller
        </Typography>
      </PageWrapper>
    );
  }
}

function mapStateToProps (state) {
  return ({
    gettingLights: state.reducers.lights.gettingLights,
    lights: state.reducers.lights.lights
  })
}

export default connect(
  mapStateToProps
)(NewLightContoller)