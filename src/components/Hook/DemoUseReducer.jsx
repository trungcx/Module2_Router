import React, { useReducer, useState } from "react";

function DemoUseReducer(props) {
  //Trong react hook, useReducer được cung cấp để thay thế cho useState
  //useState được sử dụng trong các component đơn giản
  //useReducer được sử dụng trong các component phức tạp (vd: arr, obj lồng nhau)

  //   const [count, setCount] = useState(0);
  //useState
  //1. InitState : 0
  //2. Action: setCount()

  //useReducer
  //1. InitState
  //2. Action
  //3. Reducer
  //4. dispatch

  //1. InitState
  const initState = 0;
  //2. Action
  //dùng reducer thì nên viết hoa
  const UP_ACTION = "up_action";
  const DOWN_ACTION = "down_action";
  //3. Reducer
  //Trong hàm reducer sẽ nhận 2 tham số: state hiện tại và action
  const reducer = (state, action) => {
    switch (action) {
      case UP_ACTION:
        return state + 1;
      case DOWN_ACTION:
        return state - 1;
      default:
        throw new Error("Ko có action tương ứng");
    }
  };
  //4. dispatch
  const [count, dispatch] = useReducer(reducer, initState);

  //Khi component được chạy lần đầu thì sẽ chạy đến useReducer nhưng
  //ko chạy đến reducer mà chỉ chạy initState
  return (
    <div>
      <h2>Demo useReducer</h2>
      <div>
        <button onClick={() => dispatch(DOWN_ACTION)}> Down</button>
        ------Count: {count}------
        <button onClick={() => dispatch(UP_ACTION)}> Up</button>
      </div>
    </div>
  );
}

export default DemoUseReducer;
