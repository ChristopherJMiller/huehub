import React from 'react';
import Header from '../../components/Header'

import {Container} from '@material-ui/core';

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
        <Container maxWidth="md">{ children }</Container>
      </Header>
    </div>
  )
}

export default PageWrapper