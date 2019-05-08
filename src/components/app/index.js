import React, { Component } from 'react';
import Matter from 'matter-js';
import Ball from '../../matter/bodies/ball';
import Drag from '../../matter/constraints/drag';
import createRender from '../../matter/renderers/render';
import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { engine: Matter.Engine.create() }
  }

  run(engine, render) {
    Matter.Engine.run(engine);
    Matter.Render.run(render);
  }

  componentDidMount() {
    var canvas = document.getElementById("canvas");

    //create ball
    var ball = new Ball(canvas.width / 2, canvas.height / 2);
    //create drag constraint
    var dragConstraint = Drag(canvas, this.state.engine);

    //Add bodies to the world
    Matter.World.add(this.state.engine.world, [
      ball,
      dragConstraint,
      //Add the ground
      Matter.Bodies.rectangle(0, 495, 1000, 20, { isStatic: true, render: { fillStyle: '#222' } })
    ]);

    //create renderer
    var render = createRender(canvas, this.state.engine);

    this.run(this.state.engine, render);
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
