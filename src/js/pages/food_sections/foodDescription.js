import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Div } from "../../layouts/layout";
import {
  headerFoodTitle,
  headerFoodSubTitle,
  headerFoodDescription,
  foodNutritionType,
  foodNutritionAmount,
  foodNutritionHeader,
  foodNutritionSubHeader
} from "../../components/typography";
import { IconAddToBasket } from "../../../img/icons/Icons";
import Interactable from "react-interactable/noNative";
import { shadows, colors } from "../../../style/theme";

import { NAVBOTTOM_HEIGHT } from "../../layouts/navBottom";
import { NAVTOP_HEIGHT } from "./foodTop";
import Badge from "../../components/badge";
import Button from "../../ui/button";
import { setStatusbarColor } from "../../utility/utility.js";
import { Trail, animated } from "react-spring/renderprops";
import { useSpring, animated as animatedSpring } from "react-spring";

import { addProductToBasket } from "../../store/actions/action_basket";
import { connect } from "react-redux";

const FoodDescriptionContainer = styled(Div)({
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  overflow: "hidden",
  alignItems: "flex-end"
});

const FoodDescriptionContent = styled(Div)({
  flexWrap: "wrap",
  bottom: "0px",
  width: "100vw"
});

const h1 = 120;
const h2 = 235;
const h3 = window.innerHeight - h2 - h1 - NAVBOTTOM_HEIGHT;
const heightTotal = h1 + h2 + h3;

const styleInteractable = isFullscreen => ({
  borderTopLeftRadius: isFullscreen ? 0 : "40px",
  borderTopRightRadius: isFullscreen ? 0 : "40px",
  transition: "border-radius 0.5s ease 0s",
  backgroundColor: "white",
  height: `${heightTotal}px`,
  boxShadow: "0px -8px 5px 0px rgba(0,0,0,0.03)",
  position: "relative",
  zIndex: 2
});

const FoodH1 = ({ food }) => {
  const from = { transform: "translate3d(0,20px,0)", opacity: 0 };
  const to = { transform: "translate3d(0,0,0)", opacity: 1 };
  const [props, set, stop] = useSpring(() => ({ transform: "translate3d(0,20px,0)", opacity: 1 }));
  set({ transform: "translate3d(0,0,0)", opacity: 1 });
  return (
    <Div flexDirection="column">
      <animatedSpring.div style={props}>
        <h1 style={headerFoodTitle}>{food.title}</h1>
      </animatedSpring.div>
      <animatedSpring.div style={props}>
        <h1 style={headerFoodSubTitle}>{food.subTitle}</h1>
      </animatedSpring.div>
    </Div>
  );
};

const FoodH2 = ({ food, addProductToBasket }) => {
  return (
    <Div flexDirection="column" justifyContent="space-between">
      <Div flexWrap="wrap">
        <Div alignSelf="flex-start">
          {food.tags.map(bagde => (
            <Badge text={bagde} key={bagde} />
          ))}
        </Div>
        <Div mt="4">
          <p style={headerFoodDescription}>{food.description}</p>
        </Div>
      </Div>
      <Div mt="4" alignItems="center" justifyContent="space-between">
        <Button onClick={() => addProductToBasket(food.id)} bgColor={colors.themeRed3} color={colors.white}>
          Tilføj til kurv
          <IconAddToBasket />
        </Button>
        <h2 style={headerFoodTitle}>${Math.round(Number(food.price))}</h2>
      </Div>
    </Div>
  );
};

const FoodH2Connect = connect(
  null,
  { addProductToBasket }
)(FoodH2);

const dailyKcal = 2500;
const nutrition = {
  protein: {
    dailyMacronutrientPercentage: 0.2,
    kcalPrGram: 4,
    color: "red"
  },
  carb: {
    dailyMacronutrientPercentage: 0.5,
    kcalPrGram: 4,
    color: "orange"
  },
  fat: {
    dailyMacronutrientPercentage: 0.3,
    kcalPrGram: 9,
    color: "tomato"
  }
};

