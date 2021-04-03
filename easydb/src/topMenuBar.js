import React from "react";
import "./topMenuBar.css";

export default class TopMenuBar extends React.Component {
  constructor(props) {
    super(props);
    //   this.props.addBlockFlag = false;
  }
  _onClick() {
    //console.log("menu pressed");
    this.props.setFlag(!this.props.flag);
    //console.log(this.props.flag);
  }
  render() {
    return (
      <div>
        <table>
          <th>
            <button onClick={this._onClick.bind(this)}>Create Block</button>
          </th>
          <th>Remove Block</th>
          <th>Info</th>
        </table>
      </div>
    );
  }
}
