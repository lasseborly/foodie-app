import React from "react";
import styled from "@emotion/styled";
import { Div } from "../layouts/layout";
import HomeTop from "./home_sections/homeTop";
import HomeSlider from "./home_sections/homeSlider";
import HomeTrendy from "./home_sections/homeTrendy";
import HomeRecommendations from "./home_sections/homeRecommendations";
import HomeWeeklyRecipes from "./home_sections/homeWeeklyRecipes";

import { setStatusbarColor } from "../utility/utility.js";

const Home = () => {
  setStatusbarColor("themeRed1");

  return (
    <Div flexDirection="column" bg={"themeLight2"}>
      <HomeTop />
      <HomeSlider />
      <HomeTrendy />
      <HomeRecommendations />
      <HomeWeeklyRecipes />
    </Div>
  );
};

export default Home;
