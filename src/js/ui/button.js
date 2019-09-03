import React from "react";
import styled from '@emotion/styled'
import { colors, shadows } from '../../style/theme'
import { buttonDefault } from '../components/typography'

const Button = styled.button(({color, ...props}) => {
  return {
    backgroundColor: colors.themeRed3,
    border: "none",
    borderRadius: "22px",
    height: "45px",
    padding: "0px 18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: color || "white",
    minWidth: "200px",
    transition: "0.15s",
    ...buttonDefault,
    ...props,
    "&:active": {
      backgroundColor: colors.themeRed1
    }
  }
})

  export default Button