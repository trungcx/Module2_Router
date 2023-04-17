import React, { useEffect, useState } from "react";
import CompB from "./CompB";

function DemoUseEffect(props) {
  const [sometext, setSomeText] = useState(true);
  const [text, setText] = useState("Chao ban!");
  const [count, setCount] = useState(0);
  const [arrList, setArrList] = useState([1, 2, 3, 4]);
  const [objList, setObjList] = useState({ count: 11, arrList: [3, 5, 7] });

  //1. Effect không cần Cleanup - Ko dùng nhiều
  //   1.1 useEffect luôn được gọi sau khi component mounted
  //   1.2 Gọi callback mỗi khi component re-render
  //   1.3 Gọi callback ngay sau khi component thêm element vào DOM
  //   useEffect(() => {
  //     console.log("mounted");
  //   });

  //2. Effect cần Cleanup
  //   useEffect luôn được gọi sau khi component mounted
  //   Chỉ gọi callback 1 lần sau khi component mounted
  //   useEffect(() => {
  //     console.log("mounted");
  //   }, []);

  //3. Effect cần Cleanup và có dependencies (deps)
  //   useEffect luôn được gọi sau khi component mounted
  //   Callback sẽ được gọi lại mỗi khi dependencies thay đổi
  useEffect(() => {
    console.log("in useEffect");
  }, [count, objList.count]);
  //   useEffect(() => {
  //     console.log("in useEffect 2");
  //   }, [objList.count]);
  useEffect(() => {
    return () => {
      console.log("Component is removed from DOM");
    };
  }, []);

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
  //Main return
  return (
    <div>
      {console.log("re-render")}
      <h2>Demo useEffect</h2>
      {/* ********* */}
      {sometext == true ? <CompB /> : ""}

      {/* ********* */}
      <p>{sometext}</p>
      <button onClick={() => setSomeText(!sometext)}>JUst clikc</button>
      {/*  */}
      <div>
        <button onClick={() => setCount(count - 1)}> Down</button>
        ------useEffect deps = Count: {count}------
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
        ------useEffect 2 deps ={objList.count}-{objList.arrList.toString()}
      </p>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

export default DemoUseEffect;
