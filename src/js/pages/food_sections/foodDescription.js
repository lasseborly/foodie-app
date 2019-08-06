import React, {useState} from "react";
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { Div } from '../../layouts/layout'
import { headerFoodTitle, headerFoodSubTitle, headerFoodDescription } from '../../components/typography'
import { IconSearch } from '../../../img/icons/Icons'
import Interactable from 'react-interactable/noNative'
import { shadows, colors } from '../../../style/theme'

import { NAVBOTTOM_HEIGHT } from '../../layouts/navBottom'
import { NAVTOP_HEIGHT } from './foodTop'
import Badge from '../../components/badge'
import Button from '../../ui/button'
import { setStatusbarColor } from '../../utility/utility.js'

const FoodDescriptionContainer = styled(Div)({
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    overflow: "hidden",
    alignItems: "flex-end"
  })

const FoodDescriptionContent = styled(Div)({
  flexWrap: "wrap",
  bottom: "0px",
  width: "100vw"
})

const h1 = 120
const h2 = 250
const h3 = window.innerHeight - h2 - h1 - NAVBOTTOM_HEIGHT
const heightTotal = h1 + h2 + h3

const styleInteractable = (isFullscreen) => ({
    borderTopLeftRadius: isFullscreen ? 0 : "40px",
    borderTopRightRadius: isFullscreen ? 0 : "40px",
    transition: "border-radius 0.5s ease 0s",
    backgroundColor: "white",
    height: `${heightTotal}px`,
    boxShadow: "0px -8px 5px 0px rgba(0,0,0,0.03)",
    position: "relative",
    zIndex: 2,
})

const FoodH1 = ({food}) => {
  return (
    <Div flexWrap="wrap">
      <h1 style={headerFoodTitle}>{food.title}</h1>
      <h2 style={headerFoodSubTitle}>{food.subTitle}</h2>
    </Div>
  )
} 

const FoodH2 = ({food}) => {
  return (
    <Div flexDirection="column" justifyContent="space-between">
      <Div flexWrap="wrap">
        <Div alignSelf="flex-start">
          <Badge color={food.bgColor} text="organic" />
          <Badge color={food.bgColor} text="fairtrade" />
          <Badge color={food.bgColor} text="africa" />
        </Div>
        <Div mt="4">
          <p style={headerFoodDescription}>
            {food.description}
          </p>
        </Div>
      </Div>
      <Div mt="4">
        <Button 
          bgColor={colors.lightBrown2}
          color={colors.themeDark2}
        >
            Tilføj til kurv
          </Button>
      </Div>
    </Div>
  )
} 

const Underlay = styled.div(() => ({
  position: "fixed",
  top: `${NAVTOP_HEIGHT}px`,
  width: "100%",
  height: "500px",
  backgroundColor: "black",
  opacity: 0
}))

const FoodDescriptionItem = styled(Div)({
  borderBottom: `1px solid ${colors.themeLight2}`, 
  padding: "30px",
  width: "100%"
})

const FoodDescription = ({food}) => {
    let modalRef = null
    const [sliderIndex, setPosition] = useState(false);

    return (
    <FoodDescriptionContainer>
        <Underlay 
          onClick={() => {
          if (sliderIndex === 1) {
            modalRef.snapTo({index: 2})
          }
        }} />
        <Interactable.View
            ref={ref => { modalRef = ref }}
            style={styleInteractable(sliderIndex === 0)}
            snapPoints={[
                {damping: 0.7, y: 0},
                {damping: 0.7, y: h3},
                {damping: 0.7, y: h3 + h2}
            ]}
            // boundaries={{top: 0}}
            onSnap={(e) => {
                setPosition(e.index)
            }}
            initialPosition={{y: h3}}
            verticalOnly={true}>
            <FoodDescriptionContent>
                <FoodDescriptionItem height={`${h1}px`} >
                  <FoodH1 food={food} />
                </FoodDescriptionItem>
                <FoodDescriptionItem height={`${h2}px`} style={{paddingTop: "20px"}} >
                  <FoodH2 food={food} />
                </FoodDescriptionItem>
                <FoodDescriptionItem height={`${h3 + 300 }px`} backgroundColor={"white"}>
                250px
                </FoodDescriptionItem>
            </FoodDescriptionContent>
        </Interactable.View>
      </FoodDescriptionContainer>
    )
  }

export default FoodDescription