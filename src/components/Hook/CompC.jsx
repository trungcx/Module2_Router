import React from "react";
import { themeContext } from "./DemoUseContext";
import { useContext } from "react";
function CompC(propsC) {
  const theme = useContext(themeContext);
  return (
    <>
      <div>CompC---{theme}</div>
      <p className={theme}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique
        dignissimos ullam fugiat esse praesentium aliquam, officiis magni
        laboriosam consequatur nostrum dolore porro asperiores, labore sed
        veritatis? Sapiente, quia. Unde, explicabo.
      </p>
    </>
  );
}

export default CompC;
