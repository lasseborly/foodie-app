import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Div, P } from "../../layouts/layout";
import { headerCardSecondary, headerCardPrimaryTrendy, headerSliderNavigation } from "../../components/typography";
import { colors, shadows } from "../../../style/theme";
import { IconKcal, IconHeart, IconPeople } from "../../../img/icons/Icons";
import { useInView } from "react-intersection-observer";
import { useSpring, animated, interpolate } from "react-spring";
import { useDrag, useGesture } from "react-use-gesture";

import { Link } from "react-router-dom";

import img1 from "../../../img/images/recipes/recipes1.jpg";
import img2 from "../../../img/images/recipes/recipes2.jpg";

import Image from "../../components/image";
import { setStatusbarColor } from "../../utility/utility.js";

import { NAVBOTTOM_HEIGHT } from "../../layouts/navBottom";
import { setNavBottomShow, setNavBottomDisplay } from "../../store/actions/action_app";
import { connect } from "react-redux";

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
  top: "0px",
  left: "0px",
  backgroundColor: colors.navy1
};

const CHAR_WIDTH = 11;
const HEIGHT_CARD_CLOSED = 200;
const HEIGHT_CARD_OPEN = window.innerHeight;
const HEIGHT_DETAIL_BAR = window.innerHeight - NAVBOTTOM_HEIGHT - HEIGHT_CARD_OPEN;

const dragConfigMove = { tension: 900, friction: 40 };
const dragConfigToss = { tension: 450, friction: 40 };

