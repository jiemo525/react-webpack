/**
 * 后台首页
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import Header from '../Header';
import Hook from '../Hook';
import '../styles/index.scss';
import './index.scss';

class App extends React.Component {
  render() {
    return (
      <div className="home">
        <Header />
        <Link to='/about'><Button type="primary" size="large">按钮</Button></Link>
        <Hook />
      </div>
    );
  }
}

export default App;
