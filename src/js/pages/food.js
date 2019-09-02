import React from "react";
import { Div } from '../layouts/layout'
import FoodTop from './food_sections/foodTop'
import FoodDescription from './food_sections/foodDescription'

import NavTop from '../layouts/navTop'

import { setStatusbarColor } from '../utility/utility.js'

const Food = (props) => {
  const { food } = props.location.state
  setStatusbarColor(food.bgColor)
  return (
    <Div flexDirection="column" bg={"white"} height="100%" position="relative">
      <NavTop />
      <FoodTop food={food} />
      <FoodDescription food={food} />
    </Div>
  )
  }

export default Food