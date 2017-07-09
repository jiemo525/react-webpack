import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.scss';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="a">
          <div className="b"></div>
        </div>
      </div>
    );
  }
}

export default App;
