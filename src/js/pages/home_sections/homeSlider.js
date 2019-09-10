import React from "react";
import styled from '@emotion/styled'
import { Div, P } from '../../layouts/layout'
import { headerCardPrimary, headerCardSecondary, headerCardTiny, headerSliderNavigation } from '../../components/typography'
import { colors, shadows } from '../../../style/theme'
import { IconKcal } from '../../../img/icons/Icons'
import { Link } from 'react-router-dom'

import imgDessert1 from '../../../img/images/dessert1.png'
import imgDessert2 from '../../../img/images/dessert2.png'
import imgDessert3 from '../../../img/images/dessert3.png'

import Image from '../../components/image'

const SliderNavigationItem = styled(Link)({
  ...headerSliderNavigation,
  marginRight: "20px",
  paddingBottom: "8px",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  whiteSpace: "nowrap" 
})

const SliderNavigationBar = styled(Div)(({active}) => ({
  width: "60%",
  height: "2px",
  backgroundColor: active ? colors.themeRed2 : "transparent",
  borderRadius: "4px"
}))

const SliderContainer = styled(Div)({
  scrollSnapType: "mandatory",
  scrollPaddingLeft: "20px",
  scrollPaddingRight: "20px",
  scrollSnapType: "x mandatory",
  overflowX: "scroll",
  "-webkit-overflow-scrolling": "touch",
  flex: 1
})

const SliderItem = styled(Div)({
    display: "block",
    minWidth: "140px",
    borderRadius: "10px",
    boxShadow: shadows.cardShadow,
    margin: "0px 10px",
    backgroundColor: "white",
    "scrollSnapAlign": "start",
    "&:first-child": {
      marginLeft: "20px"
    },
    "&:last-child": {
      marginRight: "20px"
    }
})

const sliderNavigationData= [
  {
    navName: "dessert", 
    navUrl: "101"
  },
  {
    navName: "smoothie", 
    navUrl: "102"
  },
  {
    navName: "barbecue", 
    navUrl: "104"
  },
  {
    navName: "vegan",
    navUrl: "105"
  },
  {
    navName: "paleo",
    navUrl: "106"
  },
  {
    navName: "sea snacks",
    navUrl: "107"
  },
  {
    navName: "plant based",
    navUrl: "108"
  },
]

const sliderItemData = [
  {
    header: "Strawberry Cream Waffles",
    price: "$7.0",
    kcal: 274,
    img: imgDessert1
  },
  {
    header: "Croissant blue berry fruit",
    price: "$17.0",
    kcal: 351,
    img: imgDessert2
  },{
    header: "Chocolate lemon cupcake",
    price: "$17.0",
    kcal: 442,
    img: imgDessert3
  },
  {
    header: "Strawberry Cream Waffles",
    price: "$7.0",
    kcal: 274,
    img: imgDessert1
  },
  {
    header: "Croissant blue berry fruit",
    price: "$17.0",
    kcal: 351,
    img: imgDessert2
  },
  {
    header: "Strawberry Cream Waffles",
    price: "$7.0",
    kcal: 274,
    img: imgDessert1
  },
  {
    header: "Croissant blue berry fruit",
    price: "$17.0",
    kcal: 351,
    img: imgDessert2
  },{
    header: "Chocolate lemon cupcake",
    price: "$17.0",
    kcal: 442,
    img: imgDessert3
  },
  {
    header: "Strawberry Cream Waffles",
    price: "$7.0",
    kcal: 274,
    img: imgDessert1
  },
  {
    header: "Croissant blue berry fruit",
    price: "$17.0",
    kcal: 351,
    img: imgDessert2
  }
]

const HomeSlider = () => {
    return (
      <Div width="100vw"  flexDirection={"column"}>

        <Div style={{overflow: "scroll"}} p={4} pb={0}>
            {
              sliderNavigationData.map(i => (
                <SliderNavigationItem 
                  key={i.navUrl}
                  to={"/"}>
                  <P pb={"6px"}>{i.navName}</P>
                  <SliderNavigationBar active={i.navUrl === "101"} />
                </SliderNavigationItem> 
              ))
            }
        </Div>

        <Div style={{overflow: "scroll"}}>
          <SliderContainer py={4} pt={2}>
            {
              sliderItemData.map((i,index) => {
                  return <SliderItem p={2} key={index}>
                    <Image src={i.img} style={{width: "100%", height: "100px", objectFit: "cover"}} alt=""/>
                    <P style={headerCardPrimary}>{i.header}</P>
                    <P style={headerCardSecondary}>{i.price}</P>
                    <Div mt={1}>
                      <IconKcal />
                      <P ml="5px" style={{...headerCardTiny, lineHeight: "16px"}}>{i.kcal + " kcal"}</P>
                    </Div>
                  </SliderItem>
              })
            }
          </SliderContainer>
        </Div>

      </Div>
    )
  }

export default HomeSlider