const HomePopularCard = ({ img, title, chef, setNavBottomShow }) => {
  const ref = React.useRef(null);
  const [animation, setAnimation] = useState({
    animationState: "closed" // opened, closed, opening, closing
  });
  const [springState, setSpringState] = useSpring(() => ({
    o: 0,
    xy: [0, 0],
    onRest: handleRest,
    config: { tension: 700, friction: 50 }
  }));

  function handleRest(e) {
    setAnimation({
      animationState: e && e.o === 0 ? "closed" : "opened"
    });
  }

  function handleCardClick() {
    const { animationState } = animation;
    if (animationState === "opening" || animationState === "closing") {
      console.log("RETURN");
      return;
    }

    if (animationState === "closed") {
      const boundingBoxStart = ref.current && ref.current.getBoundingClientRect();
      setAnimation({ animationState: "opening" });
      setSpringState({
        o: 1,
        xy: [boundingBoxStart.x, boundingBoxStart.y * -1]
      });
    }

    if (animationState === "opened") {
      setAnimation({ animationState: "closing" });
      setSpringState({
        o: 0,
        xy: [0, 0]
      });
    }
  }

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

  const { animationState } = animation;

  if (animationState === "opened") {
  }

  if (animationState === "closed") {
  }

  if (animationState === "opening") {
    document.getElementById("main").classList.add("lock");
    setStatusbarColor("navy1");
    setNavBottomShow(false);
  }

  if (animationState === "closing") {
    document.getElementById("main").classList.remove("lock");
    setStatusbarColor("themeRed1");
    setNavBottomShow(true);
  }

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
        zIndex: animationState === "opened" || animationState === "opening" ? 2 : 1
      }}
    >
      <DivAnimated
        ref={ref}
        onClick={handleCardClick}
        style={{
          // border: "2px solid blue",
          boxShadow: shadows.cardShadowWide,
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
        {title.split(" ").map((mainTitle, index) => {
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
                    -${calcFromTo(o, 0, 400 - index * 45)}px,
                    0)
                  `
                )
              }}
            >
              {mainTitle}
            </TextAnimated>
          );
        })}
        <DivAnimated
          css={styleBottomLeft}
          style={{
            transform: springState.o.interpolate(
              o => `translate3d(0, -${calcFromTo(o, 0, HEIGHT_SNAPPOINTS_OVERLAY[0])}px, 0)`
            )
          }}
        >
          {[IconKcal, IconPeople].map((i, index) => (
            <SubItem icon={i} key={index} />
          ))}
        </DivAnimated>
        <DivAnimated
          css={styleBottomRight}
          style={{
            transform: springState.o.interpolate(
              o => `translate3d(0, -${calcFromTo(o, 0, HEIGHT_SNAPPOINTS_OVERLAY[0])}px, 0)`
            )
          }}
        >
          <span style={{ ...headerCardSecondary, color: "white", marginLeft: "6px" }}>by {chef}</span>
        </DivAnimated>
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
      <HomeFoodDetails springState={springState} show={animationState === "opening" || animationState === "opened"} />
    </DivAnimated>
  );
};

const HEIGHT_SNAPPOINTS_OVERLAY = [100, 500];
const SNAPPOINT_INTERSECTION = 400 / 2;

const HomeFoodDetails = ({ springState, show }) => {
  const [springStateSnapPoint, setSpringSnapPoint] = useState(0);
  const [springStateDetails, setSpringStateDetails] = useSpring(() => ({
    height: HEIGHT_SNAPPOINTS_OVERLAY[0],
    config: dragConfigToss
  }));

  const dragBind = useDrag(dragProps => {
    console.log("drag");

    const { delta, first, last, distance } = dragProps;
    const deltaY = delta[1] * -1;

    if (last) {
      const nextSnapPointSelected =
        deltaY + HEIGHT_SNAPPOINTS_OVERLAY[springStateSnapPoint] > SNAPPOINT_INTERSECTION ? 1 : 0;
      updateStateLastEvent(nextSnapPointSelected);
    } else {
      setSpringStateDetails({
        height: deltaY + HEIGHT_SNAPPOINTS_OVERLAY[springStateSnapPoint],
        config: dragConfigMove
      });
    }
  });

  function updateStateLastEvent(snapPointSelected) {
    setSpringStateDetails({ height: HEIGHT_SNAPPOINTS_OVERLAY[snapPointSelected], config: dragConfigToss });
    setSpringSnapPoint(snapPointSelected);
  }

  const HEIGHT_OVERLAY = `${window.innerHeight - HEIGHT_SNAPPOINTS_OVERLAY[1]}px`;

  return ReactDOM.createPortal(
    <DivAnimated
      {...dragBind()}
      onClick={e => {
        const nextSnappointSelected = Boolean(springStateSnapPoint) ? 0 : 1;
        updateStateLastEvent(nextSnappointSelected);
        console.log("tapp", springStateSnapPoint);
      }}
      style={{
        display: "block",
        position: "fixed",
        zIndex: 3,
        width: "100vw",
        height: springStateDetails.height.interpolate(h => `${h}px`),
        left: 0,
        bottom: `0px`,
        backgroundColor: "rgba(255,255,255,0.1)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        opacity: springState.o.interpolate(o => o),
        transform: `translateY(${show ? 0 : 100}px)`,
        transition: "transform 0.5s",
        boxShadow: shadows.overlayMenu,
        visibility: springState.o.interpolate(o => (Boolean(o) ? "visible" : "hidden"))
      }}
    >
      <Div
        css={{
          display: Boolean(springStateSnapPoint) ? "flex" : "none",
          height: HEIGHT_OVERLAY,
          transform: `translateY(-${HEIGHT_OVERLAY})`,
          position: "absolute",
          width: "100vw"
        }}
      ></Div>
      <Div css={{ width: "100vw", justifyContent: "center" }} mt="1" mb="2">
        <Div
          css={{ width: "10vw", height: "4px", opacity: 0.3, backgroundColor: colors.themeLight2, borderRadius: "4px" }}
        />
      </Div>
      <Div justifyContent="space-between" m="2" mt="4">
        {["Detaljer", "Ingredienser", "Tilberedning"].map(i => (
          <span
            key={i}
            style={{ color: "white", height: "30px", border: "1px solid white", borderRadius: "4px", padding: "5px" }}
          >
            {i}
          </span>
        ))}
      </Div>
    </DivAnimated>,
    document.getElementById("root")
  );
};

const HomePopular = ({ setNavBottomShow, setNavBottomDisplay }) => {
  setNavBottomDisplay("fixed");
  // Unmount
  useEffect(() => {
    return () => {
      setNavBottomDisplay("relative");
    };
  }, []);

  return (
    <Div p="4" display="block">
      <P mb="4" style={headerSliderNavigation}>
        Populære
      </P>
      {dataPopularCard.map(i => (
        <HomePopularCard setNavBottomShow={setNavBottomShow} key={i.img} {...i} />
      ))}
    </Div>
  );
};

export default connect(
  null,
  { setNavBottomShow, setNavBottomDisplay }
)(HomePopular);
