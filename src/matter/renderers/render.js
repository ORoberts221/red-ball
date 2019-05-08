import Matter from 'matter-js';

export default function createRender(canvas, engine) {
    return Matter.Render.create({
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