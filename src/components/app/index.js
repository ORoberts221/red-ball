import React, { Component } from 'react';
import Canvas from "../canvas";
import './index.css';


class App extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <h2>Red Ball</h2>
        </div>
        <Canvas />
      </div>
    );
  }
}

export default App;
