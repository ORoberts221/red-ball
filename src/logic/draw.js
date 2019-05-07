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
    var ball = Bodies.circle(c.width / 2, c.height / 2, 25);

    //create the ground
    var ground = Bodies.rectangle(0, 450, 1000, 0.5, { isStatic: true });

    // add the bodies to the world
    World.add(engine.world, [ball, ground]);

    // run the engine
    Engine.run(engine);

     // create a renderer
     var render = Render.create({
        canvas: c,
        options: {
            width: c.width,
            height: c.height,
        },
        engine: engine
    });

    // run the renderer
    Render.run(render);
}
