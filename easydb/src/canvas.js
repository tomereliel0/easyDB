import React from "react";
import "./canvas.css";
import Block from "./block";

export default class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = { x: null, y: null, blocks: [] };
  }
  state = {};

  addBlock(params) {
    //this.setState({ x: params.screenX, y: params.screenY });
    //this.state.x =params.screenX;
    //this.state.y =params.screenY;
    this.state.blocks.push(<Block x={this.state.x} y={this.state.y} />);
    const tempBlocks = this.state.blocks;
    this.setState({ blocks: tempBlocks });
  }
  _onMouseMove(e) {
    this.setState({
      x: e.nativeEvent.offsetX - 15,
      y: e.nativeEvent.offsetY - 15,
    });
  }

  render() {
    return (
      <div className="canvas-container">
        <div
          className="canvas"
          onMouseMove={this._onMouseMove.bind(this)}
          onClick={this.addBlock.bind(this)}
        ></div>
        <div>{this.state.blocks}</div>
      </div>
    );
  }
}
