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


function swipedetect(el, callback){
  
  var touchsurface = document.querySelector(".css-307dnl-Div"),
  swipedir,
  startX,
  startY,
  distX,
  distY,
  threshold = 150, //required min distance traveled to be considered swipe
  restraint = 100, // maximum distance allowed at the same time in perpendicular direction
  allowedTime = 300, // maximum time allowed to travel that distance
  elapsedTime,
  startTime,
  handleswipe = callback || function(swipedir){
    console.log("swipedir", swipedir)
  }

  touchsurface.addEventListener('touchstart', function(e){
      var touchobj = e.changedTouches[0]
      swipedir = 'none'
      dist = 0
      startX = touchobj.pageX
      startY = touchobj.pageY
      startTime = new Date().getTime() // record time when finger first makes contact with surface
      e.preventDefault()
  }, false)

  touchsurface.addEventListener('touchmove', function(e){
      e.preventDefault() // prevent scrolling when inside DIV
  }, false)

  touchsurface.addEventListener('touchend', function(e){
      var touchobj = e.changedTouches[0]
      distX = touchobj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
      distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface
      elapsedTime = new Date().getTime() - startTime // get time elapsed
      if (elapsedTime <= allowedTime){ // first condition for awipe met
          if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){ // 2nd condition for horizontal swipe met
              swipedir = (distX < 0)? 'left' : 'right' // if dist traveled is negative, it indicates left swipe
          }
          else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){ // 2nd condition for vertical swipe met
              swipedir = (distY < 0)? 'up' : 'down' // if dist traveled is negative, it indicates up swipe
          }
      }
      handleswipe(swipedir)
      e.preventDefault()
  }, false)
}

swipedetect()