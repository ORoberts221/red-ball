import Matter from "matter-js";

export default function draw() {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");

    ctx.fillStyle = "white";

    // module aliases
    var Engine = Matter.Engine,
        Render = Matter.Render,
        World = Matter.World,
        Bodies = Matter.Bodies;

    // create an engine
    var engine = Engine.create();

    // create a circle
    var ball = Bodies.circle(c.width / 2, c.height / 2, 25, {
        render :{
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

    // add the bodies to the world
    World.add(engine.world, [
        ball, 
        ground
    ]);

    // run the engine
    Engine.run(engine);

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

    ctx.fillStyle = 'rgba(0,0,0,0.5)';

    // run the renderer
    Render.run(render);
}
