import React from "react";
import ReactDOM from "react-dom";
import ChangeName from "./ChangeName";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <ChangeName />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
