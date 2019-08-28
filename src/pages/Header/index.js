/**
 * @description 头部
 * @author jiemo525
 */
import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className='header-logo'></div>
        <div className='header'>
          <Link to='/about'>
            <div className='header-item'>ABOUT</div>
          </Link>
          <div className='header-item'>REACT DOCUMENT</div>
          <Link to='/charts'>
            <div className='header-item'>CHARTS</div>
          </Link>
        </div>
      </header>
    )
  }
}

export default Header;

