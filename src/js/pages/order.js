import React, {useState, useRef} from "react";
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

import RowInteraction from '../components/rowInteraction'
import debounce from 'debounce'

const debounceSetState = debounce((fn, newState) => {fn(newState)}, 1000)
const debounceSetState2 = debounce((fn, newState) => {fn(newState)}, 500)

const FoodListItem = ({ foodItem, basketItem, navigateToDetails, scrollActive, handleDrag }) => {
  const { quantity } = basketItem

  return (
    <RowInteraction damping={0.4} tension={400} scrollActive={scrollActive} handleDrag={handleDrag}>
      <Div flex="1" p="2" backgroundColor="themeLight1" height="75px" borderBottom={`1px solid ${colors.grey1}`} style={{boxShadow: shadows.sectionShadow}}>
        <Div width="120px">
          <img 
            onClick={() => navigateToDetails(foodItem.id, foodItem)}
            src={foodItem.img} alt="" width="100%" style={{objectFit: "contain", height:"50px"}}
          />
        </Div>
        <Div justifyContent="space-between" width="100%"alignItems="center">
          <Div p="1"><span style={headerCardPrimary}>{quantity}</span></Div>
          <Div px="0"><span style={{...headerCardPrimary, fontWeight: 100, fontSize: "0.6rem"}}>✖</span></Div>
          <Div px="1" flex="1"><span style={headerCardPrimary}>{foodItem.title}</span></Div>
          <Div pl="2"><span style={headerCardPrimary}>{foodItem.price * quantity}</span></Div>
        </Div>
      </Div>
    </RowInteraction>
  )
}

const FoodListItemFallback = () => {
  return <Div p="5" justifyContent="center" alignItems="center" height="300px">
    <h2 style={{...listSubHeader, width:"100%", display: "block"}}>Ingen ting i din kurv</h2>
  </Div>
}

const Order = ({basket, foodItems, clearProductsFromBasket, history}) => {
    let touchStatusActive = false
    let scrollStarted = false
    // document.addEventListener("touchstart", () =>  {
    //   touchStatusActive = true
    // })
    // document.addEventListener("touchend", () =>  {
    //   touchStatusActive = false
    // })
    
    setStatusbarColor("themeRed1")
    const [scrollActive, setScrollStatus] = useState(false)
    const [dragActive, setDragStatus] = useState(false)
    let inputRef = useRef(null);

    const totalPrice = Object.values(basket).reduce((acc, i) => Number(foodItems[i.id]["price"]) * i.quantity + acc, 0).toFixed(2)

    function navigateToDetails (id, food) {
      history.push({
        pathname: `/detail/food/${id}`,
        state: { food }
      })
    }

    const handleScroll = (e) => {
      if (dragActive) { return }
      if (!inputRef) { return }
      if (scrollActive === false) {
        console.log("-------------");
        console.log("SCROLL: START");
        document.addEventListener("touchend", () =>  {
          debounceSetState(() => {
            console.log("SCROLL: END");
            setScrollStatus(false)
          })
        }, {once: true})
        setScrollStatus(true)
      }
    }  

    const handleDrag = (newState) => {
      // if (scrollActive) {return}

      // if (dragActive === false) {
      //   setDragStatus(true)
      // }
      // debounceSetState2(setDragStatus, false)
    }
    
    // console.log("scrollActive", scrollActive)
    // console.log("dragActive", dragActive)

    return <Div backgroundColor="themeLight2" flexDirection="column" height="100%" pt="4">
        {/* HEADER */}
        <Div px="4" pb="3" justifyContent="space-between" height="15vh" borderBottom={`1px solid ${colors.grey1}`}>
          <Div flexWrap="wrap">
            <h1 style={{...headerFoodTitle, width:"100%", display: "block"}}>Order</h1>
            <h2 style={{...listSubHeader, width:"100%", display: "block"}}>Your products selected</h2>
          </Div>
          <Div alignItems="center">
            <Div onClick={clearProductsFromBasket} height="50px" width="50px" alignItems="center" justifyContent="center">
              <IconTrash />
            </Div>
          </Div>
        </Div>

      {/* PRODUCT ITEMS */}
      <Div width="100vw" height="65vh" display="block" style={{position:"relative", overflowY: dragActive ? "hidden" : "scroll", overflowX: "hidden", borderBottom: `3px solid ${scrollActive ? "blue" : dragActive ? "red" : "transparent"}`}} 
        onScroll={handleScroll}
        ref={inputRef}
        >
        {
          basket.length === 0 
            ? <FoodListItemFallback />
            : Object.values(basket).map(item => <FoodListItem 
              foodItem={foodItems[item.id]} 
              basketItem={item} key={item.id} 
              navigateToDetails={navigateToDetails}
              scrollActive={scrollActive}
              handleDrag={handleDrag}
            />
          )
        }
      </Div>

      {/* TOTAL PRICE */}
      <Div minHeight="20vh" backgroundColor="white" px="4" py="3" flexDirection="column" justifyContent="space-between" borderTop={`1px solid ${colors.grey1}`}>
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