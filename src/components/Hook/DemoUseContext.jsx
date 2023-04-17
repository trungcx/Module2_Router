import React, { useState, createContext } from "react";
import CompB from "./CompB";

export const themeContext = createContext();

function DemoUseContext(props) {
  //
  //send props: DemoUseContext -> CompB -> CompC
  //1 => 2 => 3 : normal send props method
  //1 => 3 : useContext
  const [theme, setTheme] = useState("light");

  const handleChangeStyle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  //
  return (
    <themeContext.Provider value={theme}>
      <div>
        <h2>useContext</h2>
        <button onClick={handleChangeStyle}>CHange Style</button>
        <CompB />
      </div>
    </themeContext.Provider>
  );
}

export default DemoUseContext;
