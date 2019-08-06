import React from "react";
import { Div } from '../layouts/layout'
import styled from '@emotion/styled'
import { colors } from '../../style/theme'
import { IconArrow, IconCart } from '../../img/icons/Icons'

import { Link, withRouter } from 'react-router-dom'

const NAVTOP_HEIGHT = 50

const NavTopContainer = styled(Div)({
  position: "fixed",
  width: "100vw",
  height: `${NAVTOP_HEIGHT}px`,
  top: "0px",
  zIndex: 1,
  alignItems: "center",
  justifyContent: "space-between",
  transition: "0.3s"
})

const StyledLink = styled(Link)(({to}) => {
  const { slideNavTop,showNavTop } = to.state
  return {
    transform: `translateX(${slideNavTop})`,
    transition: showNavTop ? "0.5s" : "0s",
    height: `${NAVTOP_HEIGHT}px`,
    width: `${NAVTOP_HEIGHT}px`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
})

const NavTop = ({history}) => {
  const showNavTop = history.location.pathname === "/detail/food/10"
  const slideNavTop = showNavTop ? "0px" : "100px"
  const iconColor = colors.themeDark3
  return <NavTopContainer p="2">
    <StyledLink to={{pathname: "/", state: {showNavTop, slideNavTop: "-" + slideNavTop}}}>
      <IconArrow stroke={iconColor} fill={iconColor} />
    </StyledLink>
    <StyledLink to={{pathname: "/", state: {showNavTop, slideNavTop}}}>
      <IconCart stroke={iconColor} fill={iconColor} />
    </StyledLink>
  </NavTopContainer>
}

export default withRouter(NavTop)