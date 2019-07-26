// REACT
import React from "react";
import ReactDOM from "react-dom";

// MODULES
import App from "./js/app";

// HMR
if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<App />, document.getElementById("root"));
