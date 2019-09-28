import React, { Component } from 'react';
import { connect } from 'react-redux'

import Typography from '@material-ui/core/Typography';

import TextField from '@material-ui/core/TextField';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import CircularProgress from '@material-ui/core/CircularProgress';

import { withStyles } from '@material-ui/core/styles';

import { getLights } from '../../../actions/bridge/lights'

import PageWrapper from '../../PageWrapper'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  progress: {
    display: 'flex',
    justifyContent: 'center'
  }
});

class NewLightContoller extends Component {

  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getLights)
    this.setState({
      name: '',
      hueType: 0,
      hueID: -1
    });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;


    let component = null;
    if (this.state != null) {
      if (!this.props.gettingLights) {
        component = this.props.lights.map((light) => (
          <MenuItem value={light.id}>{light}</MenuItem>
        ))
      }
    }
    
  
    let content = (
      <div className={classes.progress}>
        <CircularProgress />
      </div>
    )

    if (this.state != null && !this.props.gettingLights) {
      content = (
        <div>
          <Typography variant="display1" gutterBottom>
            New Light Contoller
          </Typography>
  
          <form className={classes.root} autoComplete="off">
            <FormControl className={classes.formControl}>
              <TextField
                required
                id="standard-required"
                label="Light Controller Name"
                value={this.state.name}
                onChange={this.handleChange}
                inputProps={{
                  name: 'name',
                }}
                margin="normal"
              />
            </FormControl>
  
  
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="hue-type">Hue Type</InputLabel>
              <Select
                value={this.state.hueType}
                onChange={this.handleChange}
                inputProps={{
                  name: 'hueType',
                  id: 'hueType-id',
                }}
                autoWidth
              >
                <MenuItem value={0}>Light Mimic</MenuItem>
                <MenuItem value={1}>Light Pattern</MenuItem>
              </Select>
            </FormControl>
  
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="hue-id">Hue ID</InputLabel>
              <Select
                value={this.state.hueType}
                onChange={this.handleChange}
                inputProps={{
                  name: 'hueID',
                  id: 'hueID-id',
                }}
                autoWidth
              >
                <MenuItem value={-1}>None</MenuItem>
                
              </Select>
            </FormControl>
          </form>
        </div>
      )
    }

    return (
      <PageWrapper>
        {content}
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

export default
  connect(
    mapStateToProps
  )(withStyles(styles)(NewLightContoller))