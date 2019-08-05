import React from "react";
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { Div } from '../../layouts/layout'
import { headerHome, headerSearchField } from '../../components/typography'
import { IconSearch } from '../../../img/icons/Icons'

import imgsrc from '../../../img/images/food/durian_monthong.png'

export const NAVTOP_HEIGHT = 50

const HeroContainer = styled(Div)({
  flex: 1,
  width: "100%",
  justifyContent: "center",
  flexWrap: "wrap",
  alignSelf: "center"
})

const HeroTop = styled(Div)({
  // border: "1px solid red",
  height: `${NAVTOP_HEIGHT}px`,
  width: "100%",
  position: "fixed",
  alignItems: "center"
})

const HeroImg = styled.img({
  width: "60%",
  objectFit: "contain",
  height: "50vh"
})

const HeroShadow = styled.div({
  width: "50vw",
  backgroundColor: "black",
  height: "3px",
  borderRadius: "50%",
  filter: "blur(15px)"
})

const DetailsTop = ({food}) => {
    const { bgColor } = food 
    return (
      <HeroContainer bg={bgColor}>
        <HeroTop justifyContent="space-between" px="4">
          <div>back</div>
          <div>cart</div>
        </HeroTop>
        <Div alignSelf="flex-start" flexWrap="wrap" justifyContent="center">
          <HeroImg src={imgsrc}/>
          {/* <HeroShadow /> */}
        </Div>
      </HeroContainer>
    )
  }

export default DetailsTop