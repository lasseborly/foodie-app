import React from "react";
import { Div } from '../layouts/layout'
import FoodTop from './food_sections/foodTop'
import FoodDescription from './food_sections/foodDescription'

const food = {
  bgColor: "lightBrown1",
  ctaColor: "lightBrown2",
  title: "Durian Mon Tong",
  subTitle: "King of Fruits",
  description: "A fruit with a thick peel, such as a citrus fruit, is called a hesperidium. In hesperidia, the inner layer is peeled off together with the outer layer, and together they are called the peel."
}

const Food = () => {
    return (
      <Div flexDirection="column" bg={"white"} height="100%" position="relative">
        <FoodTop food={food} />
        <FoodDescription food={food} />
      </Div>
    )
  }

export default Food