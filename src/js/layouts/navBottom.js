import React from "react";
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { IconFruitBasket, IconHome, IconReciept, IconProfile } from '../../img/icons/Icons'

import { buttonNav } from '../components/typography'
import { colors, shadows } from '../../style/theme'

const NAVBOTTOM_HEIGHT = 50

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

const NavBottomLinks = ({to, icon, text}) => {
  return (
    <StyledLink to={to} >
      <div>{ icon }</div>
      <StyledNavText>{ text }</StyledNavText>
    </StyledLink>
  )
}

const NavBottom = () => {
    const links = [
      {
        to: "/",
        icon: <IconHome />,
        text: "home"
      },
      {
        to: "/detail/recipes/10",
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
    return <NavBottomContainer>
      { links.map(i =>  <NavBottomLinks key={i.to} {...i} /> ) }
    </NavBottomContainer>
  }

export default NavBottom

