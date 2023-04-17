import React, { Component } from "react";
import Baitap3 from "./Baitap3";
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "", //Thuc hanh 1
      selectedOption: "", //Thuc hanh 2
      email: "", //Thuc hanh 3
      message: "", //Thuc hanh 3
      employeeCode: [3, 5, 7, 9, 2, 4, 6, 10], //Bai tap 1
      tempCode: 0, //Bai tap 1
      bt1Message: "", //Bai tap 1
      //Bai tap 2
      bt2EmployeeCode: [],
      bt2Message: "xxx",
      bt2TempCode: "",

      //Common
      whichExercise: "",
    };
  }

  //*** FOR TEST */
  cars = ["Honda", "Toyoda", "BMW"];
  displayCar = () => {
    return this.cars.map((car, index) => <p key={index}>{car}</p>);
  };
  //**** Thuc hanh 1 */
  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };
  handleSubmit = (event) => {
    // Ngan chan hanh vi load lai trang khi submit form
    event.preventDefault();
    alert("Gia tri nhap tu o input la : " + this.state.value);
  };
  //*** Thuc hanh 2 */
  onValueChange = (event) => {
    this.setState({
      selectedOption: event.target.value,
    });
  };
  formSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.selectedOption);
  };
  //*** Thuc hanh 3 */
  emailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  handleCheckEmail = (event) => {
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    this.state.email == ""
      ? this.setState({ message: "Ko duoc de trong" })
      : this.state.email.match(mailformat)
      ? this.setState({ message: "Email HOP LE" })
      : this.setState({ message: "Email KO HOP LE" });
  };
  //**** Bai tap 1 */
  handleInputCode = (event) => {
    this.setState({
      tempCode: parseInt(event.target.value),
    });
    // console.log(this.state.tempCode);
  };
  handleSubmitCode = (event) => {
    console.log(this.state.employeeCode);
    //
    if (this.state.tempCode == "" || this.state.tempCode == null) {
      this.setState({ bt1Message: "Please input code" });
    }
    if (this.state.employeeCode.includes(this.state.tempCode) == true) {
      this.setState({ bt1Message: "Code existed" });
    } else {
      this.setState({ bt1Message: "Submit success" });
      this.setState({
        employeeCode: this.state.employeeCode.concat(this.state.tempCode),
      });
    }
  };
  //**** Bai tap 2 */
  codeCheckExisted(code) {
    console.log("codeCheckExisted", code);
    if (this.state.bt2EmployeeCode.includes(code)) {
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
        bt2Message: "Code should start with: NV",
      });
      return false;
    }
  }
  codeCheckLength(code) {
    console.log("codeCheckLength", code.length);
    if (code.length < 8) {
      this.setState({
        bt2Message: "Too short.Length should be between 8 and 16.",
      });
      return false;
    }
    if (code.length > 16) {
      this.setState({
        bt2Message: "Too long.Length should be between 8 and 16.",
      });
      return false;
    } else {
      return true;
    }
  }
  bt2HandleInputCode = (event) => {
    this.setState({
      bt2TempCode: event.target.value,
    });
  };
  bt2HandleSubmitCode = (event) => {
    console.log("bt2HandleSubmitCode");
    let code = this.state.bt2TempCode;
    if (this.codeCheckBlank(code)) {
      if (this.codeCheckExisted(code)) {
        if (this.codeCheckStartCharacter(code)) {
          if (this.codeCheckLength(code)) {
            this.setState({
              bt2Message: "Success !",
              bt2EmployeeCode: this.state.bt2EmployeeCode.concat(code),
            });
          }
        }
      }
    }
  };

  //Main Render
  render() {
    return (
      <>
        {/* Thuc hanh 1 */}
        <div>
          <h4>[Thực hành] 1. Sử dụng state để quản lý input trong form</h4>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input
                onChange={this.handleChange}
                type="text"
                value={this.state.value}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
        {/* Thuc hanh 2 */}
        <div>
          <h4>[Thực hành] 2. Sử dụng state để quản lý nút radio trong form</h4>
          <form onSubmit={this.formSubmit}>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="Male"
                  checked={this.state.selectedOption === "Male"}
                  onChange={this.onValueChange}
                />
                Male
              </label>
            </div>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="Female"
                  checked={this.state.selectedOption === "Female"}
                  onChange={this.onValueChange}
                />
                Female
              </label>
            </div>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="Other"
                  checked={this.state.selectedOption === "Other"}
                  onChange={this.onValueChange}
                />
                Other
              </label>
            </div>
            <p>Selected option is: {this.state.selectedOption}</p>
            <button type="submit">Submit</button>
          </form>
        </div>
        {/* Thuc hanh 3 */}
        <div>
          <h4>[Thực hành] 3. Validate địa chỉ email</h4>
          <input type="text" onChange={this.emailChange} />
          <p>
            Thong Bao: {this.state.email}
            <br /> {this.state.message}
          </p>
          <button onClick={this.handleCheckEmail}>Check email</button>
        </div>
        {/* Bai tap 1 */}
        <div>
          <h4>[Bài tập] 1. Kiểm tra trùng mã nhân viên</h4>
          <label>
            Employee code: <input onChange={this.handleInputCode} type="text" />
          </label>
          <p>Message: {this.state.bt1Message}</p>
          <button onClick={this.handleSubmitCode}>SUBMIT</button>
        </div>
        {/* Bai tap 2 */}
        <div>
          <h4>[Bài tập] 2. Kiểm tra độ dài của mã nhân viên</h4>
          <label>
            Employee code:{" "}
            <input onChange={this.bt2HandleInputCode} type="text" />
          </label>
          <p>Format: NV + number. Length should be between 8 and 16</p>
          <p>Message: {this.state.bt2Message}</p>
          <button onClick={this.bt2HandleSubmitCode}>SUBMIT</button>
        </div>
        <Baitap3 />
        {/* FOR Test */}
        <div>For TEST: {this.displayCar()}</div>
      </>
    );
  }
}

export default Form;
