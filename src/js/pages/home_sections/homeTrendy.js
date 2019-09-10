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

const CardWrapper = animated(Div);

const CardLayout = styled(Div)(({ active }) => ({
  height: "200px",
  width: "85vw",
  marginBottom: "25px"
}));

const CardBackgroundDim = styled(Div)(({ active }) => ({
  visibility: active ? "visible" : "hidden",
  height: "100vh",
  width: "100vw",
  position: "fixed",
  backgroundColor: "white",
  top: "0px",
  left: "0px",
  opacity: active ? 1 : 0,
  transition: "0.3s"
}));

const styleDivAnimated = {
  marginBottom: "25px",
  overflow: "hidden",
  flexDirection: "column",
  justifyContent: "flex-end",
  boxShadow: shadows.cardShadowWide
};

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

const HomePopularCard = ({ img, title, chef }) => {
  const ref = React.useRef(null);
  const [active, setState] = useState(false);
  const [clientRect, setBoundState] = useState({ card: { y: 0, x: 0 } });

  const [springState, setSpringState] = useSpring(() => ({
    o: 0
  }));

  function handleCardClick() {
    // Locking scrollview
    active
      ? document.getElementById("test").classList.remove("lock")
      : document.getElementById("test").classList.add("lock");

    if (active === false) {
      const boundingBoxStart = ref.current && ref.current.getBoundingClientRect();
      console.log("boundingBoxStart ", boundingBoxStart);
      setBoundState({ card: boundingBoxStart });
    }

    setState(!active);
    setSpringState({
      o: active ? 0 : 1
    });
  }

  const CHAR_WIDTH = 12;
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

  return (
    <DivAnimated
      style={{
        position: "relative",
        height: "200px",
        width: "85vw",
        marginBottom: "25px",
        zIndex: springState.o.interpolate(o => (o === 0 ? 0 : 2))
      }}
    >
      <CardBackgroundDim active={active} />
      <DivAnimated
        ref={ref}
        onClick={handleCardClick}
        active={active}
        style={{
          ...styleDivAnimated,
          backgroundImage: `url(${img})`,
          backgroundSize: "100vw",
          backgroundPosition: "center",
          width: springState.o.interpolate(o => `${calcFromTo(o, 85, 100)}vw`),
          height: springState.o.interpolate(o => `${calcFromTo(o, HEIGHT_CARD_CLOSED, HEIGHT_CARD_OPEN)}px`),
          borderRadius: springState.o.interpolate(o => `${calcFromTo(o, 15, 0)}px`),
          position: "absolute",
          transform: springState.o.interpolate(
            o => `translate3d(
            -${calcFromTo(o, 0, clientRect.card.x)}px, 
            ${calcFromTo(o, 0, clientRect.card.y * -1)}px, 
            0px)
          `
          )
        }}
      >
        <Div>
          {title.split(" ").map((mainTitle, index) => {
            const translateTextYAmount = getTranslateAmount(index) * CHAR_WIDTH;
            return (
              <TextAnimated
                style={{
                  ...headerCardPrimaryTrendy,
                  position: "absolute",
                  bottom: "50px",
                  marginRight: "5px",
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
          })}
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
              transform: springState.o.interpolate(o => `translate3d(0, -${calcFromTo(o, 50, 0)}px, 0)`)
            }}
          >
            <IconHeart height="20" width="20" fill="white" />
          </DivAnimated>
        </Div>
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
      {dataPopularCard.map((i, index) => (
        <HomePopularCard key={index} {...i} />
      ))}
    </Div>
  );
};

export default HomePopular;
