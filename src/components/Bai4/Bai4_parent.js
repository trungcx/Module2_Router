import Bai4_tryClass from "./Bai4_tryClass";
import React, { Component } from "react";
class Bai4_parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortTrigger: false,
      members: [
        { name: "Luffy", height: 177 },
        { name: "Zoro", height: 187 },
        { name: "Sanji", height: 185 },
        { name: "Chopper", height: 65 },
      ],
    };
  }
  //sendSortTriggerToChild
  toggleSortTrigger = () => {
    // let prevSortTrigger = this.state.sortTrigger;
    this.setState({
      sortTrigger: !this.state.sortTrigger,
      members:
        this.state.sortTrigger == true
          ? this.state.members.sort((a, b) => a.height - b.height)
          : this.state.members.sort((a, b) => b.height - a.height),
    });
    // console.log(this.state.sortTrigger);
  };
  //Render
  render() {
    return (
      <>
        <h2>Bai4 :Sắp xếp và lọc dữ liệu</h2>
        <button onClick={this.toggleSortTrigger}>Sort by height</button>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Height</th>
            </tr>
            <Bai4_tryClass members={this.state.members} />
          </tbody>
        </table>
      </>
    );
  }
}

export default Bai4_parent;
