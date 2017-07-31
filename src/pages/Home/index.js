/**
 * 后台首页
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import '../styles/index.scss';
import './index.scss';

class App extends React.Component {
  render() {
    return (
      <div className="home">
        <Link to='/about'><Button type="primary" size="large">按钮</Button></Link>
      </div>
    );
  }
}

export default App;
