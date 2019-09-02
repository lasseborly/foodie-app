import React, { useState } from "react";
import { Div } from '../layouts/layout'
import styled from '@emotion/styled'
import { colors, space, shadows } from '../../style/theme'
import { IconArrow, IconCart } from '../../img/icons/Icons'
import { Spring, animated, interpolate } from "react-spring/renderprops";

import { Link, withRouter } from 'react-router-dom'
import imgsrc1 from '../../img/images/food/durian001.png'

import { textBagdeCounter } from '../components/typography'
import { connect } from "react-redux";

import debounce from 'debounce'

const NAVTOP_HEIGHT = 50
const POPUP_DURATION = 1500

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

const CartMenu = styled(Div)(({ active }) => ({
  backgroundColor: colors.grey1,
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
  backgroundColor: colors.themeRed3, 
  width: `${15}px`,
  height: `${15}px`,
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  top: "5px",
  right: "5px",
  overflow: "hidden",
  transition: "transform 0.3s",
  transform: count ? "scale(1)" : "scale(0)"
}))

const CartFoodItem = React.memo(({active, foodImg}) => {
  return (
     <Spring
      native
      reset={active}
      from={{ s: 0.5 }}
      to={{ s: 1 }}
      config={{tension: 800, mass: 3 }}
      >
      {({ s }) => <animated.div style={{ transform: interpolate([s], scale => `scale(${scale})`), display: "flex"}}>
              <img src={foodImg} alt="" style={{
                height: "40px", 
                width: "40px", 
                objectFit: "cover", 
                backgroundColor: "white",
                position: "absolute",
                zIndex: "-1",
                borderRadius: "100%",
                padding: "6px"
              }}/>
          <Spring
            native
            reset={active}
            from={{ x: 125 }}
            to={{ x: 0 }}
            config={{duration: POPUP_DURATION}}
          >
            {({ x }) => <animated.svg
              height="40" width="40"
              fill="transparent"
              strokeDasharray={125}
              strokeDashoffset={x}
              stroke={colors.themeRed1}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2" 
            >
              <circle cx="20" cy="20" r="18" />
            </animated.svg>}
          </Spring>
          </animated.div>}
    </Spring>
  )
})

const numbers = [0,1,2,3,4,5,6,7,8,9, 10]
const setPopoutDebounce = debounce((fn, newState) => fn(newState), POPUP_DURATION)

const NavTop = (props) => {
  const foodImg = props.location.state.food && props.location.state.food.img
  
  const { history, items } = props
  const iconColor = colors.themeDark3
  const maxNumber = 9
  const totalItemsInBasket = Object.values(items).reduce((acc, item) => acc + item.quantity,0)

  const [popout, setPopout] = useState({
    active: false,
    key: totalItemsInBasket
  })
  
  if (totalItemsInBasket && (totalItemsInBasket !== popout.key)) {
    setPopout({active: true, key: totalItemsInBasket})
    setPopoutDebounce(setPopout, {active: false, key: totalItemsInBasket})
  }

  return <NavTopContainer>
    <Div style={{...styledLinks, transition: "0.5s" }} onClick={ () => history.goBack() }>
      <IconArrow stroke={iconColor} fill={iconColor} />
    </Div>
    <CartMenu active={popout.active}>
      <Div style={{...styledLinks, position: "relative"}} onClick={() => history.push('/order')}>
        <IconCart stroke={iconColor} fill={iconColor} />
        <CartCounter count={totalItemsInBasket}>
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
      <CartFoodItem active={popout.key} foodImg={foodImg} />
    </CartMenu>

  </NavTopContainer>
}

function mapStateToProps (store) {
  return {items: store.basket.items}
}

export default connect(mapStateToProps, null)(withRouter(NavTop))