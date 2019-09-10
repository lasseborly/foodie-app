import React, {useState, useRef} from "react";
import styled from '@emotion/styled'
import { Div, P } from '../../layouts/layout'
import { headerCardPrimary, headerCardSecondary, headerCardPrimaryTrendy, headerCardTiny, headerSliderNavigation } from '../../components/typography'
import { colors, shadows } from '../../../style/theme'
import { IconKcal, IconHeart, IconPeople } from '../../../img/icons/Icons'
import { useInView } from 'react-intersection-observer'
import { useSpring, animated, interpolate} from 'react-spring'

import { Link } from 'react-router-dom'

import img1 from '../../../img/images/recipes/recipes1.jpeg'
import img2 from '../../../img/images/recipes/recipes2.jpeg'

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

const imgStyle = {
  height: "100%", 
  width: "100%", 
  objectFit: "cover", 
  position: "absolute",
}

const SubItem = ({icon}) => {
  const IconComp = icon
  return (
    <Div css={{position: "relative", marginRight: "20px"}}>
      <IconComp fill="white" />
      <span style={{...headerCardSecondary, color: "white", marginLeft: "6px"}}>10</span>
    </Div>
  )
}

const dataPopularCard = [
  {
    img: img1,
    title: "Eggs and salmon",
    chef: "Joan Williams"
  },
  // {
  //   img: img2,
  //   title: "Salad with avocado",
  //   chef: "Preben Arentoft"
  // }
]

const CardWrapper = animated(Div)

const CardLayout = styled(Div)(({active}) => ({
  height: "200px", 
  width: "85vw", 
  marginBottom: "25px"
})) 

const CardBackgroundDim = styled(Div)(({active}) => ({
  visibility: active ? "visible" : "hidden",
  height: "100vh", 
  width: "100vw", 
  position: "fixed", 
  backgroundColor: "white", 
  top: "0px", 
  left: "0px", 
  // zIndex: 1,
  opacity: active ? 1 : 0,
  transition: "0.3s"
})) 

const styleCardContainer = {
  marginBottom: "25px",
  overflow: "hidden", 
  flexDirection: "column",
  justifyContent: "flex-end",
  boxShadow: shadows.cardShadowWide
}

const CardContainer = animated(Div)

// const CardContainer = styled(Div)(({active, boundary}) => {
//   console.log("boundary ",boundary);
 

//   return {
 
//   }
// })

// let styleTranslate = {}
// if (active) {
//   styleTranslate = {
//     transform: `translateY(-${boundary.top}px)`
//   }
// }
// width: active ? "100vw" : "85vw",
// position: active ? "fixed": "absolute",
// left: active ? 0 : "inherit",
// borderRadius: active ? 0 : "15px",
// height: active ? "500px" : "200px",
// top: active ? boundary.top : 0,
const TextAnimated = animated("h3")

const HomePopularCard = ({img, title, chef}) => {
  const ref = React.useRef(null)
  const [active, setState] = useState(false)
  const [cardBound, setBoundState] = useState({y:0, x:0})

  const [springState, setSpringState ] = useSpring(() => ({
    o: 0
  }))

  function handleCardClick () {
    // Locking scrollview
    active
      ? document.getElementById("test").classList.remove("lock")
      : document.getElementById("test").classList.add("lock")

    
    if (active === false) {
        const boundingBoxStart = ref.current && ref.current.getBoundingClientRect()
        setBoundState(boundingBoxStart)
    }

    setState(!active)
    setSpringState({
      o: active ? 0 : 1
    })
  }

  const HEIGHT_CARD_CLOSED = 200
  const HEIGHT_CARD_OPEN = 500
  console.log("ACTIVE ", active);
  
  function calcFromTo (value, from, to) {
    const val = (to - from) * value + from 
    return val
  }

  return (
    <Div style={{
      position: "relative", 
      height: "200px", 
      width: "85vw", 
      marginBottom: "25px",
      // border: "3px solid red",
      zIndex: 2,
      }} >
      {/* <CardBackgroundDim active={active} /> */}
      <CardContainer ref={ref} onClick={handleCardClick} active={active} 
        style={{
          ...styleCardContainer,
          backgroundImage: `url(${img})`,
          backgroundSize: "100vw",
          backgroundPosition: "center",
          width: springState.o.interpolate(o => `${calcFromTo(o, 85, 100)}vw`),
          height: springState.o.interpolate(o => `${calcFromTo(o, HEIGHT_CARD_CLOSED, HEIGHT_CARD_OPEN)}px`),
          borderRadius: springState.o.interpolate(o => `${calcFromTo(o, 15, 0)}px`),
          position: "absolute",
          transform: springState.o.interpolate(o => `translate3d(
            -${calcFromTo(o, 0, cardBound.x)}px, 
            -${calcFromTo(o, 0, cardBound.y)}px, 
            0px)
          `),
        }} 
      >
      {
            title.split(" ").map((mainTitle, index) => (
              <TextAnimated style={{
                ...headerCardPrimaryTrendy,
                // position: "absolute",
                bottom: "50px",
                fontSize: springState.o.interpolate(o => `${calcFromTo(o, 1, 2)}rem`),
                transform: springState.o.interpolate(o => `
                translate3d(${calcFromTo(o, 0, 7.5)}vw, -${calcFromTo(o, 0, 250)}px, 0)
                `),
                }}>{mainTitle}</TextAnimated>
            ))
          }
      </CardContainer>
    </Div>
  )
}

   {/* {
            [IconKcal, IconPeople, IconHeart].map((i,index) =>  <SubItem icon={i} key={index} />)
          } */}
          {/* <span style={{...headerCardSecondary, color: "white", marginLeft: "6px"}}>
            by {chef}
          </span> */}

  const HomePopular = () => {
    return (
      <Div p="4" display="block">
        <P mb="4" style={headerSliderNavigation}>Populære</P>
        {
          dataPopularCard.map((i, index) => <HomePopularCard key={index} {...i} /> )
        }
      </Div>
    )
  }

export default HomePopular