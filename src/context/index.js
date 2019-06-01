import React from "react";
import ThemeContext from "./theme-context";

// import Button from "./button-function";
// import Button from "./button-class";
// import Button from "./button-hook";
import Button from "./button-hook-custom";

const theme = { color: "blue" };

function App() {
  return (
    <div className="App">
      <ThemeContext.Provider value={theme}>
        <Button>Hello</Button>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
