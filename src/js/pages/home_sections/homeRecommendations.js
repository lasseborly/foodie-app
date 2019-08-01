import React from "react";
import styled from '@emotion/styled'
import { Div, P } from '../../layouts/layout'
import { headerCardPrimary, headerCardSecondary, headerCardTiny, headerSliderNavigation, textDefault } from '../../components/typography'
import imgDessert from '../../../img/images/dessert1.png'
import { colors, shadows } from '../../../style/theme'
import { IconKcal, IconHeart, IconPeople } from '../../../img/icons/Icons'
import { Link } from 'react-router-dom'


const RecommendationContainer = styled(Div)({
  width: "100vw",
  flexDirection: "column" ,
  alignItems: "flex-end",
})

const RecommendationItem = styled(Div)({
  borderTopLeftRadius: "10px",
  borderBottomLeftRadius: "10px",
  backgroundColor: "white",
  boxShadow: shadows.sectionShadow
})

const RecommendationInfobar = styled(Div)({
  borderBottomLeftRadius: "8px",
  backgroundColor: colors.themeLight1,
  width: "80%",
  boxShadow: shadows.sectionShadow,
})

const recommendationsData = [
  {
    header: "Strawberry Cream Waffles",
    description: `Rich in taste, dense in taste, with a bit of bitterness in chocolate, it’s great, really`,
    price: "$18.0",
    likes: "82",
    kcal: "581",
    persons: "2-3",
    img: imgDessert
  },
  {
    header: "Strawberry Cream Waffles",
    description: `Rich in taste, dense in taste, with a bit of bitterness in chocolate, it’s great, really`,
    price: "$18.0",
    likes: "82",
    kcal: "581",
    persons: "2-3",
    img: imgDessert
  }
]

const HomeRecommendations = () => {
  const styleRecommendationsInforbarItem = {
    ml: "0",
    mr: "4",
    style: textDefault
  }
    return (
      <Div flexWrap="wrap">
        <P p="4" style={headerSliderNavigation}>Recommended</P>
        <RecommendationContainer>
          {
            recommendationsData.map(i => (
              <Div flexDirection="column" width={"calc(100% - 1.5rem)"} mb="3" alignItems="flex-end">
                <RecommendationItem alignItems="center" p={2}>
                  <Div>
                    <img src={i.img} style={{width: "120px", height: "120px"}} alt=""/>
                  </Div>
                  <Div flexDirection="column" pl={3}>
                    <P style={headerCardPrimary}>{i.header}</P>
                    <P style={textDefault} mb="1">{i.description}</P>
                    <P style={headerCardSecondary}>{i.price}</P>
                  </Div>
                </RecommendationItem>
                <RecommendationInfobar p="1" pl="3">
                  <Div alignItems="center">
                    <IconHeart />
                    <Div {...styleRecommendationsInforbarItem}>{i.likes}</Div>
                  </Div>
                  <Div alignItems="center">
                    <IconKcal />
                    <Div {...styleRecommendationsInforbarItem}>{i.kcal + " kcal"}</Div>
                  </Div>
                  <Div alignItems="center">
                    <IconPeople />
                    <Div {...styleRecommendationsInforbarItem}>{i.persons + " per"}</Div>
                  </Div>
                </RecommendationInfobar>
              </Div>
              )
            )
          }
        </RecommendationContainer>
      </Div>
    )
}

export default HomeRecommendations