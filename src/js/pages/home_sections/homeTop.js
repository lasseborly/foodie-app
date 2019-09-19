import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Div } from "../../layouts/layout";
import { overlayTitle, overlayDescription, headerSearchField } from "../../components/typography";
import { IconSearch, IconFoodie } from "../../../img/icons/Icons";
import { ButtonUI } from "../../ui/button";
import { shadows } from "../../../style/theme";
const HEIGHT_INPUT = 50;

const HomeTop = () => {
  return (
    <Div position="relative" height="65px">
      <Div
        bg="themeRed2"
        flex="1"
        p="3"
        alignItems="center"
        justifyContent="center"
        css={{
          width: "100%",
          boxShadow: shadows.topNavigationShadow,
          overflow: "hidden",
          position: "fixed",
          zIndex: 2,
          backgroundImage: `radial-gradient( 150px 40px at 195px bottom,  rgba(255,154,98,1) 0%, #FF8B7C  100.2% )`
        }}
      >
        <ButtonUI css={{ backgroundColor: "transparent", position: "absolute", left: 0 }}>
          <IconFoodie />
        </ButtonUI>
        <Div display="flex" justifyContent="center">
          <h1 style={{ ...overlayTitle, fontSize: "1.4rem" }}>Foodie</h1>
        </Div>
      </Div>
    </Div>
  );
};

export default HomeTop;
