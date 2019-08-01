import React from "react";
import styled from '@emotion/styled'
import { Div } from '../layouts/layout'
import HomeTop from './home_sections/homeTop'
import HomeSlider from './home_sections/homeSlider'

const Home = () => {
    return (
      <Div flexDirection="column">
        <HomeTop />
        <HomeSlider />
      </Div>
    )
  }

export default Home