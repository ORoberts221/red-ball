import React from "react";
import draw from "../../logic/draw";
import "./index.css";

class Canvas extends React.Component {
    componentDidMount(){
        draw();
    }

    render(){
        return(
            <canvas id="canvas" className="canvas" width="500" height="500"></canvas>
        );
    }
}

export default Canvas;