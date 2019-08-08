import React from "react";
import styled from '@emotion/styled'
import { Div } from '../layouts/layout'
import { colors, shadows } from '../../style/theme'

import { withRouter } from 'react-router-dom'

import imgDurian from '../../img/images/food/durian-monthong001.png' 
import imgPapaya from '../../img/images/food/papaya001.png' 
import imgPitaya from '../../img/images/food/pitaya001.png' 
import imgWatermelon from '../../img/images/food/watermelon001.png' 

import { setStatusbarColor } from '../utility/utility.js'

import { listCardHeader, listCardSubHeader, headerFoodTitle, listSubHeader } from '../components/typography'

import { IconAdd  } from '../../img/icons/Icons'

const food1 = {
  id: "1",
  bgColor: colors.cardColor1a,
  ctaColor: colors.cardColor1a,
  title: "Durian Montong",
  subTitle: "King of fruits",
  description: "A fruit with a thick peel, such as a citrus fruit, is called a hesperidium. In hesperidia, the inner layer is peeled off together with the outer layer.",
  img: imgDurian,
  price: "9.99",
  nutrition: {
    fat: 8,
    protein: 25,
    carb: 24
  }
}

const food2 = {
  id: "2",
  bgColor: colors.cardColor2a,
  ctaColor: colors.cardColor2b,
  title: "Papaya",
  subTitle: "Rosids Eudicots",
  description: "The papaya is a small, sparsely branched tree, usually with a single stem growing from 5 to 10 m tall, with spirally arranged leaves confined to the top of the trunk. ",
  img: imgPapaya,
  price: "8.99",
  nutrition: {
    fat: 28,
    protein: 35,
    carb: 60
  }
}

const food3 = {
  id: "3",
  bgColor: colors.cardColor3a,
  ctaColor: colors.cardColor3b,
  title: "Watermelon",
  subTitle: "Citrullus seeds",
  description: "Citrullus lanatus is a plant species in the family Cucurbitaceae, a vine-like flowering plant originating in West Africa.",
  img: imgWatermelon,
  price: "12.99",
  nutrition: {
    fat: 12,
    protein: 34,
    carb: 39
  }
}

const food4 = {
  id: "4",
  bgColor: colors.cardColor4a,
  ctaColor: colors.cardColor4b,
  title: "Pitaya",
  subTitle: "Dragon fruit",
  description: "These fruits are commonly known in English as dragon fruit, a name used since around 1993, apparently resulting from the leather-like skin and prominent scaly spikes on the fruit exterior.",
  img: imgPitaya,
  price: "7.99",
  nutrition: {
    fat: 35,
    protein: 21,
    carb: 60
  }
}

const foodItems = [food1, food2, food3, food4]

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
        <img src={item.img} style={{width: "70%", height: "80%", objectFit: "contain", margin: "0px auto", position: "relative", zIndex: "1"}}/>
        <img src={item.img} style={{width: "100%", height: "80%", objectFit: "contain", margin: "0px auto", left: 0, right: 0, bottom: "15px", position: "absolute", filter: "blur(8px)", opacity: 0.75}}/>
      </Div>
      <Div flexWrap="wrap" flex="1" p="2">
        <h1 style={{...listCardHeader, width: "100%"}}>{item.title}</h1>
        <Div justifyContent="space-between" flex="1" alignItems="center">
          <h6 style={{...listCardSubHeader, color: colors.themeDark1 }}>${item.price}</h6>
          <IconAdd color={colors.themeDark1} strokeWidth="2" />
        </Div>
      </Div>
    </FoodItemContainer>
  )
}

const List = ({ history }) => {
  
  setStatusbarColor("themeDark1")

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
          foodItems.map((i, index) => <FoodItem key={index} item={i} navigateToDetails={navigateToDetails} /> )
        }
      </Div>
    </Div>
  )
  
  }

export default withRouter(List);