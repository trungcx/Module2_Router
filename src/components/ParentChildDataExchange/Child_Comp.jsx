import React, { Component } from "react";
class Child_Comp extends Component {
  //constructor - khoi tao state cua component
  constructor(props) {
    super(props);
    this.state = {};
  }
  //
  handleSendData = () => {
    this.props.fromChild("Nguyen Van Kho The", "Noi chuyen rieng nhieu");
  };
  //
  handleSendText = (e) => {
    this.props.textFromChild(e.target.value);
    // console.log(e.target.value);
  };
  render() {
    return (
      <>
        <h2>Children Component</h2>
        <p>
          1-{this.props.company}, 2-{this.props.class}, 3-{this.props.lang},
          4-children:
          {this.props.children}
        </p>
        <button onClick={this.handleSendData}>Send data to Parent</button>
        {/* input text */}
        <input type="text" onChange={this.handleSendText} />
      </>
    );
  }
}

export default Child_Comp;
