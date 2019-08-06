import React, {useState} from "react";
import styled from '@emotion/styled'

import { Div } from '../layouts/layout'

import { textBadge } from '../components/typography'
import { shadows, colors } from '../../style/theme'

const BadgeContainer = styled(Div)({
    borderRadius: "5px",
    padding: "5px",
    paddingLeft: "8px",
    minWidth: "60px",
    boxShadow: shadows.badgeShadow,
    alignItems: "center",
})

const Badge = ({text, color}) => {
    return (
        <BadgeContainer mr="2" bg={"#876863"}>
            <span style={textBadge}>{ text }</span>
        </BadgeContainer>
    )
}

export default Badge