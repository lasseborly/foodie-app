import React from "react";
import styled from '@emotion/styled'
import { Global, css } from '@emotion/core'

import globalStyles from '../style/globalStyles'
import Sliders from './ui/sliders'
import Drawer from './ui/drawers'
import PullToRefresh from './ui/pullToRefresh'

import Header from './layouts/header'

const ContainerApp = styled.div({
  display: "flex",
  overscrollBehavior: "contain",
  backgroundColor: 'white',
  height: '100vh',
  flexDirection: "column"
})

const Item = styled.div({
  display: "flex",
  width: "100%",
  borderBottom: "1px solid red"
})


const NavTop = () => {
  return <div style={{height: "40px", display: "flex", backgroundColor: "red"}}>
    TOP
  </div>
}

const NavBottom = () => {
  return <div style={{height: "40px", display: "flex", backgroundColor: "orange", justifyContent: "space-between"}}>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
  </div>
}

const Main = styled.div({
  flex: 1,
  overflowY: "auto",
  "-webkit-overflow-scrolling": "touch",
})

class App extends React.Component {
  state = {
    g: globalStyles
  }
  componentDidMount() {
    setTimeout(() => {
      console.log(this.state)
      const newState = {...this.state.g}
      newState.body.backgroundColor = "blue"
      this.setState(newState)
      console.log("done")
    }, 3000)  
  }
  render() {
    return (
      <ContainerApp>
        <Global styles={this.state.g} />
        <NavTop  />
        {/* <Sliders /> */}
        {/* <Drawer /> */}
        {/* <PullToRefresh /> */}
        <Main>
          {
            Array(50).fill().map((item, i) => <Item key={i}>{i}</Item> )
          }
        </Main>
        <NavBottom />
      </ContainerApp>
    );
  }
}

export default App;
