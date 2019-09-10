import React from "react";
import styled from '@emotion/styled'
import { Div } from '../layouts/layout'
import { colors, shadows } from '../../style/theme'

import { withRouter } from 'react-router-dom'

import { setStatusbarColor } from '../utility/utility.js'
import { headerCardPrimary, headerCardSecondary } from '../components/typography'

import { listCardHeader,  listCardSubHeader, headerFoodTitle, listSubHeader } from '../components/typography'

import { IconAdd  } from '../../img/icons/Icons'
import { connect } from 'react-redux'

import Image from '../components/image'

const FoodItemContainer = styled(Div)((item) => {
  return {
    width: "150px",
    height: "200px",
    borderRadius: "10px",
    flexWrap: "wrap",
    boxShadow: shadows.cardShadow,
    margin: "15px 0px",
    backgroundColor: "white",
    transition: "transform 0.2s",
    "&:active": {
      transform: "scale(1.05)"
    }
  }
})

const FoodItem = ({item, navigateToDetails}) => {
  return (
    <FoodItemContainer onClick={() => { navigateToDetails(item.id, item) }}>
      <Div height="100px" mt="3" position="relative" width="100%">
        <Image src={item.img} style={{width: "70%", height: "80%", objectFit: "contain", margin: "0px auto", position: "relative", zIndex: "1" }} />
      </Div>
      <Div flexDirection="column" flex="1" p="2">
        <h2 style={{...headerCardPrimary }} >{item.title}</h2>
        <Div justifyContent="space-between" flex="1" alignItems="center">
          <h6 style={{...headerCardSecondary }}>${item.price}</h6>
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
  
  return (
    <Div backgroundColor="themeLight2" flexWrap="wrap" p="4">
      <h1 style={headerFoodTitle}>Exotic fruits</h1>
      <h2 style={listSubHeader}>More than 70 exotic fruits</h2>
      <Div flexWrap="wrap" justifyContent="space-between" mt="3">
        {
          Object.values(foodItems).map((item) => 
            <FoodItem key={item.id} item={item} navigateToDetails={navigateToDetails} />
            )
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