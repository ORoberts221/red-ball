import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <h2>Red Ball</h2>
        </div>
        <div className="box">
          <div className="ball"></div>
        </div>
      </div>
    );
  }
}

export default App;
