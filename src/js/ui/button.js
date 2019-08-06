import React from "react";
import styled from '@emotion/styled'
import { colors, shadows } from '../../style/theme'
import { buttonDefault } from '../components/typography'

const Button = styled.button(({bgColor, color}) => {
  return {
    backgroundColor: bgColor || colors.themeRed3,
    border: "none",
    // boxShadow: shadows.buttonShadow(bgColor || colors.themeRed3),
    borderRadius: "16px",
    height: "45px",
    padding: "0px 25px",
    display: "flex",
    alignItems: "center",
    color: color || "white",
    minWidth: "200px",
    ...buttonDefault
  }
})

  export default Button