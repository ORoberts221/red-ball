import React, { Component } from 'react';
import draw from "../../logic/draw";
import './index.css';


class App extends Component {
  componentDidMount() {
    draw();
  }

  render() {
    return (
      <div className="container">
        <div>
          <h2>Red Ball</h2>
        </div>
        <canvas id="canvas" className="canvas" width="500" height="500"></canvas>
      </div>
    );
  }
}

export default App;
