import React, { useState } from "react";

function Bai3() {
  const [text, setText] = useState("");
  const [showText, setShowText] = useState("");

  let handleShowText = () => {
    setShowText(text);
    // setText("");
  };
  return (
    <div>
      <h3>Bai3 :Hiển thị nội dung người dùng nhập vào từ ô input..</h3>
      <input value={text} onChange={(event) => setText(event.target.value)} />
      <button onClick={handleShowText}>Clik me</button>
      <p>{showText}</p>
    </div>
  );
}

export default Bai3;
