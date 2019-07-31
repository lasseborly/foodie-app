// REACT
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// MODULES
import App from "./js/app";

// SERVICE WORKER BRIDGE
import './js/services/serviceWorkerBridge'

// HMR
if (module.hot) {
  module.hot.accept();
}

const root = document.getElementById("root")

ReactDOM.render(
  <Router>
    <App />
  </Router>
, root);
