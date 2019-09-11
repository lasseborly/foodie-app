import React, { useState } from "react";
import styled from "@emotion/styled";
import { Div, P } from "../../layouts/layout";
import { headerCardSecondary, headerCardPrimaryTrendy, headerSliderNavigation } from "../../components/typography";
import { colors, shadows } from "../../../style/theme";
import { IconKcal, IconHeart, IconPeople } from "../../../img/icons/Icons";
import { useInView } from "react-intersection-observer";
import { useSpring, animated, interpolate } from "react-spring";

import { Link } from "react-router-dom";

import img1 from "../../../img/images/recipes/recipes1.jpeg";
import img2 from "../../../img/images/recipes/recipes2.jpg";

import Image from "../../components/image";
import { setStatusbarColor } from "../../utility/utility.js";


const SubItem = ({ icon }) => {
  const IconComp = icon;
  return (
    <Div css={{ position: "relative", marginRight: "20px", alignItems: "center" }}>
      <IconComp fill="white" />
      <span style={{ ...headerCardSecondary, fontSize: "inherit", color: "white", marginLeft: "6px" }}>10</span>
    </Div>
  );
};

const dataPopularCard = [
  {
    img: img1,
    title: "Eggs and salmon",
    chef: "Joan Williams"
  },
  {
    img: img2,
    title: "Salad with avocado",
    chef: "Preben Arentoft"
  }
];

const TextAnimated = animated("h3");
const DivAnimated = animated(Div);

const CARD_PADDING_LEFT = window.innerWidth * ((100 - 85) / 2 / 100);

const styleBottomLeft = {
  marginLeft: `${CARD_PADDING_LEFT}px`,
  marginBottom: "15px",
  position: "absolute",
  bottom: "0px",
  transformOrigin: "left center"
};

const styleBottomRight = {
  position: "absolute",
  marginRight: `${CARD_PADDING_LEFT}px`,
  marginBottom: "15px",
  bottom: "0",
  right: "0"
};

const styleTopRight = {
  marginRight: `20px`,
  marginTop: "20px",
  position: "absolute",
  right: 0,
  top: 0,
  width: "20px",
  height: "20px"
};

const styleBackgroundDim = {
  height: "100vh",
  width: "100vw",
  position: "fixed",
  backgroundColor: "white",
  top: "0px",
  left: "0px",
}

