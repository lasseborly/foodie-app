import React from "react";
import styled from '@emotion/styled'
import { Div, P } from '../../layouts/layout'
import { headerCardPrimary, headerCardSecondary, headerCardTiny, headerSliderNavigation, textDefault } from '../../components/typography'
import { colors, shadows } from '../../../style/theme'
import { IconKcal, IconHeart, IconPeople } from '../../../img/icons/Icons'

import imgDessert5 from '../../../img/images/dessert5.png'
import imgDessert10 from '../../../img/images/dessert10.png'

import Image from '../../components/image'

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
  width: "100%",
  maxWidth: "280px",
  boxShadow: shadows.sectionShadow,
})

const recommendationsData = [
  {
    header: "Strawberry Cream Waffles",
    description: `Rich in taste, dense in taste, with a bit of bitterness in chocolate, it’s great, really`,
    price: "$14.0",
    likes: "82",
    kcal: "581",
    persons: "2-3",
    img: imgDessert5
  },
  {
    header: "Pancakes with blueberries",
    description: `Taste is smooth, and the berries add a nice touch of crispiness`,
    price: "$18.0",
    likes: "122",
    kcal: "395",
    persons: "1-2",
    img: imgDessert10
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
        <P p="4" style={headerSliderNavigation}>Anbefalet</P>
        <RecommendationContainer>
          {
            recommendationsData.map((i, index) => (
              <Div key={index} flexDirection="column" width={"calc(100% - 1.5rem)"} mb="3" alignItems="flex-end">
                <RecommendationItem alignItems="center" p={3}>
                  <Div>
                    <Image src={i.img} style={{width: "100px", height: "100px", objectFit: "contain"}} alt=""/>
                  </Div>
                  <Div flexDirection="column" pl={4}>
                    <P style={headerCardPrimary}>{i.header}</P>
                    <P style={textDefault} mb="1">{i.description}</P>
                    <P style={headerCardSecondary}>{i.price}</P>
                  </Div>
                </RecommendationItem>
                <RecommendationInfobar p="2" pl="3">
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