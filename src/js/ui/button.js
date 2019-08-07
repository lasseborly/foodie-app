import React from "react";
import styled from '@emotion/styled'
import { colors, shadows } from '../../style/theme'
import { buttonDefault } from '../components/typography'

const Button = styled.button(({bgColor, color}) => {
  return {
    backgroundColor: bgColor || colors.themeRed3,
    border: "none",
    // boxShadow: shadows.buttonShadow(bgColor || colors.themeRed3),
    borderRadius: "12px",
    height: "45px",
    padding: "0px 18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: color || "white",
    minWidth: "200px",
    ...buttonDefault
  }
})

  export default Button