import Matter from "matter-js";

export default function Ground(world, x, y){
    this.body = Matter.Bodies.rectangle(x, y, 1000, 20, {
        isStatic: true,
        render: {
            fillStyle: '#222'
        }
    });

    Matter.World.add(world, this.body);
}