const HomePopularCard = ({ img, title, chef }) => {
  const ref = React.useRef(null);
  const [animation, setAnimation] = useState({
    animationStatus: "resting",   // running, resting,
    animationState: "closed"      // opened, closed
  });
  const [active, setState] = useState(false);
  const [clientRect, setBoundState] = useState({ card: { y: 0, x: 0 } });

  const [springState, setSpringState] = useSpring(() => ({
    o: 0,
    xy: [0, 0],
    onStart: () => {
      setAnimation({
        ...animation,
        animationStatus: "running",
      })
    },
    onRest: (e) => {
      setAnimation({
        animationStatus: "resting",
        animationState: e && e.o === 0 ? "closed" : "opened"
      })
    },
    config: {tension: 700, friction: 50}
  }));

  function handleCardClick() {
    const {animationStatus, animationState} = animation
    if (animationStatus === "running") {
      return
    }
    if (animationState === "closed") {
      const boundingBoxStart = ref.current && ref.current.getBoundingClientRect();
      setBoundState({ card: boundingBoxStart });
      setSpringState({
        o: 1,
        xy: [boundingBoxStart.x, boundingBoxStart.y * -1]
      });
      return
    }

    setSpringState({
      o: 0,
      xy: [0 , 0]
    });
  }

  const CHAR_WIDTH = 11;
  const HEIGHT_CARD_CLOSED = 200;
  const HEIGHT_CARD_OPEN = 500;
  const titleLength = title.split(" ").map(i => i.length);

  function calcFromTo(value, from, to) {
    const val = (to - from) * value + from;
    return val;
  }

  function getTranslateAmount(index) {
    const totalChars = titleLength.reduce((acc, i, arrayIndex) => {
      if (index > arrayIndex) {
        return acc + i;
      }
      return acc;
    }, 0);
    return totalChars;
  }

  const { animationState, animationStatus } = animation
  const mainElement = document.getElementById("main")
  const animationRunningOrOpen = (animationState === "opened" || animationStatus === "running")
  if (mainElement) {
    mainElement.classList[animationRunningOrOpen ? "add" : "remove"]("lock")
  }
  animationRunningOrOpen ? setStatusbarColor("navy1") : setStatusbarColor("themeRed1")

  return (
    <DivAnimated
      style={{
        position: "relative",
        height: `${HEIGHT_CARD_CLOSED}px`,
        width: "85vw",
        marginBottom: "25px",
        marginBottom: "25px",
        // border: "3px solid red",
        // opacity: 0.5,
        zIndex: animationRunningOrOpen ? 2 : 1
      }}
    >
      <DivAnimated style={{
        ...styleBackgroundDim,
        opacity: springState.o.interpolate(o => o),
        visibility: springState.o.interpolate(o => Boolean(o) ? "visible" : "hidden"),
      }} />
        <DivAnimated
          ref={ref}
          onClick={handleCardClick}
          style={{
            // border: "2px solid blue",
            backgroundImage: `url(${img})`,
            backgroundSize: "100vw",
            backgroundPosition: "center",
            width: springState.o.interpolate(o => `${calcFromTo(o, 85, 100)}vw`),
            height: springState.o.interpolate(o => `${calcFromTo(o, HEIGHT_CARD_CLOSED, HEIGHT_CARD_OPEN)}px`),
            borderRadius: springState.o.interpolate(o => `${calcFromTo(o, 15, 0)}px`),
            position: "absolute",
            transform: springState.xy.interpolate((x, y) => `translate3d(-${x}px, ${y}px, 0px)`)
          }}
        >
        {
          title.split(" ").map((mainTitle, index) => {
            const translateTextYAmount = getTranslateAmount(index) * CHAR_WIDTH;
            return (
              <TextAnimated
                key={mainTitle}
                style={{
                  ...headerCardPrimaryTrendy,
                  position: "absolute",
                  bottom: "50px",
                  left: "0px",
                  fontSize: springState.o.interpolate(o => `${calcFromTo(o, 16, 32)}px`),
                  transform: springState.o.interpolate(
                    o => `translate3d(
                    ${translateTextYAmount - translateTextYAmount * o + CARD_PADDING_LEFT}px,
                    -${calcFromTo(o, 0, 250 - index * 45)}px,
                    0)
                  `
                  )
                }}
              >
                {mainTitle}
              </TextAnimated>
              );
            }
          )
        }
          <Div css={styleBottomLeft}>
            {[IconKcal, IconPeople].map((i, index) => (
              <SubItem icon={i} key={index} />
            ))}
          </Div>
          <Div css={styleBottomRight}>
            <span style={{ ...headerCardSecondary, color: "white", marginLeft: "6px" }}>by {chef}</span>
          </Div>
          <DivAnimated
            style={{
              ...styleTopRight,
              transform: springState.o.interpolate(o => `translate3d(0, -${calcFromTo(o, 50, 0)}px, 0)`),
              opacity: springState.o.interpolate(o => o)
            }}
          >
            <IconHeart height="20" width="20" fill="white" />
          </DivAnimated>
      </DivAnimated>
    </DivAnimated>
  );
};

const HomePopular = () => {  
  return (
    <Div p="4" display="block">
      <P mb="4" style={headerSliderNavigation}>
        Populære
      </P>
      {dataPopularCard.map((i) => <HomePopularCard key={i.img} {...i} />)}
    </Div>
  );
};

export default HomePopular;
