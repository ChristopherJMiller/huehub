import React from 'react';
import Header from '../../components/Header'

import withWidth from '@material-ui/core/withWidth';

const components = {
  sm: {
    width: '100%'
  },
  md: {
    width: '80%',
    marginLeft: '10%',
    marginRight: '10%'
  },
  lg: {
    width: '60%',
    marginLeft: '20%',
    marginRight: '20%'
  },
  xl: {
    width: '60%',
    marginLeft: '20%',
    marginRight: '20%'
  }
};

function PageWrapper(props) {
  const { width, children } = props;
  const style = components[width];

  return (
    <div>
      <Header>
        <div style={style}>{ children }</div>
      </Header>
    </div>
  )
}

export default withWidth()(PageWrapper)