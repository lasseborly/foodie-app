import React from "react";
import styled from '@emotion/styled'
import { Div } from '../layouts/layout'
import HomeTop from './home_sections/homeTop'
import HomeSlider from './home_sections/homeSlider'
import HomeRecommendations from './home_sections/homeRecommendations'
import HomeWeeklyRecipes from './home_sections/homeWeeklyRecipes'

const Home = () => {
    return (
      <Div flexDirection="column" bg={"themeLight2"}>
        <HomeTop />
        <HomeSlider />
        <HomeRecommendations />
        <HomeWeeklyRecipes />
      </Div>
    )
  }

export default Home