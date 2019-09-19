import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Div, P } from "../../layouts/layout";
import { colors, shadows } from "../../../style/theme";
import {
  IconKcal,
  IconHeart,
  IconPeople,
  IconShare,
  IconMessage,
  IconHeartFill,
  IconStar,
  IconStarFull
} from "../../../img/icons/Icons";
import { useInView } from "react-intersection-observer";
import { useSpring, animated, interpolate } from "react-spring";
import { useDrag, useGesture } from "react-use-gesture";
import {
  headerCardSecondary,
  headerCardPrimaryTrendy,
  headerSliderNavigation,
  overlayTitle,
  overlayPeopleScore,
  overlayTags,
  overlayDescription,
  overlayIngredients,
  overlayIngredientsTitle,
  overlayStatus
} from "../../components/typography";

import { Link } from "react-router-dom";

import img1 from "../../../img/images/recipes/recipes1.jpg";
import img2 from "../../../img/images/recipes/recipes2.jpg";

import Image from "../../components/image";
import { setStatusbarColor } from "../../utility/utility.js";

import { NAVBOTTOM_HEIGHT } from "../../layouts/navBottom";
import { setNavBottomShow, setNavBottomDisplay } from "../../store/actions/action_app";
import { connect } from "react-redux";

import chroma from "chroma-js";

