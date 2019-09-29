import React from 'react';
import Header from '../../components/Header'

import {Container} from '@material-ui/core';

function PageWrapper(props) {
  const { width, children } = props;

  return (
    <div>
      <Header>
        <Container maxWidth="md">{ children }</Container>
      </Header>
    </div>
  )
}

export default PageWrapper