import React from "react";
import { Div } from '../layouts/layout'
import FoodTop from './food_sections/foodTop'
import FoodDescription from './food_sections/foodDescription'
import FoodNutrition from './food_sections/foodNutrition'

import { colors } from '../../style/theme'
import { setStatusbarColor } from '../utility/utility.js'

const food = {
  bgColor: "lightBrown1",
  ctaColor: "lightBrown2",
  title: "Durian Mon Tong",
  subTitle: "King of Fruits",
  description: "A fruit with a thick peel, such as a citrus fruit, is called a hesperidium. In hesperidia, the inner layer is peeled off together with the outer layer."
}

const Food = () => {
  setStatusbarColor(food.bgColor)
  return (
    <Div flexDirection="column" bg={"white"} height="100%" position="relative">
      <FoodTop food={food} />
      <FoodDescription food={food} />
      <FoodNutrition food={food} />
    </Div>
  )
  }

export default Food