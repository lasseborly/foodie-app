import React from "react";
import styled from '@emotion/styled'
import { Div, P } from '../../layouts/layout'
import { shadows } from '../../../style/theme'
import { headerCardPrimary, headerSliderNavigation, textDefault } from '../../components/typography'
import Image from '../../components/image'

import Button from '../../ui/button'

import imgDessert from '../../../img/images/dessert8.png'

const HomeWeeklyRecipes = () => {
    return (
      <Div p="4" mb="4" flexWrap="wrap">
        <P mb="4" style={headerSliderNavigation}>Ugens opskrift</P>
        <Div py="4" bg="white" borderRadius="20px" flexWrap="wrap" justifyContent="center" style={{boxShadow: shadows.sectionShadow}}>
          <Image src={imgDessert} style={{height: "150px", objectFit: "contain"}} alt=""/>
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