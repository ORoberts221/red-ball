import Matter from "matter-js";

export default function draw() {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");

    // module aliases
    var Engine = Matter.Engine,
        Render = Matter.Render,
        World = Matter.World,
        Bodies = Matter.Bodies,
        Mouse = Matter.Mouse,
        MouseConstraint = Matter.MouseConstraint;

    // create an engine
    var engine = Engine.create();

    // create a circle
    var ball = Bodies.circle(c.width / 2, c.height / 2, 25, {
        friction: 0.0025,
        render: {
            fillStyle: 'red',
        }
    });

    //create the ground
    var ground = Bodies.rectangle(0, 495, 1000, 10, {
        isStatic: true,
        render: {
            fillStyle: '#222'
        }
    });

    // create a renderer
    var render = Render.create({
        canvas: c,
        options: {
            width: c.width,
            height: c.height,
            wireframes: false,
            background: '#ffffff'
        },
        engine: engine
    });

    //Add mouse constraint
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


    // add the bodies to the world
    World.add(engine.world, [
        mouseConstraint,
        ball,
        ground
    ]);

    // run the engine
    Engine.run(engine);

    // run the renderer
    Render.run(render);
}
