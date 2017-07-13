import React from 'react';
import { Avatar } from 'antd';
import SearchTree from '../../components/SearchTree/index';
import LabelBox from '../../components/LabelBox/index';
import './index.scss';

class App extends React.Component {
  render() {
    return (
      <div className="home">
        <header><Avatar size="large" icon="user" className="sign_in_icon"/></header>
        <div className="search_tree">
          <SearchTree />
        </div>
        <div  className="label">
          <span className="label_title">标签:</span><LabelBox />
        </div>
      </div>
    );
  }
}

export default App;
