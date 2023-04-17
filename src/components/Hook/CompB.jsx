import React, { useEffect } from "react";
import CompC from "./CompC";
function CompB(propsB) {
  useEffect(() => {
    return () => {
      console.log("Component is removed from DOM");
    };
  }, []);
  return (
    <div>
      CompB---
      <CompC />
    </div>
  );
}

export default CompB;
