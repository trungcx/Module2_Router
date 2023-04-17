import React, { Component } from "react";
import Child_Comp from "./Child_Comp";
import Child_Func_Comp from "./Child_Func_Comp";
class Parent_Comp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: "An Vui",
      class: "JavaScript T2",
      justText: "",
    };
  }
  //Cập nhật state
  handleChange = () => {
    this.setState({
      company: "Binh An",
    });
  };
  //Có sử dụng dữ liệu của props hoặc state
  handleProps_State = () => {
    console.log("Company--->", this.state.company);
  };
  //   B1: Xây dựng function ở component cha
  receiveDataFromChild = (studentName, classRoom) => {
    console.log("Du lieu tu con:" + studentName + classRoom);
  };
  // receive text
  receiveTextFromChild = (justText) => {
    this.setState({
      justText: justText,
    });
  };
  render() {
    return (
      <>
        <h2>Parent Component</h2>
        {/*  */}
        <button onClick={this.handleChange}>Change Company</button>
        {/* Su kien su dung props, state --> goi function */}
        <button onClick={this.handleProps_State}>Event Props-State</button>
        <p>Text From Child: {this.state.justText}</p>
        <Child_Comp
          lang={"Nihon"}
          company={this.state.company}
          class={this.state.class}
          fromChild={this.receiveDataFromChild}
          textFromChild={this.receiveTextFromChild}
        >
          Try Try
        </Child_Comp>

        {/*  */}
        <Child_Func_Comp company={this.state.company} />
        {/*  */}
      </>
    );
  }
}

export default Parent_Comp;
