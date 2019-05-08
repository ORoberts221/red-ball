import React, { Component } from 'react';
import Matter from 'matter-js';
import Ball from '../../matter/bodies/ball';
import Drag from '../../matter/constraints/drag';
import './index.css';

function run(engine, render) {
  // run the engine
  Matter.Engine.run(engine);

  // run the renderer
  Matter.Render.run(render);
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { engine: Matter.Engine.create() }
  }

  componentDidMount() {
    //get canvas
    var c = document.getElementById("canvas");

    //create ball
    var ball = Matter.Bodies.circle(c.width / 2, c.height / 2, 25, {
      friction: 0.0025,
      restitution: 0.8,
      render: {
        fillStyle: 'red',
      }
    });

    //add additional bodies to the world
    Matter.World.add(this.state.engine.world, [
      ball,
      Drag(c, this.state.engine),
      Matter.Bodies.rectangle(0, 495, 1000, 20, { isStatic: true, render: { fillStyle: '#222' } })
    ]);

    //create renderer
    var render = Matter.Render.create({
      canvas: c,
      options: {
        width: c.width,
        height: c.height,
        wireframes: false,
        background: '#ffffff'
      },
      engine: this.state.engine
    });

    //run the world
    run(this.state.engine, render);
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
