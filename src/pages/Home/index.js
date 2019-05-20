/**
 * @description 首页
 * @author jiemo525
 * @date 0519
 */
import React from 'react';
import { Link } from 'react-router-dom';
// // import { Button } from 'antd';
// import '../styles/index.scss';
import InfoBox from '../../components/InfoBox';
import './index.scss';

class App extends React.Component {
  componentDidMount=()=> {
    console.log(this.ref.style.width)
  }
  render() {
    return (
      <div className="home">
        <div ref={(ref) => this.ref = ref} style={{width: 100,  height: 100}}>react api 16.8.6</div>
        <InfoBox />
      </div>
    );
  }
}

export default App;
