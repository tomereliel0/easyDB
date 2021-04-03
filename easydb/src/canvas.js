import React from "react";
import "./canvas.css";
import Block from "./block";
import Draggable from "react-draggable";

export default class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = { x: null, y: null, blocks: [] };
  }
  state = {};

  addBlock(params) {
    if (this.props.flag) {
      this.state.blocks.push(<Block x={this.state.x} y={this.state.y} />);
      const tempBlocks = this.state.blocks;
      this.setState({ blocks: tempBlocks });
      this.props.setFlag(!this.props.flag);
    }
  }
  _onMouseMove(e) {
    this.setState({
      x: e.nativeEvent.offsetX - 15,
      y: e.nativeEvent.offsetY - 15,
    });
  }
  _handleClick(e) {
    e.stopPropagation();
  }
  _resetCanvasPosition(e) {}
  render() {
    return (
      <div className="canvas-container">
        <div className="canvas-frame">
          <Draggable>
            <div
              className="canvas"
              onMouseMove={this._onMouseMove.bind(this)}
              onClick={this.addBlock.bind(this)}
            >
              <div
                onMouseDown={this._handleClick.bind(this)}
                onMouseUp={this._handleClick.bind(this)}
                onClick={this._handleClick.bind(this)}
              >
                {this.state.blocks}
              </div>
            </div>
          </Draggable>
        </div>
        <button
          className="reset-button"
          //  onClick={this._resetCanvasPosition.bind(this)}
        >
          Reset View
        </button>
      </div>
    );
  }
}
