import React, {useRef, useEffect, useState} from "react";
import styled from '@emotion/styled'
import { Global } from '@emotion/core'
import { Route, Switch, withRouter, matchPath} from "react-router-dom";
import { useSpring, animated } from 'react-spring'
import { useDrag, useScroll } from 'react-use-gesture'

import globalStyles from '../style/globalStyles'

import NavBottom from './layouts/navBottom'
import NavTop from './layouts/navTop'

import Home from './pages/home'
import Order from "./pages/order";
import Profile from "./pages/profile";
import List from "./pages/list";

import Recipes from './pages/recipes'
import Food from './pages/food'

import Page404 from './pages/page404'

import { colors } from '../style/theme'

const ContainerApp = styled.div({
  display: "flex",
  overscrollBehavior: "contain",
  backgroundColor: 'white',
  height: '100vh',
  flexDirection: "column"
})

const Main = styled(animated.div)(() => ({
  flex: 1,
  overflowY: "auto",
  "WebkitOverflowScrolling": "touch"
  // position: "relative",
}))


const Item = styled.div({
  height: "150px",
  backgroundColor: "tomato",
  marginBottom: "20px",
  padding: "20px",
  display: "flex",
  overflowX: "scroll",
  "WebkitOverflowScrolling": "auto",

})
const Item2 = styled.div({
  minWidth: "33vw",
  height: "100%",
  backgroundColor: "red",
  marginLeft: "20px",
})


const App = (props) => {
  return (
    <ContainerApp>
      <Global styles={globalStyles} />
      <Main id="main">
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/detail/food/:id" render={(props) => <Food {...props} />} />
          <Route path="/detail/recipes/:id" render={(props) => <Recipes {...props} />} />
          <Route path="/profile" exact render={() => <Profile />} />
          <Route path="/list" exact render={() => <List />} />
          <Route path="/order" exact render={() => <Order />} />
          <Route component={Page404}/>
        </Switch>
      </Main>
      
      {/* <Dummy /> */}
      <NavBottom history={props.history}/>
      
    </ContainerApp>
  );
}

export default withRouter(App);