import Button, { ButtonUI } from "../../ui/button";

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
    id: "aæl1khn45l12",
    img: img1,
    title: "Eggs and salmon",
    chef: "Joan Williams",
    rating: 4,
    score: 874,
    tags: ["Light food cooking", "Daily", "Salad"],
    preparation:
      "Stir the sause ingredients until smmoth. Refregereate before serving. Spread lettuce and frut evenly over the plate. Scape the mazzarella cheese with a spoon.",
    ingredients: [
      { foodItem: "Avocado", foodAmount: "0.5kg" },
      { foodItem: "Cauliflower", foodAmount: "0.5kg" },
      { foodItem: "Purple potato", foodAmount: "0.3kg" },
      { foodItem: "Broccoli", foodAmount: "0.5kg" }
    ],
    status: {
      likes: 435,
      comments: 531,
      shared: 488
    }
  },
  {
    id: "nkl54674øasd",
    img: img2,
    title: "Salad with avocado",
    chef: "Preben Arentoft",
    rating: 4,
    score: 874,
    tags: ["Light food cooking", "Daily", "Salad"],
    preparation:
      "Stir the sause ingredients until smmoth. Refregereate before serving. Spread lettuce and frut evenly over the plate. Scape the mazzarella cheese with a spoon.",
    ingredients: [
      { foodItem: "Avocado", foodAmount: "0.5kg" },
      { foodItem: "Cauliflower", foodAmount: "0.5kg" },
      { foodItem: "Purple potato", foodAmount: "0.3kg" },
      { foodItem: "Broccoli", foodAmount: "0.5kg" }
    ],
    status: {
      likes: 435,
      comments: 531,
      shared: 488
    }
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

function calcFromTo(value, from, to) {
  const val = (to - from) * value + from;
  return val;
}

const HomePopularCard = recipe => {
  const { img, title, chef, setNavBottomShow } = recipe;
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
  10;
  if (animationState === "closing") {
    10;
    document.getElementById("main").classList.remove("lock");
    10;
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
        zIndex: animationState === "opened" || animationState === "opening" ? 3 : 1
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
      <HomeFoodDetails
        recipe={recipe}
        springState={springState}
        show={animationState === "opening" || animationState === "opened"}
      />
    </DivAnimated>
  );
};

const HEIGHT_SNAPPOINTS_OVERLAY = [50, 600];

// "Detaljer", "Ingredienser", "Tilberedning"

const HomeFoodDetailSection = ({ ...props }) => <Div mb="2" style={{ position: "relative" }} {...props} />;

let didMove = false;
const HomeFoodDetails = ({ springState, show, recipe }) => {
  const [springStateSnapPoint, setSpringSnapPoint] = useState(0);
  const [springStateDetails, setSpringStateDetails] = useSpring(() => ({
    height: HEIGHT_SNAPPOINTS_OVERLAY[0],
    config: dragConfigToss,
    o: 0
  }));

  const dragBind = useDrag(dragProps => {
    const eventType = dragProps.event.type;
    const { delta, last, distance, velocities } = dragProps;

    // This is against single click which trigger touch events
    if (didMove === false) {
      if (eventType !== "touchmove") {
        return;
      }
      didMove = true;
    }

    const deltaY = delta[1] * -1;

    if (last) {
      didMove = false;
      const nextSnapPointSelected = velocities[1] < 0 ? 1 : 0;
      updateStateLastEvent(nextSnapPointSelected);
    } else {
      const height = deltaY + HEIGHT_SNAPPOINTS_OVERLAY[springStateSnapPoint];
      const fullOpacity = 800; // Number for when overlay should be completely visible
      setSpringStateDetails({
        height,
        o: (1 / fullOpacity) * height,
        config: dragConfigMove
      });
    }
  });

  function updateStateLastEvent(snapPointSelected) {
    setSpringStateDetails({
      height: HEIGHT_SNAPPOINTS_OVERLAY[snapPointSelected],
      o: snapPointSelected,
      config: dragConfigToss
    });
    setSpringSnapPoint(snapPointSelected);
  }

  function handleWebShare(e) {
    e.stopPropagation();
    if (window.navigator.share) {
      window.navigator
        .share({
          title: "Foodie Webshare Demo",
          url: window.location.host
        })
        .then(() => {
          console.log("1Thanks for sharing!");
        })
        .catch(console.error);
    }
  }

  const HEIGHT_OVERLAY = `${window.innerHeight - HEIGHT_SNAPPOINTS_OVERLAY[1]}px`;

  const ratingStars = Array(5)
    .fill(true)
    .reduce((arr, i, index) => {
      index > recipe.rating - 1 ? arr.push(IconStar) : arr.push(IconStarFull);
      return arr;
    }, []);

  return ReactDOM.createPortal(
    <DivAnimated
      {...dragBind()}
      onClick={e => {
        console.log("parent");
        const nextSnappointSelected = Boolean(springStateSnapPoint) ? 0 : 1;
        updateStateLastEvent(nextSnappointSelected);
      }}
      style={{
        display: "block",
        position: "fixed",
        zIndex: 4,
        width: "100vw",
        height: springStateDetails.height.interpolate(h => `${h}px`),
        left: 0,
        bottom: `0px`,
        backgroundColor: "rgba(255,255,255,0.1)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        opacity: springState.o.interpolate(o => o),
        transform: `translateY(${show ? 0 : HEIGHT_SNAPPOINTS_OVERLAY[0]}px)`,
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
      <DivAnimated
        flexDirection="column"
        p="4"
        height="600px"
        postion="relative"
        style={{
          zIndex: 5,
          transform: springStateDetails.o.interpolate(o => `translateY(${calcFromTo(o, 25, 0)}px)`),
          opacity: springStateDetails.o.interpolate(o => `${o}`)
        }}
      >
        <HomeFoodDetailSection>
          <h1 style={overlayTitle}>{recipe.title}</h1>
        </HomeFoodDetailSection>
        <HomeFoodDetailSection mt="1" mb="3">
          {ratingStars.map((RatingStar, index) => (
            <span key={index + recipe.id} style={{ marginRight: "4px" }}>
              <RatingStar />
            </span>
          ))}
          <span style={overlayPeopleScore}>{recipe.score} People score</span>
        </HomeFoodDetailSection>
        <HomeFoodDetailSection>
          {recipe.tags.map((i, index) => (
            <span
              key={index + recipe.id}
              style={{
                borderRadius: "3px",
                padding: "6px 15px",
                backgroundColor: chroma(colors.themeDark4).alpha(0.45),
                marginRight: "10px",
                ...overlayTags
              }}
            >
              {i}
            </span>
          ))}
        </HomeFoodDetailSection>
        <HomeFoodDetailSection>{<p style={overlayDescription}>{recipe.preparation}</p>}</HomeFoodDetailSection>
        <hr
          style={{
            width: "100%",
            borderColor: chroma(colors.themeLight2).alpha(0.25),
            borderBottom: "none",
            margin: "15px 0px"
          }}
        />
        <HomeFoodDetailSection flexDirection="column">
          <h2 style={overlayIngredientsTitle}>Ingredients</h2>
          <Div style={{ flexWrap: "wrap" }}>
            {recipe.ingredients.map((i, index) => (
              <Div style={{ flexWrap: "wrap", marginTop: "10px" }} width="50%" key={index + recipe.id}>
                <span style={{ ...overlayIngredients, marginRight: "5px" }}>{i.foodItem}</span>
                <span style={{ ...overlayIngredients, marginRight: "5px" }}>{i.foodAmount}</span>
              </Div>
            ))}
          </Div>
        </HomeFoodDetailSection>
        <HomeFoodDetailSection alignItems="flex-end" flex="1">
          <Button color="white" bg="black" width="100%" justifyContent="center">
            Tilføj opskrift
          </Button>
        </HomeFoodDetailSection>
        <HomeFoodDetailSection height="50px" alignItems="center" justifyContent="space-between">
          <Div alignItems="center" p="2">
            <IconHeartFill />
            <span style={{ marginLeft: "8px", ...overlayStatus }}>{recipe.status.likes}</span>
          </Div>
          <Div alignItems="center" p="2">
            <IconMessage />
            <span style={{ marginLeft: "8px", ...overlayStatus }}>{recipe.status.comments}</span>
          </Div>
          <Div alignItems="center" p="2">
            <ButtonUI onClick={handleWebShare}>
              <IconShare />
              <span style={{ marginLeft: "8px", ...overlayStatus }}>{recipe.status.shared}</span>
            </ButtonUI>
          </Div>
        </HomeFoodDetailSection>
      </DivAnimated>
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
