import React from "react";
import styled from '@emotion/styled'
import { setStatusbarColor } from '../utility/utility.js'

import { Div } from '../layouts/layout'
import { colors, shadows } from '../../style/theme'
import { headerCardPrimary, headerFoodTitle, listSubHeader, orderTotal, orderPrice } from '../components/typography'

const Profile = () => {
    setStatusbarColor("themeRed1")
    console.log("window.ReactNativeWebView", window.ReactNativeWebView)
    return <Div p="4" css={{display: "block"}}>
        <h1 style={{...headerFoodTitle, width:"100%", display: "block"}}>Profile</h1>
        <Div >
          <h4>ReactNativeWebView btn:</h4>
          <p>{JSON.stringify(window.ReactNativeWebView)}</p>
        {
          window.ReactNativeWebView && <button onClick={() => {
            window.ReactNativeWebView.postMessage("Vibrate!")
          }}>Vibrate</button>
          }
        </Div>
    </Div>
  }

export default Profile