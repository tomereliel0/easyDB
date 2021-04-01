import React from "react";
import "./block.css";
import { Resizable, ResizableBox } from "react-resizable";
import Draggable from "react-draggable";

export default class Block extends React.Component {
  constructor(props) {
    super(props);
    this.state.left = props.x;
    this.state.top = props.y;
    console.log(this.state.absoluteTop, this.state.absoluteLeft);
  }
  state = {
    width: 200,
    height: 200,
    absoluteWidth: 200,
    absoluteHeight: 200,
  };

  render() {
    const style = {
      top: this.state.top,
      left: this.state.left,
    };
    return (
      <Draggable handle=".drag-handle">
        <ResizableBox
          style={style}
          width={200}
          height={200}
          minConstraints={[100, 200]}
          maxConstraints={[300, 600]}
          //   onMouseDown={this._onMouseDown.bind(this)}
        >
          <div className="drag-handle" />
          <span className="text"> Hello hahahahahvjukfnvkjfdnvfkdj</span>
        </ResizableBox>
      </Draggable>
    );
  }
}
