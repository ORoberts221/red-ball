import React, { Component } from 'react';
import Matter from 'matter-js';
import Ball from '../../matter/bodies/ball';
import Drag from '../../matter/constraints/drag';
import createRender from '../../matter/renderers/render';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      engine: Matter.Engine.create()
    }
  }

  setupCanvas(canvas){
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;
  }

  setupWorld(canvas) {
    //create ball
    console.log("creating ball at");

    var ball = new Ball(canvas.width / 2, canvas.height / 2);
    //create ground
    var ground = Matter.Bodies.rectangle(0, canvas.height, canvas.width * 2, 20, { isStatic: true, render: { fillStyle: '#222' } });
    //create drag constraint
    var dragConstraint = Drag(canvas, this.state.engine);

    Matter.World.add(this.state.engine.world, [ball, ground, dragConstraint]);
  }

  run(renderer) {
    Matter.Engine.run(this.state.engine);
    Matter.Render.run(renderer);
  }

  componentDidMount() {
    var canvas = document.getElementById("canvas");
    this.setupCanvas(canvas);

    this.setupWorld(canvas);
    var renderer = createRender(canvas, this.state.engine);
    this.run(renderer);

  }

  render() {
    return (
      <div className="container">
        <div className="header">
          <h2>Red Ball</h2>
          <p>A small experiment with React and <a href="http://brm.io/matter-js/">Matter.js</a></p>
        </div>
        <canvas id="canvas" className="canvas" width="500" height="500"></canvas>
        <div>
          <a href="">refresh</a><br /><br />
          <a href="https://github.com/ORoberts221/red-ball">source code</a><br /><br />
          <a href="../">back</a>
        </div>
      </div>
    );
  }
}

export default App;
