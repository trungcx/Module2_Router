// rsf
import React, { useState } from "react";

function DemouseState(props) {
  const [text, setText] = useState("Chao ban!");
  const [count, setCount] = useState(0);
  const [arrList, setArrList] = useState([1, 2, 3, 4]);
  const [objList, setObjList] = useState({ count: 11, arrList: [3, 5, 7] });

  const handleChangeText = () => {
    setText(Math.random() * 10 + "Bonjour!");
  };
  //   console.log(count);
  //HandleAddRandom
  const handleAddRandom = () => {
    setArrList([...arrList, Math.floor(Math.random() * 10)]);
  };
  // obj
  const handleIncrease = () => {
    setObjList({
      //   ...objList,
      count: objList.count + 1,
      arrList: [...objList.arrList, objList.count + 1],
    });
  };
  //
  return (
    <div>
      {/* {console.log("re-render")} */}
      <h2>Demo useState</h2>
      <p>Day la text: {text}</p>
      <button onClick={handleChangeText}>Change Text</button>
      <div>
        <button onClick={() => setCount(count - 1)}> Down</button>
        ------Count: {count}------
        <button onClick={() => setCount(count + 1)}> Up</button>
      </div>
      {/* Kieu du lieu phuc tap */}
      <br />
      <h3>Kieu du lieu phuc tap Arr</h3>
      <p>{arrList.toString()}</p>
      <button onClick={handleAddRandom}>Add random num</button>
      <br />
      <h3>Kieu du lieu phuc tap Obj</h3>
      <p>
        {objList.count}-{objList.arrList.toString()}
      </p>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

export default DemouseState;
