import React, {useState} from "react";
import styled from '@emotion/styled'

import { Div } from '../layouts/layout'
import { colors, shadows } from '../../style/theme'

import { setStatusbarColor } from '../utility/utility.js'
import { headerCardPrimary, headerFoodTitle, listSubHeader, orderTotal, orderPrice } from '../components/typography'

import Button from '../ui/button'

import { IconTrash } from '../../img/icons/Icons'

import { clearProductsFromBasket } from '../store/actions/action_basket'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import touchMonitor from '../utility/swipe'

import RowInteraction from '../components/rowInteraction'

function sortKeys ( a, b ) {
  if ( a.id < b.id ){
    return -1;
  }
  if ( a.id > b.id ){
    return 1;
  }
  return 0;
}

const FoodListItemFallback = () => {
  return <Div p="5" justifyContent="center" alignItems="center" height="300px">
    <h2 style={{...listSubHeader, width:"100%", display: "block"}}>Ingen ting i din kurv</h2>
  </Div>
}

const Order = ({basket, foodItems, clearProductsFromBasket, history}) => {

    setStatusbarColor("themeRed1")
    const [touchStatus, setTouchStatus] = useState("scroll")
    const [touchListen, setTouchListen] = useState(false)
    const totalPrice = Object.values(basket).reduce((acc, i) => Number(foodItems[i.id]["price"]) * i.quantity + acc, 0).toFixed(2)

    if (touchListen === false) {
      touchMonitor(setTouchStatus)
      setTouchListen(true)
    }

    function navigateToDetails (id, food) {
      history.push({
        pathname: `/detail/food/${id}`,
        state: { food }
      })
    }    

    return <Div backgroundColor="themeLight2" flexDirection="column" height="100%" pt="4">
        {/* HEADER */}
        <Div px="4" pb="3" justifyContent="space-between" height="15vh" borderBottom={`1px solid ${colors.grey1}`}>
          <Div flexWrap="wrap">
            <h1 style={{...headerFoodTitle, width:"100%", display: "block"}}>Order</h1>
            <h2 style={{...listSubHeader, width:"100%", display: "block"}}>{
              "Products in basket"
            }</h2>
          </Div>
          <Div alignItems="center">
            <Div onClick={clearProductsFromBasket} height="50px" width="50px" alignItems="center" justifyContent="center">
              <IconTrash />
            </Div>
          </Div>
        </Div>

      {/* PRODUCT ITEMS */}
      <Div 
        id="test"
        width="100vw" 
        height="68vh" 
        display="block" 
        style={{
          position:"relative", 
          overflowY: "scroll", 
          overflowX: "hidden", 
          // borderBottom: `3px solid ${touchStatus === "scroll" ? "blue" : (touchStatus === "drag") ? "red" : "transparent"}`,
          // scrollSnapType: "mandatory",
          // scrollSnapPointsY: "repeat(125px)",
          // scrollSnapType: "y mandatory",
          "WebkitOverflowScrolling": "touch",
        }}
        >
        {
          basket.length === 0 
            ? <FoodListItemFallback />
            : Object.values(basket).sort(sortKeys).map(item => <RowInteraction
              key={item.id} 
              foodItem={foodItems[item.id]} 
              basketItem={item} 
              navigateToDetails={navigateToDetails}
              touchActive={touchStatus === "drag"}
            />
          )
        }
      </Div>

      {/* TOTAL PRICE */}
      <Div minHeight="18vh" backgroundColor="white" px="4" py="3" flexDirection="column" justifyContent="space-between" borderTop={`1px solid ${colors.grey1}`}>
        <Div justifyContent="space-between">
          <h4 style={orderTotal}>Total</h4>
          <h4 style={orderPrice}>{"$" + totalPrice }</h4>
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

export default connect(mapStateToProps, { clearProductsFromBasket })(withRouter(Order))