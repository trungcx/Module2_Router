import React from "react";

function Button(props) {
  const handleOnClick = () => {
    props.onClick(props.btnName);
    // console.log(props.btnName);
  };
  //
  return (
    <>
      <button
        onClick={handleOnClick}
        className={
          props.className != undefined
            ? "button-common " + props.className
            : "button-common"
        }
      >
        {props.btnName}
      </button>
    </>
  );
}

export default Button;
