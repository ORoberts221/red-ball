import Matter from "matter-js";
import Ball from "../matter/bodies/ball";
import Drag from "../matter/constraints/drag";

//Module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Mouse = Matter.Mouse,
    MouseConstraint = Matter.MouseConstraint;

var engine;
var render;
var ball;

function createRender(canvas) {
    return Render.create({
        canvas: canvas,
        options: {
            width: canvas.width,
            height: canvas.height,
            wireframes: false,
            background: '#ffffff'
        },
        engine: engine
    });
}

export default function setup() {
    //Get canvas
    var c = document.getElementById("canvas");

    //Create engine
    engine = Engine.create();

    //Generate bodies
    ball = new Ball(engine.world, c.width / 2, c.height / 2);
    var dragConstraint = Drag(c, engine);

    World.add(engine.world, [
        dragConstraint,
        Bodies.rectangle(0, 495, 1000, 20, { isStatic: true, render: { fillStyle: '#222' }})
    ]);

    render = createRender(c);

    // run the engine
    Engine.run(engine);

    // run the renderer
    Render.run(render);
}

