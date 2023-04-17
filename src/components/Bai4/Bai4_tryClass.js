import React, { Component } from "react";
import Bai4_trtd from "./Bai4_trtd";
class Bai4_tryClass extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //Main Render
  render() {
    return (
      <>
        <Bai4_trtd member={this.props.members[0]} />
        <Bai4_trtd member={this.props.members[1]} />
        <Bai4_trtd member={this.props.members[2]} />
        <Bai4_trtd member={this.props.members[3]} />
        {/* <tr>
          <td>{this.props.members[0].name}</td>
          <td>{this.props.members[0].height}</td>
        </tr>
        <tr>
          <td>{this.props.members[1].name}</td>
          <td>{this.props.members[1].height}</td>
        </tr>
        <tr>
          <td>{this.props.members[2].name}</td>
          <td>{this.props.members[2].height}</td>
        </tr>
        <tr>
          <td>{this.props.members[3].name}</td>
          <td>{this.props.members[3].height}</td>
        </tr> */}
      </>
    );
  }
}

export default Bai4_tryClass;
