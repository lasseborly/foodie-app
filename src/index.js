// REACT
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
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

// EARLY IMPORTS
import durian001 from './img/images/food/durian001.png' 
import papaya001 from './img/images/food/papaya001.png' 
import pitaya001 from './img/images/food/pitaya001.png' 
import watermelon001 from './img/images/food/watermelon001.png' 
import kiwano001 from './img/images/food/kiwano001.png' 
import rambutan001 from './img/images/food/rambutan001.png'

const imagePreload = [durian001, papaya001, pitaya001, watermelon001, kiwano001, rambutan001]
imagePreload.forEach(imgUrl => {
  const img = new Image();
  img.src = imgUrl;
})

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
