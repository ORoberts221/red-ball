import Matter from "matter-js";

export default function draw() {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");

    // module aliases
    var Engine = Matter.Engine,
        Render = Matter.Render,
        World = Matter.World,
        Bodies = Matter.Bodies;

    // create an engine
    var engine = Engine.create();

    // create a circle
    var ball = Bodies.circle(450, 25, 50);

    //create the ground
    var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

    // add the bodies to the world
    World.add(engine.world, [ball, ground]);

    // run the engine
    Engine.run(engine);

     // create a renderer
     var render = Render.create({
        canvas: c,
        options: {
            width: c.width,
            height: c.height
        },
        engine: engine
    });

    // run the renderer
    Render.run(render);
}
