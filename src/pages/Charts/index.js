import React from 'react';
import Header from '../Header';
import Pei from './Pei/index';

class Charts extends React.Component {
  render() {
    return (
      <div className='charts'>
        <Header />
        <Pei />
      </div>
    )
  }
}

export default Charts;