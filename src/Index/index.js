import React, { Component } from 'react';
import '../Index/index.scss';
import Button from 'antd/lib/button'
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <div className="a">
          <span className="b"> 主页</span>
          <Link to="/about"><span className="b"> 关于</span></Link>
          <Button type="primary">Button</Button>
        </div>
      </div>
    );
  }
}

export default App;
