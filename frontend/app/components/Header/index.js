import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core/'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}))

export default function Header(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            HueHub
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <div>
        { props.children }
      </div>
    </div>
  );
}