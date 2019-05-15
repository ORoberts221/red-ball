import React, { Component } from 'react';
import Matter from 'matter-js';
import Wall from '../../matter/bodies/wall';
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

  setupCanvas(canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  setupContainer(canvas){
    var containerW = canvas.width * 2;
    var containerH = canvas.height * 2;

    Matter.World.add(this.state.engine.world, [
      new Wall(0, 0, containerW, 20), //Top
      new Wall(0, 0, 5, containerH), //Left
      new Wall(canvas.width, 0, 5, containerH), //Right
      new Wall(0, canvas.height, containerW, 30) //Bottom
    ]);
  }

  setupWorld(canvas) {
    //create container
    this.setupContainer(canvas);

    //create ball
    var ball = new Ball(canvas.width / 2, canvas.height / 2);
    
    //create drag constraint
    var dragConstraint = Drag(canvas, this.state.engine);

    Matter.World.add(this.state.engine.world, [ball, dragConstraint]);
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


    window.addEventListener("resize", function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      this.run(renderer);
    });
  }

  render() {
    return (
      <div className="container">
        <div className="header">
          <h2>Red Ball</h2>
          <p>A small experiment with React and <a href="http://brm.io/matter-js/">Matter.js</a></p>
        </div>
        <canvas id="canvas" className="canvas"></canvas>
        <div className="sidebar">
          <ul className="links">
            <li>
              <a href="">refresh page</a>
            </li>
            <li>
              <a href="https://github.com/ORoberts221/red-ball">source code</a>
            </li>
            <li>
              <a href="../">other projects</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
