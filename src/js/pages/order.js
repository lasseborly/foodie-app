import React from "react";
import styled from '@emotion/styled'

import { Div } from '../layouts/layout'
import { colors, shadows } from '../../style/theme'

import { connect } from 'react-redux'
import { setStatusbarColor } from '../utility/utility.js'
import { listCardHeader, listCardSubHeader, headerFoodTitle, listSubHeader } from '../components/typography'

import Button from '../ui/button'

const FoodListItem = ({item}) => {
  console.log(item);
  
  return (
    <Div>
      { item.id }
    </Div>
  )
}

const Order = ({basket, foodItems}) => {
  setStatusbarColor("themeDark1")
    return <Div backgroundColor="themeLight2" flexDirection="column" height="100%">
      <Div p="4" flexDirection="column">
        <h1 style={headerFoodTitle}>Order</h1>
        <h2 style={listSubHeader}>Your selected products</h2>
      </Div>
      <Div alignSelf="start" height="100%" flexDirection="column">
        {
          Object.values(basket).map(item => <FoodListItem item={foodItems[item.id]} key={item.id} /> )
        }
      </Div>
      <Div minHeight="125px" backgroundColor="white" px="4" py="3" flexDirection="column" justifyContent="space-between" borderTop={`1px solid ${colors.grey1}`}>
        <Div justifyContent="space-between">
          <h4>Total</h4>
          <h4>$18</h4>
        </Div>
        <Button justifyContent="center" width="100%">
          Checkout
        </Button>
      </Div>
    </Div>
  }

function mapStateToProps (store) {
  return {
    basket: store.basket.items,
    foodItems: store.app.foodItems
  }
}

export default connect(mapStateToProps)(Order)