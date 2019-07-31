// REACT
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ThemeProvider } from 'emotion-theming'

// MODULES
import App from "./js/app";
import theme from './style/theme'

// SERVICE WORKER BRIDGE
import './js/services/serviceWorkerBridge'

// HMR
if (module.hot) {
  module.hot.accept();
}

const root = document.getElementById("root")

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router>
      <App />
    </Router>
  </ThemeProvider>
, root);
