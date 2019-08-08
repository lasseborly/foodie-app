import React from "react";
import styled from '@emotion/styled'

import { Div } from '../layouts/layout'
import { colors, shadows } from '../../style/theme'

import { connect } from 'react-redux'
import { setStatusbarColor } from '../utility/utility.js'
import { listCardHeader, listCardSubHeader, headerFoodTitle, listSubHeader } from '../components/typography'

import Button from '../ui/button'

const FoodListItem = ({item}) => {
  return (
    <Div>
    { item.id }
  </Div>
  )
}

const Order = ({foodItems}) => {
  console.log(foodItems);
  
  setStatusbarColor("themeDark1")
    return <Div backgroundColor="themeLight2" flexDirection="column" height="100%">
      <Div p="4" flexDirection="column">
        <h1 style={headerFoodTitle}>Order</h1>
        <h2 style={listSubHeader}>Your selected products</h2>
      </Div>
      <Div alignSelf="start" height="100%">
        {
          Object.values(foodItems).map(item => <FoodListItem item={item} key={item.id} /> )
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
    foodItems: store.basket.items
  }
}

export default connect(mapStateToProps)(Order)