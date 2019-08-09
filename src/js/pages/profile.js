import React from "react";
import styled from '@emotion/styled'
import { setStatusbarColor } from '../utility/utility.js'

import { Div } from '../layouts/layout'
import { colors, shadows } from '../../style/theme'
import { headerCardPrimary, headerFoodTitle, listSubHeader, orderTotal, orderPrice } from '../components/typography'

const Profile = () => {
    setStatusbarColor("themeRed1")

    return <Div p="4">
        <h1 style={{...headerFoodTitle, width:"100%", display: "block"}}>Profile</h1>
    </Div>
  }

export default Profile