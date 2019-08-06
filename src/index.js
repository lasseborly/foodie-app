// REACT
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ThemeProvider } from 'emotion-theming'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

// MODULES
import App from "./js/app";
import theme from './style/theme'

// SERVICE WORKER BRIDGE
// import './js/services/serviceWorkerBridge'

// HMR
if (module.hot) {
  module.hot.accept();
}

// Redux
import rootReducer from './js/store/reducers/rootReducer'
import { composeWithDevTools } from "redux-devtools-extension"

// Fonts local
import './fonts/FFTisa-Bold.woff2'
import './fonts/FFTisa-Regular.woff2'
import './fonts/FFTisa-Light.woff2'

const store = createStore(rootReducer, composeWithDevTools())
const root = document.getElementById("root")

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </Provider>
, root);
