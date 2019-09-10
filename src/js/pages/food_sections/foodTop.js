import React, { useState } from "react";
import styled from '@emotion/styled'
import { Div } from '../../layouts/layout'
import {useSpring, animated, interpolate, config} from 'react-spring'

import Image from '../../components/image'

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
    const { opacity, transform } = useSpring({to: { opacity: 1, transform: 0 }, from: {opacity: 0, transform: 40}, config: config.gentle})
    return (
      <HeroContainer bg={bgColor}>
        <animated.div style={{ opacity: opacity, transform: interpolate([transform], (y) => `translate3d(0px, ${y}px, 0px)` )}}>
          <Div alignSelf="flex-start" flexWrap="wrap" justifyContent="center">
            <Image src={food.img} alt="" style={{
              width: "60%",
              objectFit: "contain",
              height: "40vh",
              position: "relative",
              zIndex: 1,
              pointerEvents: "none"
              }}/>
          </Div>
        </animated.div>
        <Div flex="1" />
      </HeroContainer>
    )
  }

export default DetailsTop