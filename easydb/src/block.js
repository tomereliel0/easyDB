import React from "react";
import "./block.css";
import { ResizableBox } from "react-resizable";
import Draggable from "react-draggable";

export default class Block extends React.Component {
  constructor(props) {
    super(props);
    this.state.left = props.x;
    this.state.top = props.y;
  }
  state = {
    width: 200,
    height: 200,
    absoluteWidth: 200,
    absoluteHeight: 200,
  };
  _onClick() {}
  render() {
    const style = {
      top: this.state.top,
      left: this.state.left,
    };
    return (
      <Draggable handle=".drag-handle" bounds=".canvas-frame">
        <ResizableBox
          style={style}
          width={200}
          height={200}
          minConstraints={[100, 200]}
          maxConstraints={[300, 600]}
          onClick={this._onClick.bind(this)}
        >
          <div className="drag-handle" />
          <span className="text"> Hello hahahahahvjukfnvkjfdnvfkdj</span>
        </ResizableBox>
      </Draggable>
    );
  }
}
