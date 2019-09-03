import React from "react";
import styled from '@emotion/styled'
import Interactable from 'react-interactable/noNative'

import { Div } from '../layouts/layout'
import { colors, shadows } from '../../style/theme'
import debounce from 'debounce'
import { IconTrash } from '../../img/icons/Icons'


const RowIconStyled = styled(Div)(({ bgColor }) => {
  return {
    width: 75,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: bgColor,
    color: "white",
    transition: "opacity 0.2s",
    "&:active": {
      opacity: "0.5"
    }
  }
})

const RowIcon = ({title, ...props}) => {
  return <RowIconStyled {...props}>
  <h1>{title}</h1>
</RowIconStyled>
}

const RowIconContainer = styled.div(({side}) => ({
    height: 75, 
    display: "flex",
    flexDirection: 'row', 
    alignItems: 'center',
}))

class Row extends React.Component {
    constructor(props) {
      super(props);
    //   this._deltaX = new Animated.Value(0);
      this.state = {isMoving: false, position: 1};
    }

    render() {
      const tension = 400
      const damping = 0.4

      return (
        <Div 
            flex="1"
            justifyContent="space-between"
            backgroundColor="themeLight2" 
            height="75px"
            width="100vw"
            borderBottom={`1px solid ${colors.grey1}`}
            style={{boxShadow: shadows.sectionShadow, "scrollSnapAlign": "start" }}>
                
          <RowIconContainer>
            <RowIcon title={ <IconTrash  /> } bgColor="#FFD819"/>
          </RowIconContainer>

          <RowIconContainer>
            <RowIcon title="+" bgColor="#DAE69B" />
            <RowIcon title="-" bgColor="#FF8B7C" />
          </RowIconContainer>

  
          <Interactable.View
            dragEnabled={this.props.touchActive}
            ref={el => this.interactableElem = el}
            horizontalOnly={true}
            snapPoints={[
              {x: 75, damping: 1 - damping, tension},
              {x: 0, damping: 1 - damping, tension: tension},
              {x: -150, damping: 1 - damping, tension}
            ]}
            onSnap={this.onSnap.bind(this)}
            onDrag={this.onDrag.bind(this)}
            onStop={this.onStopMoving.bind(this)}
            dragToss={0.5}
            style={{
                width: "100vw",
                position: "absolute",
                left: 0,
            }}
            >
            <Div onMouseUp={this.onRowPress.bind(this)} width="100%">
                {this.props.children}
            </Div>
          </Interactable.View>
  
        </Div>
      );
    }
    onSnap(nativeEvent) {
      const { index } = nativeEvent;
      this.setState({position: index});
    }
    onRowPress() {
      const { isMoving, position } = this.state;
      if (!isMoving && position !== 1) {
        this.interactableElem.snapTo({index: 1});
      }
    }
    onDrag(nativeEvent) {
      if (nativeEvent.state === 'start') {
        this.setState({isMoving: true});
      }
    }

    onStopMoving() {
      this.setState({isMoving: false});
      const test = document.getElementById("test")
    }
}

export default Row