import React from 'react';
import Header from '../../components/Header'

const PageWrapper = ({ children }) => (
  <div>
    <Header>
     <div className="container">{ children }</div>
    </Header>
  </div>
)

export default PageWrapper