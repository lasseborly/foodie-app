import React from "react";
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { Div } from '../../layouts/layout'
import { headerHome, headerSearchField } from '../../components/typography'
import { IconSearch } from '../../../img/icons/Icons'

const HEIGHT_INPUT = 50

const InputContainer = styled.div({
  position: "absolute",
  bottom: `-${HEIGHT_INPUT/2}px`,
  width: "70%",
  display: "flex"
})

const InputSearchIcon = styled.div({
  height: `${HEIGHT_INPUT}px`,
  backgroundColor: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingLeft: "20px",
  borderTopLeftRadius: "4px",
  borderBottomLeftRadius: "4px",
})

const InputSearchField = styled.input({
  height: `${HEIGHT_INPUT}px`,
  width: "100%",
  fontSize: "18px",
  borderRadius: "0px", // resetting border radius on iOS
  borderTopRightRadius: "4px",
  borderBottomRightRadius: "70px",
  border: "none",
  paddingLeft: "20px",
  outline: "none",
  ...headerSearchField
})

const HomeTop = () => {
    return (
      <Div bg="themeRed2" pb={"60px"} flex="1" css={{borderBottomRightRadius: "140px"}}>
        <Div 
          bg="themeRed1" flex="1" 
          height="150px"
          alignItems="center"
          px="4"
          position="relative"
          css={{borderBottomRightRadius: "70px"}}>
            <Div display="block">
              <h1 style={headerHome}>God eftermiddag</h1>
              <h1 style={headerHome}>Find dine madvarer!</h1>
            </Div>
          <InputContainer>
            <InputSearchIcon>
              <IconSearch/>
            </InputSearchIcon>
            <InputSearchField type="text" placeholder="Søg efter produkter" />
          </InputContainer>
        </Div>
      </Div>
    )
  }

export default HomeTop