function gramOfNutritionTypePerDay(key) {
  const { dailyMacronutrientPercentage, kcalPrGram } = nutrition[key];
  // const nutritionBarWidth = window.innerWidth - 60
  return (dailyKcal * dailyMacronutrientPercentage) / kcalPrGram;
}

const FoodNutritionItem = ({ item, x, opacity }) => {
  const [key, value] = item;
  const gramOfNutrition = gramOfNutritionTypePerDay(key);
  const barWidth = (gramOfNutrition / 100) * value;

  return (
    <Div flexDirection="column" position="relative" mb="3">
      <Div justifyContent="space-between" mb="1">
        <Div>
          <span style={foodNutritionType}>{key}</span>
          <span style={{ ...foodNutritionAmount, marginLeft: "10px" }}>{value} g</span>
        </Div>
        <span style={foodNutritionAmount}>{Math.round((value / gramOfNutrition) * 100)} %</span>
      </Div>
      <Div
        width="100%"
        height="4px"
        backgroundColor="lightgrey"
        opacity="0.5"
        borderRadius="2px"
        position="absolute"
        bottom="0px"
      />
      <animated.div
        key={key}
        style={{
          borderRadius: "2px",
          transformOrigin: "center left",
          backgroundColor: nutrition[key]["color"],
          width: `${barWidth}px`,
          height: "4px",
          opacity,
          transform: x.interpolate(x => `scaleX(${x})`)
        }}
      />
    </Div>
  );
};

class FoodH3 extends React.Component {
  state = {
    animatedStarted: false,
    animateTo: { opacity: 0, x: 0 }
  };

  componentDidUpdate() {
    if (this.props.active && this.state.animatedStarted === false) {
      this.setState({
        animatedStarted: true,
        animateTo: { opacity: 1, x: 1 }
      });
    }
  }

  render() {
    return (
      <Div width="100%" flexDirection="column">
        <Trail
          native
          items={Object.entries(this.props.food.nutrition)}
          keys={item => item[0]}
          from={{ opacity: 0, x: 0 }}
          to={this.state.animateTo}
        >
          {item => ({ x, opacity }) => {
            return <FoodNutritionItem item={item} opacity={opacity} x={x} />;
          }}
        </Trail>
      </Div>
    );
  }
}

const Underlay = styled.div(() => ({
  position: "fixed",
  top: `${NAVTOP_HEIGHT}px`,
  width: "100%",
  height: "500px",
  backgroundColor: "black",
  opacity: 0
}));

const FoodDescriptionItem = styled(Div)({
  borderBottom: `1px solid ${colors.themeLight2}`,
  padding: "30px",
  paddingTop: "20px",
  width: "100%"
});

const FoodDescription = ({ food, addProductToBasket }) => {
  let menuRef = null;
  const [sliderIndex, setPosition] = useState(1);
  useEffect(() => menuRef.snapTo({ index: 1 }), []);
  return (
    <FoodDescriptionContainer>
      <Underlay
        onClick={() => {
          if (sliderIndex === 1) {
            menuRef.snapTo({ index: 2 });
          }
        }}
      />
      <Interactable.View
        ref={ref => {
          menuRef = ref;
        }}
        style={styleInteractable(sliderIndex === 0)}
        snapPoints={[{ damping: 0.7, y: 0 }, { damping: 0.7, y: h3 }, { damping: 0.7, y: h3 + h2 }]}
        // boundaries={{top: 0}}
        onSnap={e => {
          setPosition(e.index);
        }}
        initialPosition={{ y: h3 + 100 }}
        verticalOnly={true}
      >
        <FoodDescriptionContent>
          <FoodDescriptionItem height={`${h1}px`}>
            <FoodH1 food={food} />
          </FoodDescriptionItem>
          <FoodDescriptionItem height={`${h2}px`} style={{ paddingTop: "20px" }}>
            <FoodH2Connect food={food} />
          </FoodDescriptionItem>
          <FoodDescriptionItem height={`${h3 + 300}px`} backgroundColor={"white"}>
            <FoodH3 food={food} active={sliderIndex === 0} />
          </FoodDescriptionItem>
        </FoodDescriptionContent>
      </Interactable.View>
    </FoodDescriptionContainer>
  );
};

export default FoodDescription;
