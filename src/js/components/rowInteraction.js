import React from "react";
import styled from '@emotion/styled'
import Interactable from 'react-interactable/noNative'

import { Div } from '../layouts/layout'
import { colors, shadows } from '../../style/theme'
import { IconTrash } from '../../img/icons/Icons'
import { connect } from "react-redux";

import {incrementProductFromBasket, decrementProductFromBasket, removeProductFromBasket} from '../store/actions/action_basket'
import { headerCardPrimary } from '../components/typography'

import Image from '../components/image'

window.direction = null

const RowIconStyled = styled(Div)(({ bgColor }) => {
  return {
    width: 75,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: bgColor,
    color: "white",
    transition: "opacity 0.2s",
    "&:active": {
      opacity: "0.5"
    }
  }
})

const RowIcon = ({title, ...props}) => {
  return <RowIconStyled {...props}>
  <h1>{title}</h1>
</RowIconStyled>
}

const RowIconContainer = styled.div(({side}) => ({
    height: 75, 
    display: "flex",
    flexDirection: 'row', 
    alignItems: 'center',
}))

class Row extends React.PureComponent {
    constructor(props) {
      super(props);
    //   this._deltaX = new Animated.Value(0);
      this.state = {isMoving: false, position: 1};
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //   // console.log(nextProps, nextState)
    //   const { touchActive } = this.props
    //   if (nextState.isMoving === this.state.isMoving && nextState.position === this.state.position) {
    //       console.log(nextProps.basketItem.id, nextState, this.state)
    //       return false
    //     }
    //     // this.interactableElem.snapTo({index: 1})
    //     // console.log(this.interactableElem);
        
    //   return true
    // }

    // componentDidUpdate () {
    //   // Snapping items back in place when start scrolling
    //   if (this.props.touchActive === false && this.interactableElem) {
    //     if (this.interactableElem.lastEnd.x !== 0) {
    //       this.interactableElem.snapTo({index: 1})
    //       console.log("SNAPPING ", this.props.foodItem.id)
    //     }
    //   }
    // }

    render() {
      const tension = 800
      const { 
        incrementProductFromBasket, 
        decrementProductFromBasket, 
        removeProductFromBasket,
        navigateToDetails,
        foodItem,
        basketItem,
        touchActive
      } = this.props

      return (
        <Div 
            flex="1"
            justifyContent="space-between"
            backgroundColor="themeLight2" 
            height="75px"
            width="100vw"
            borderBottom={`1px solid ${colors.grey1}`}
            style={{boxShadow: shadows.sectionShadow, "scrollSnapAlign": "start" }}>
                
          <RowIconContainer>
            <RowIcon title={ <IconTrash  /> } bgColor="#FFD819" onClick={() => removeProductFromBasket(foodItem.id)} />
          </RowIconContainer>

          <RowIconContainer>
            <RowIcon title="+" bgColor="#DAE69B" onClick={() => incrementProductFromBasket(foodItem.id)}/>
            <RowIcon title="-" bgColor="#FF8B7C" onClick={() => decrementProductFromBasket(foodItem.id)}/>
          </RowIconContainer>

          <Interactable.View
            dragEnabled={touchActive}
            // boundaries={boundary}
            ref={el => this.interactableElem = el}
            horizontalOnly={true}
            snapPoints={[
              {x: 75, damping: 0.6, tension},
              {x: 0, damping: 0.6, tension},
              {x: -150, damping: 0.6, tension}
            ]}
            onSnap={this.onSnap.bind(this)}
            onDrag={this.onDrag.bind(this)}
            onStop={this.onStopMoving.bind(this)}
            // dragToss={0.5}
            style={{
                width: "100vw",
                position: "absolute",
                left: 0,
            }}
            >
            <Div onMouseUp={this.onRowPress.bind(this)} width="100%">
              <Div flex="1" p="2" backgroundColor="themeLight1" height="75px" borderBottom={`1px solid ${colors.grey1}`} style={{boxShadow: shadows.sectionShadow}}>
                <Div width="120px">
                  <Image 
                    onClick={() => navigateToDetails(foodItem.id, foodItem)}
                    src={foodItem.img} alt="" width="100%" style={{objectFit: "contain", height:"50px"}}
                  />
                </Div>
                <Div justifyContent="space-between" width="100%"alignItems="center">
                  <Div p="1"><span style={headerCardPrimary}>{basketItem.quantity}</span></Div>
                  <Div px="0"><span style={{...headerCardPrimary, fontWeight: 100, fontSize: "0.6rem"}}>✖</span></Div>
                  <Div px="1" flex="1"><span style={headerCardPrimary}>{foodItem.title}</span></Div>
                  <Div pl="2"><span style={headerCardPrimary}>{foodItem.price * basketItem.quantity}</span></Div>
                </Div>
              </Div>
            </Div>
          </Interactable.View>
  
        </Div>
      );
    }
    onSnap(nativeEvent) {
      const { index } = nativeEvent;
      this.setState({position: index});
    }
    onRowPress() {
      const { isMoving, position } = this.state;
      if (!isMoving && position !== 1) {
        this.interactableElem.snapTo({index: 1});
      }
    }
    onDrag(nativeEvent) {
      if (nativeEvent.state === 'start') {
        this.setState({isMoving: true});
      }
    }

    onStopMoving() {
      this.setState({isMoving: false});
      const test = document.getElementById("test")
    }
}

export default connect(null, {incrementProductFromBasket, decrementProductFromBasket, removeProductFromBasket})(Row)