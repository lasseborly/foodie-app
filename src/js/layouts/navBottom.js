import React, {useState} from "react";
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { IconHome, IconHomeActive, IconReciept, IconRecieptActive, IconProfile, IconProfileActive, IconBasket, IconBasketActive  } from '../../img/icons/Icons'

import { buttonNav } from '../components/typography'
import { colors, shadows } from '../../style/theme'
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'

export const NAVBOTTOM_HEIGHT = 50

const NavBottomContainer = styled.div(({config}) => {
  const {navBottomShow, navBottomDisplay} = config
  return {
    height: `${NAVBOTTOM_HEIGHT}px`,
    display: "flex", 
    backgroundColor: colors.white, 
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: shadows.bottomNavigationShadow,
    position: navBottomDisplay || "relative", // otherwise, box-shadow isn't visible
    transform: `translateY(${navBottomShow ? 0 : NAVBOTTOM_HEIGHT}px)`,
    transition: "transform 0.2s",
    bottom: 0,
    zIndex: 1,
    width: "100vw"
  }
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
    to: "/list",
    icon: <IconBasket />,
    iconActive: <IconBasketActive />,
    text: "mad"
  },
  {
    to: "/order",
    icon: <IconReciept />,
    iconActive: <IconRecieptActive />,
    text: "ordre"
  },
  {
    to: "/profile",
    icon: <IconProfile />,
    iconActive: <IconProfileActive />,
    text: "profil"
  }
]
const NavBottom = ({history, navBottomShow, navBottomDisplay}) => {
  return <NavBottomContainer config={{navBottomShow, navBottomDisplay}}>
    { links.map(i => {
      const {text, iconActive, icon, to} = i
      return (
        <StyledLink to={to} key={to}>
          <div>{ (to === history.location.pathname && iconActive)? iconActive : icon }</div>
          <StyledNavText>{ text }</StyledNavText>
        </StyledLink>
      )} ) }
  </NavBottomContainer>
}

function mapStateToProps (store) {
  return {
    navBottomShow: store.app.navBottomShow,
    navBottomDisplay: store.app.navBottomDisplay
  }
}

export default connect(mapStateToProps)(withRouter(NavBottom))

