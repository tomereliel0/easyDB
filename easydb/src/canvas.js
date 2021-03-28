import React from 'react';
import './canvas.css';
import Block from './block'


export default class Canvas extends React.Component{
    constructor(props) {
        super(props);
        this.state = { x:null, y:null,blocks:[] };
      }
    state = {

    };

    addBlock(params) {
        this.setState({ x: params.screenX, y: params.screenY }); 
        //this.state.x =params.screenX;
        //this.state.y =params.screenY;
        this.state.blocks.push(<Block x={this.state.x} y={this.state.y}/>)
        
    };
    render() {
      return (
        <div className="canvas" onClick={this.addBlock.bind(this)}>
            <h1>x: {this.state.x} y: {this.state.y}</h1>
            <div>
                {this.state.blocks}
            </div>
        </div>
      );
    }
  }