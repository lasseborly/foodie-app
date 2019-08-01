import React from "react";
import styled from '@emotion/styled'
import { Global } from '@emotion/core'
import { Route, Switch, withRouter } from "react-router-dom";

import globalStyles from '../style/globalStyles'

import NavBottom from './layouts/navBottom'
import NavTop from './layouts/navTop'

import Home from './pages/home'
import Order from "./pages/order";
import Profile from "./pages/profile";
import List from "./pages/list";

import Recipes from './pages/recipes'

import Page404 from './pages/page404'

import { colors } from '../style/theme'

const ContainerApp = styled.div({
  display: "flex",
  overscrollBehavior: "contain",
  backgroundColor: 'white',
  height: '100vh',
  flexDirection: "column"
})

const Main = styled.div({
  flex: 1,
  overflowY: "auto",
  backgroundColor: colors.themeRed1,
  "-webkit-overflow-scrolling": "touch",
})

class App extends React.Component {
  render() {
    return (
      <ContainerApp>
        <Global styles={globalStyles} />
        <NavTop  />
        <Main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/detail/recipes/:id" component={Recipes} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/list" exact component={List} />
            <Route path="/order" exact component={Order} />
            <Route component={Page404}/>
          </Switch>
        </Main>
        <NavBottom history={this.props.history}/>
      </ContainerApp>
    );
  }
}

export default withRouter(App);
