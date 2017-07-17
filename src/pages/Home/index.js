/**
 * 后台首页
 */
import React from 'react';
import { Avatar, Card } from 'antd';
import SearchTree from '../../components/SearchTree/index';
import LabelBox from '../../components/LabelBox/index';
import GroupTable from '../../components/GroupTable/index';
import '../../components/TestData/index'
import './index.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource1: [{
        key: '0',
        name: '电子产品',
      }, {
        key: '1',
        name: '家电',
      }, {
        key: '2',
        name: '智能家居',
      }],
      dataSource2: [{
        key: '0-0',
        name: '电脑',
      }, {
        key: '0-1',
        name: '电话',
      }],
      dataSource3: [{
        key: '0-0-0',
        name: 'MACBOOK',
      }, {
        key: '0-0-1',
        name: '联想',
      }],
    }
  }
  render() {
    const { dataSource1, dataSource2,  dataSource3} = this.state;
    return (
      <div className="home">
        <header><Avatar size="large" icon="user" className="sign_in_icon"/></header>
        <div className="search_tree">
          <Card>
            <SearchTree />
          </Card>
        </div>
        <div className="label">
          <Card>
            <span className="label_title">标签:</span><LabelBox />
          </Card>
        </div>
        <div className="groups clearfix">
          <Card>
             <div className="group">
                <GroupTable dataSource={dataSource1} number={0}/>
            </div>
            <div className="group">
                <GroupTable dataSource={dataSource2} number={1}/>
            </div>
            <div className="group">
                <GroupTable dataSource={dataSource3} number={2}/>
            </div>
          </Card>
        </div>
        
      </div>
    );
  }
}

export default App;
