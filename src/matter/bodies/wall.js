import Matter from 'matter-js';

export default function wall(x, y, width, height) {
    this.body = Matter.Bodies.rectangle(x, y, width, height,
        {
            isStatic: true,
            render: { fillStyle: '#222' }
        });

    return this.body;
}