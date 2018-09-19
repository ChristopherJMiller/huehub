import React, { Component } from 'react';
import { connect } from 'react-redux'

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import { getLightControllers } from '../../../actions/lightController'

import PageWrapper from '../../PageWrapper'

import LightControllerCards from './LightControllerCard'



class Home extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getLightControllers)
  }

  render() {
    let content = (<LightControllerCards lightControllers={this.props.lightControllers} />)

    if (this.props.gettingControllers) {
      content = (<CircularProgress />)
    }
    return (
      <PageWrapper>
        <Typography variant="display1" gutterBottom>
          All Light Controllers
        </Typography>
        {content}
      </PageWrapper>
    );
  }
}

function mapStateToProps (state) {
  return ({
    lightControllers: state.reducers.lightControllers,
    gettingControllers: state.reducers.gettingControllers
  })
}

export default connect(
  mapStateToProps
)(Home)