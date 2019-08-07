import React, { useState } from "react";
import { Div } from '../layouts/layout'
import styled from '@emotion/styled'
import { colors, space, shadows } from '../../style/theme'
import { IconArrow, IconCart } from '../../img/icons/Icons'

import { Link, withRouter } from 'react-router-dom'
import imgsrc1 from '../../img/images/food/durian-monthong001.png'

import { textBagdeCounter } from '../components/typography'
import { connect } from "react-redux";

import { addProductToBasket } from '../store/actions/action_basket'

const NAVTOP_HEIGHT = 50

const NavTopContainer = styled(Div)({
  position: "fixed",
  width: "100vw",
  height: `${NAVTOP_HEIGHT}px`,
  top: "0px",
  zIndex: 1,
  alignItems: "center",
  justifyContent: "space-between",
  transition: "0.3s",
  marginTop: "10px"
})

const styledLinks = {
  height: `${NAVTOP_HEIGHT}px`,
  width: `${NAVTOP_HEIGHT}px`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: `0px ${space[2]}`
}

const StyledLink = styled(Link)(({to}) => {
  const { slideNavTop, showNavTop } = to.state
  return {
    ...styledLinks,
    transform: `translateX(${slideNavTop})`,
    transition: showNavTop ? "0.5s" : "0s",
  }
})
const CartMenu = styled(Div)(({ active }) => ({
  backgroundColor: colors.grey1,
  // border: `1px solid ${colors.themeRed1}`,
  height: `60px`,
  width: "120px",
  borderTopLeftRadius: "30px",
  borderBottomLeftRadius: "30px",
  alignItems: "center",
  boxShadow: shadows.sectionShadow,
  transform: `translateX(${active ? 0 : 50}px)`,
  transition: "transform 0.3s"
}))

const COUNTER_HEIGHT = 15

const CartCounter = styled(Div)(({ count }) => ({
  borderRadius: "100%",
  backgroundColor: colors.lightBrown2, 
  width: `${15}px`,
  height: `${15}px`,
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  top: "5px",
  right: "5px",
  overflow: "hidden"
}))

const numbers = [0,1,2,3,4,5,6,7,8,9, 10]

const NavTop = (props) => {
  const [popout, setPopout] = useState({
    active: false,
    key: undefined
  })
  const { history, items } = props

  const showNavTop = history.location.pathname === "/detail/food/10"
  const slideNavTop = showNavTop ? "0px" : "100px"
  const iconColor = colors.themeDark3
  const maxNumber = 9
  const totalItemsInBasket = Object.values(items).reduce((acc, item) => acc + item.quantity,0)
  
  if (totalItemsInBasket && (totalItemsInBasket !== popout.key)) {
    setPopout({active: true, key: totalItemsInBasket})
    setTimeout(() => setPopout({active: false, key: totalItemsInBasket}), 2500)
  }

  return <NavTopContainer>
    <StyledLink to={{pathname: "/", state: {showNavTop, slideNavTop: "-" + slideNavTop}}}>
      <IconArrow stroke={iconColor} fill={iconColor} />
    </StyledLink>

    <CartMenu active={popout.active}>
      <Div style={{...styledLinks, position: "relative"}} onClick={() => history.push('/')}>
        <IconCart stroke={iconColor} fill={iconColor} />
        <CartCounter>
          <Div 
            flexDirection="column" 
            position="absolute" 
            top="1px" 
            style={{
              transform: `translateY(-${((totalItemsInBasket) > maxNumber ? (9 + 1) : totalItemsInBasket) * COUNTER_HEIGHT}px)`, 
              transition: "transform 0.3s"}}>
            {
              numbers.map(number => <span key={number} style={{...textBagdeCounter, textAlign: "center", height: COUNTER_HEIGHT}}>
              {number > maxNumber ? "+9" : number}
              </span>)
            }
          </Div>
        </CartCounter>
      </Div>
      <img src={imgsrc1} alt="" style={{
        height: "40px", 
        width: "40px", 
        objectFit: "cover", 
        borderRadius: "50%", 
        backgroundColor: colors.white, 
        padding: "5px"
        }}/>
    </CartMenu>

  </NavTopContainer>
}

function mapStateToProps (store) {
  return {items: store.basket.items}
}

export default connect(mapStateToProps, null)(withRouter(NavTop))