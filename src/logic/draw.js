import Matter from "matter-js";
import Ball from "../components/matter/ball";

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

function createMouseDragConstraint() {
    var mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });

    World.add(engine.world, mouseConstraint);
}

export default function setup() {
    //Get canvas
    var c = document.getElementById("canvas");

    //Create engine
    engine = Engine.create();

    //Generate bodies
    ball = new Ball(engine.world, c.width / 2, c.height / 2);

    World.add(engine.world, [
        Bodies.rectangle(0, 495, 1000, 20, { isStatic: true, render: { fillStyle: '#222' }})
    ]);

    render = createRender(c);

    //Add mouse constraint
    createMouseDragConstraint();

    // run the engine
    Engine.run(engine);

    // run the renderer
    Render.run(render);
}

