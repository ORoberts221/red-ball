import Matter from "matter-js";

// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Mouse = Matter.Mouse,
    MouseConstraint = Matter.MouseConstraint;

var engine;
var render;
var ball;

function drawBall(x, y) {
    return Bodies.circle(x, y, 25, {
        friction: 0.0025,
        restitution: 0.8,
        render: {
            fillStyle: 'red',
        }
    });
}

function drawGround() {
    return Bodies.rectangle(0, 495, 1000, 20, {
        isStatic: true,
        render: {
            fillStyle: '#222'
        }
    });
}

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

    return mouseConstraint;
}

function setup() {
    //Get canvas
    var c = document.getElementById("canvas");

    //Create engine
    engine = Engine.create();

    ball = drawBall(c.width / 2, c.height / 2);
    var ground = drawGround();

    render = createRender(c);

    //Add mouse constraint
    var mouse = createMouseDragConstraint();


    // Add the bodies to the world
    World.add(engine.world, [
        mouse,
        ball,
        ground
    ]);

    // run the engine
    Engine.run(engine);

    // run the renderer
    Render.run(render);
}



export default function draw() {
    setup();
}
