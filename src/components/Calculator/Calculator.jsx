import React, { useState } from "react";
import Button from "./Button";
function Calculator(props) {
  const [expression, setExpression] = useState("");
  const handleOnclick = (btnName) => {
    if (btnName == "=") {
      console.log("equal");
      setExpression(eval(expression));
      return true;
    }
    if (btnName == "AC") {
      console.log("AC");
      setExpression("");
      return true;
    }
    if (btnName == "Del") {
      console.log("Del");
      setExpression(expression.substring(0, expression.length - 1));
      return true;
    }
    setExpression(expression + btnName);
    console.log(expression + btnName);
  };
  //
  return (
    <>
      <h2>Calculator</h2>
      <div className="calculator">
        <div className="monitor">{expression}</div>
        <Button
          onClick={handleOnclick}
          btnName={"AC"}
          className={"button-ac"}
        />
        <Button onClick={handleOnclick} btnName={"Del"} />
        <Button onClick={handleOnclick} btnName={"+"} />
        <Button onClick={handleOnclick} btnName={"7"} />
        <Button onClick={handleOnclick} btnName={"8"} />
        <Button onClick={handleOnclick} btnName={"9"} />
        <Button onClick={handleOnclick} btnName={"*"} />
        <Button onClick={handleOnclick} btnName={"4"} />
        <Button onClick={handleOnclick} btnName={"5"} />
        <Button onClick={handleOnclick} btnName={"6"} />
        <Button onClick={handleOnclick} btnName={"-"} />
        <Button onClick={handleOnclick} btnName={"1"} />
        <Button onClick={handleOnclick} btnName={"2"} />
        <Button onClick={handleOnclick} btnName={"3"} />
        <Button onClick={handleOnclick} btnName={"+"} />
        <Button onClick={handleOnclick} btnName={"0"} />
        <Button onClick={handleOnclick} btnName={"."} />
        <Button
          onClick={handleOnclick}
          btnName={"="}
          className={"button-equal"}
        />
      </div>
    </>
  );
}

export default Calculator;
