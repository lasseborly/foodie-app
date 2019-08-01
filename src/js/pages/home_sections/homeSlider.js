import React from "react";
import styled from '@emotion/styled'
import { Div } from '../../layouts/layout'
import { headerHome, headerSearchField } from '../../components/typography'


const SliderItem = styled.input({
  height: `130px`,
  width: "100px",
  borderRadius: "10px",
  border: "1px solid red",
})

const sliderItemData = [
  {
    header: "Strawberry Cream Waffles",
    price: "7",
    kcal: 274
  },
  {
    header: "Strawberry Cream Waffles",
    price: "7",
    kcal: 274
  },{
    header: "Strawberry Cream Waffles",
    price: "7",
    kcal: 274
  },
  {
    header: "Strawberry Cream Waffles",
    price: "7",
    kcal: 274
  },
  {
    header: "Strawberry Cream Waffles",
    price: "7",
    kcal: 274
  }
]

const HomeSlider = () => {
    return (
      <Div border="1px solid red" pb={"60px"} flex="1">
        {
           sliderItemData.map(i => <SliderItem />)
        }
      </Div>
    )
  }

export default HomeSlider