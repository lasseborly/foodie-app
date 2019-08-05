import React from "react";
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { IconFruitBasket, IconHome, IconHomeActive, IconReciept, IconProfile } from '../../img/icons/Icons'

import { buttonNav } from '../components/typography'
import { colors, shadows } from '../../style/theme'

export const NAVBOTTOM_HEIGHT = 50

const NavBottomContainer = styled.div({
  height: `${NAVBOTTOM_HEIGHT}px`, 
  display: "flex", 
  backgroundColor: colors.white, 
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: shadows.bottomNavigationShadow,
  position: "relative" // otherwise, box-shadow isn't visible
})

const StyledLink = styled(Link)({
  flex: 1, 
  display: "flex", 
  justifyContent: "center", 
  alignItems: "center", 
  height: "100%",
  flexDirection: "column"
})

const StyledNavText = styled.div(buttonNav)

const links = [
  {
    to: "/",
    icon: <IconHome />,
    iconActive: <IconHomeActive />,
    text: "home"
  },
  {
    to: "/detail/food/10",
    icon: <IconFruitBasket />,
    text: "mad"
  },
  {
    to: "/order",
    icon: <IconReciept />,
    text: "ordre"
  },
  {
    to: "/profile",
    icon: <IconProfile />,
    text: "profil"
  }
]

const NavBottomLinks = ({to, icon, iconActive, text, active}) => {
  return (
    <StyledLink to={to} >
      <div>{ (active && iconActive)? iconActive : icon }</div>
      <StyledNavText>{ text }</StyledNavText>
    </StyledLink>
  )
}

const NavBottom = ({history}) => {
    return <NavBottomContainer>
      { links.map(i =>  <NavBottomLinks active={i.to === history.location.pathname} key={i.to} {...i} /> ) }
    </NavBottomContainer>
  }

export default NavBottom

