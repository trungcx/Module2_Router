import React, { Component } from "react";
class Baitap3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Bai tap 3
      bt3EmployeeCode: [],
      bt3TempCode: "",
      bt3Email: [],
      bt3TempEmail: "",
      bt3Password: [],
      bt3TempPassword: "",

      bt3Message: "yyy",
    };
  }
  //
  codeCheckExisted(code) {
    console.log("codeCheckExisted", code);
    if (this.state.bt3EmployeeCode.includes(code)) {
      console.log("included");
      return false;
    }
    return true;
  }
  codeCheckBlank(code) {
    console.log("codeCheckBlank");
    if (code == null || code == "") {
      return false;
    }
    return true;
  }
  codeCheckStartCharacter(code) {
    console.log("codeCheckStartCharacter", code);
    if (code.indexOf("NV") == 0) {
      return true;
    } else {
      this.setState({
        bt3Message: "Code should start with: NV",
      });
      return false;
    }
  }
  codeCheckLength(code) {
    console.log("codeCheckLength", code.length);
    if (code.length < 8) {
      this.setState({
        bt3Message: "Code Too short.Length should be between 8 and 16.",
      });
      return false;
    }
    if (code.length > 16) {
      this.setState({
        bt3Message: "Code Too long.Length should be between 8 and 16.",
      });
      return false;
    } else {
      return true;
    }
  }
  //**** Bai tap 3 */

  bt3ValidCode() {
    //Valid code
    let code = this.state.bt3TempCode;
    if (this.codeCheckBlank(code)) {
      if (this.codeCheckStartCharacter(code)) {
        if (this.codeCheckLength(code)) {
          this.setState({
            bt3EmployeeCode: this.state.bt3EmployeeCode.concat(code),
          });
          return true;
        }
      }
    }
    return false;
  }
  bt3ValidEmail() {
    //Valid email
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (this.state.bt3TempEmail == "") {
      this.setState({ bt3Message: "Email Ko duoc de trong" });
      return false;
    } else if (this.state.bt3TempEmail.match(mailformat)) {
      this.setState({ bt3Message: "Email HOP LE" });
      return true;
    } else {
      this.setState({ bt3Message: "Email KO HOP LE" });
      return false;
    }
  }
  bt3ValidPassword() {
    //Valid Password
    if (this.state.bt3TempPassword.length < 8) {
      this.setState({ bt3Message: "Password lenght at least 8 characters" });
      return false;
    }
    return true;
  }
  //****Event handle
  bt3HandleInputCode = (event) => {
    let keyName = event.target.name;
    this.setState({
      [keyName]: event.target.value,
    });
    // console.log(this.state[keyName]);
  };
  bt3HandleSubmit = (event) => {
    if (this.bt3ValidCode()) {
      if (this.bt3ValidEmail()) {
        if (this.bt3ValidPassword()) {
          this.setState({
            bt3Message: "Success !",
          });
          console.log(this.state);
          return true;
        }
      }
    }
    return false;
  };
  //MAIN RENDER
  render() {
    return (
      <>
        {/* Bai tap 3 */}
        <div>
          <h4>[Bài tập] 3. Chức năng đăng nhập ký</h4>
          <label>
            Code:
            <input
              onChange={this.bt3HandleInputCode}
              type="text"
              placeholder="Enter code"
              name="bt3TempCode"
            />
          </label>
          <br />
          <label>
            Email:
            <input
              onChange={this.bt3HandleInputCode}
              type="text"
              placeholder="Enter email"
              name="bt3TempEmail"
            />
          </label>
          <br />
          <label>
            Password:
            <input
              onChange={this.bt3HandleInputCode}
              type="text"
              placeholder="Password"
              name="bt3TempPassword"
            />
          </label>
          {/* <p>Format: NV + number. Length should be between 8 and 16</p> */}
          <p>Message: {this.state.bt3Message}</p>
          <button onClick={this.bt3HandleSubmit}>SUBMIT</button>
        </div>
      </>
    );
  }
}

export default Baitap3;
