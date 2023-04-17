import React, { Component } from "react";

class Bai4_trtd extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <tr>
          <td>{this.props.member.name}</td>
          <td>{this.props.member.height}</td>
        </tr>
      </>
    );
  }
}

export default Bai4_trtd;
