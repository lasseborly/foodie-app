import React from "react";
import styled from '@emotion/styled'
import { Div } from '../layouts/layout'
import { colors, shadows } from '../../style/theme'

import { withRouter } from 'react-router-dom'

import { setStatusbarColor } from '../utility/utility.js'

import { listCardHeader, listCardSubHeader, headerFoodTitle, listSubHeader } from '../components/typography'

import { IconAdd  } from '../../img/icons/Icons'
import {useTrail, animated, config} from 'react-spring'
import { connect } from 'react-redux'

const FoodItemContainer = styled(Div)((item) => {
  return {
    width: "150px",
    height: "200px",
    borderRadius: "10px",
    flexWrap: "wrap",
    boxShadow: shadows.cardShadow,
    margin: "15px 0px"
  }
})

const FoodItem = ({item, navigateToDetails}) => {
  return (
    <FoodItemContainer backgroundColor={item.bgColor} onClick={() => { navigateToDetails(item.id, item) }}>
      <Div height="100px" mt="3" position="relative" width="100%">
        <img src={item.img} style={{width: "70%", height: "80%", objectFit: "contain", margin: "0px auto", position: "relative", zIndex: "1" }}/>
        {/* <img src={item.img} style={{width: "100%", height: "80%", objectFit: "contain", margin: "0px auto", left: 0, right: 0, bottom: "15px", position: "absolute", filter: "blur(8px)", opacity: 0.75}}/> */}
      </Div>
      <Div flexWrap="wrap" flex="1" p="2">
        <h2 style={{...listCardHeader, width: "100%", opacity: 0.65}}>{item.title}</h2>
        <Div justifyContent="space-between" flex="1" alignItems="center">
          <h6 style={{...listCardSubHeader, color: colors.themeDark1 }}>${item.price}</h6>
          <IconAdd color={colors.themeDark1} strokeWidth="2" />
        </Div>
      </Div>
    </FoodItemContainer>
  )
}

const List = ({ history, foodItems }) => {
  
  setStatusbarColor("themeRed1")

  function navigateToDetails (id, food) {
    history.push({
      pathname: `/detail/food/${id}`,
      search: '?query=abc',
      state: { food }
    })
  }

  const trail = useTrail(Object.values(foodItems).length, {
    opacity: 1,
    y: 0,
    from: { opacity: 0, y: 40 },
    config: { mass: 0.7, tension: 210, friction: 14 }
  })

  return (
    <Div backgroundColor="themeLight2" flexWrap="wrap" p="4" height="100%">
      <h1 style={headerFoodTitle}>Exotic fruits</h1>
      <h2 style={listSubHeader}>More than 70 exotic fruits</h2>
      <Div flexWrap="wrap" justifyContent="space-between" mt="3">
        {
          trail.map(({ y, opacity }, index) => <animated.div 
            style={{opacity, transform: y.interpolate(y => `translate3d(0,${y}px,0)`)}}
            key={index}>
            <FoodItem item={Object.values(foodItems)[index]} navigateToDetails={navigateToDetails} />
          </animated.div> )
        }
      </Div>
    </Div>
  )
  
  }

function mapStateToProps (store) {
  return {
    foodItems: store.app.foodItems
  }
}

export default connect(mapStateToProps)(withRouter(List));