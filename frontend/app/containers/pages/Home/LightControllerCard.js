import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import PageWrapper from '../../PageWrapper'

const styles = {
  card: {
    maxWidth: 275,
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  }
};

class LightControllerCard extends Component {
  render() {
    const { classes } = this.props;

    return this.props.lightControllers.map((lightController) => (
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            {lightController.hueType}
          </Typography>
          <Typography variant="headline" component="h2">
            {lightController.name}
          </Typography>
        </CardContent>
      </Card>
    ))
  }
}

export default withStyles(styles)(LightControllerCard);