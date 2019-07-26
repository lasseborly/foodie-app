import React from "react";
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'

import globalStyles from '../style/globalStyles'
import Drawers from './ui/drawers'
import Header from './layouts/header'

const ContainerApp = styled.div({
  display: "flex",
  justifyContent: "center",
  overscrollBehavior: "contain",
  marginTop: "5px",
  paddingTop: "60px",
  backgroundColor: 'white',
  height: "100%",
  minHeight: "100vh"
})

class App extends React.Component {
  render() {
    return (
      <ContainerApp>
        <Header />
        <Global styles={globalStyles} />
        <Drawers />
      </ContainerApp>
    );
  }
}

export default App;
