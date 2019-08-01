import React from "react";
import styled from '@emotion/styled'
import { Div, P } from '../../layouts/layout'
import { headerCardPrimary, headerCardSecondary, headerCardTiny, headerSliderNavigation, textDefault, buttonDefault } from '../../components/typography'
import imgDessert from '../../../img/images/dessert1.png'
import { colors, shadows } from '../../../style/theme'
import { IconKcal, IconHeart, IconPeople } from '../../../img/icons/Icons'
import { Link } from 'react-router-dom'

const Button = styled.button({
  backgroundColor: colors.themeRed3,
  border: "none",
  boxShadow: shadows.buttonShadow,
  borderRadius: "20px",
  height: "40px",
  padding: "0px 20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  ...buttonDefault
})



const HomeWeeklyRecipes = () => {
    return (
      <Div p="4" mb="4" flexWrap="wrap">
        <P mb="4" style={headerSliderNavigation}>Ugens opskrift</P>
        <Div py="4" bg="white" borderRadius="20px" flexWrap="wrap" justifyContent="center" style={{boxShadow: shadows.sectionShadow}}>
          <img src={imgDessert} style={{width: "200px", height: "200px"}} alt=""/>
          <Div flexDirection="column" mt="3" width="100%">
            <Div p="4" flexWrap="wrap">
              <P style={headerCardPrimary}>{"Honey salat with almonds"}</P>
              <P style={textDefault} >
              {
                "Rich in taste, dense in taste, with a bit of bitterness in chocolate, it’s great, really"
              }
              </P>
            </Div>
            <Div justifyContent="flex-end">
              <Button style={{borderBottomRightRadius: "0", borderTopRightRadius: "0", width: "150px"}}>
                Bestil nu
              </Button>
            </Div>
          </Div>
        </Div>
      </Div>
    )
}

export default HomeWeeklyRecipes