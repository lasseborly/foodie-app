import React from "react";
import styled from '@emotion/styled'
import { colors, shadows } from '../../style/theme'
import { buttonDefault } from '../components/typography'

const Button = styled.button({
    backgroundColor: colors.themeRed3,
    border: "none",
    boxShadow: shadows.buttonShadow,
    borderRadius: "20px",
    height: "40px",
    padding: "0px 20px",
    display: "flex",
    alignItems: "center",
    color: "white",
    minWidth: "200px",
    ...buttonDefault
  })

  export default Button