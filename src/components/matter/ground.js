import Matter from "matter-js";

export default function Ground(x, y){
    return Matter.Bodies.rectangle(x, y, 1000, 20, {
        isStatic: true,
        render: {
            fillStyle: '#222'
        }
    });
}