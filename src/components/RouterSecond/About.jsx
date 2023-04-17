import React from "react";
import { useLocation } from "react-router-dom";

function About(props) {
  const location = useLocation();

  return (
    <div>
      {console.log(location.state)}
      About
    </div>
  );
}

export default About;
