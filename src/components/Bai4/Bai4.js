// NOT FINISHED , Table not update
import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";

function Bai4() {
  let [members, setMembers] = useState([]);
  const [isLowToHigh, setIsLowToHigh] = useState(false);
  members = [
    { name: "Luffy", height: 177 },
    { name: "Zoro", height: 187 },
    { name: "Sanji", height: 185 },
    { name: "Chopper", height: 65 },
  ];
  //handleSort
  function handleSort() {
    // let nextMembers = [...members];
    // if (isLowToHigh == false) {
    //   nextMembers = nextMembers.sort((a, b) => a.height - b.height);
    //   setMembers(nextMembers);
    // } else {
    //   nextMembers = nextMembers.sort((a, b) => b.height - a.height);
    //   setMembers(nextMembers);
    // }
    // setIsLowToHigh(() => !isLowToHigh);
    // console.log(isLowToHigh);
    // console.log(nextMembers);
  }
  function TrMember({ children }) {
    return children.map((member, keyIndex) => (
      <tr key={keyIndex}>
        <td>{member.name}</td>
        <td>{member.height}</td>
      </tr>
    ));
  }
  function TrName({ children }) {
    return <tr>{children}</tr>;
  }
  //MAIN
  return (
    <>
      <h3>Bai4 :Sắp xếp và lọc dữ liệu</h3>
      <table>
        <tbody>
          <TrName>
            <th>Name</th>
            <th>Length</th>
          </TrName>
          <TrMember>{members}</TrMember>
        </tbody>
      </table>
      <button
        onClick={() => {
          setMembers([...members, { name: "Robin", height: "199" }]);
        }}
      >
        Sort by length
      </button>
      <br></br>
    </>
  );
}

export default Bai4;
