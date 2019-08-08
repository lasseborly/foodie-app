import React from "react";
import styled from '@emotion/styled'
import { Div } from '../../layouts/layout'

export const NAVTOP_HEIGHT = 50

const HeroContainer = styled(Div)({
  flex: 1,
  width: "100%",
  justifyContent: "center",
  alignSelf: "center",
  flexDirection: "column"
})

const DetailsTop = ({food}) => {
    const { bgColor } = food 
    return (
      <HeroContainer bg={bgColor}>
        <Div alignSelf="flex-start" flexWrap="wrap" justifyContent="center">
          <img src={food.img} alt="" style={{
            width: "60%",
            objectFit: "contain",
            height: "40vh",
            position: "relative",
            zIndex: 1,
            pointerEvents: "none"
            }}/>
          <img src={food.img} alt="" style={{
            width: "60%",
            objectFit: "contain",
            height: "40vh",
            position: "absolute",
            top: "0px",
            filter: "blur(10px)",
            transform: "scale(1.2) translateY(15px)",
            opacity: 0.35,
            pointerEvents: "none"
            }}/>
        </Div>
        <Div flex="1" />
      </HeroContainer>
    )
  }

export default DetailsTop