import React from "react";
import styled from '@emotion/styled'
import Interactable from 'react-interactable/noNative'

import { Div } from '../layouts/layout'
import { colors, shadows } from '../../style/theme'
import debounce from 'debounce'

const debounceSetState3 = debounce((fn, newState) => {fn(newState)}, 250)

const RowIcon = ({ title }) => {
    return <Div style={{
        width: 75,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgrey"
        }}>
        <h1>{title}</h1>
    </Div>
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
        // if(this.props.scrollActive) {
        //     console.log("SCROLL")
        // } else {
        //     console.log("DRAG")
        // }
      return (
        <Div 
            flex="1"
            justifyContent="space-between"
            backgroundColor="themeLight1" 
            height="75px"
            width="100vw"
            borderBottom={`1px solid ${colors.grey1}`}
            style={{boxShadow: shadows.sectionShadow}}>
                
          <RowIconContainer>
            <RowIcon title="h1" />
          </RowIconContainer>

          <RowIconContainer>
            <RowIcon title="t1" />
            <RowIcon title="t2" />
          </RowIconContainer>

  
          <Interactable.View
            dragEnabled={this.props.scrollActive === false}
            ref={el => this.interactableElem = el}
            horizontalOnly={true}
            snapPoints={[
              {x: 75, damping: 1-this.props.damping, tension: this.props.tension},
              {x: 0, damping: 1-this.props.damping, tension: this.props.tension},
              {x: -150, damping: 1-this.props.damping, tension: this.props.tension}
            ]}
            onSnap={this.onSnap.bind(this)}
            onDrag={this.onDrag.bind(this)}
            onStop={this.onStopMoving.bind(this)}
            dragToss={0.5}
            style={{
                width: "100vw",
                backgroundColor: "red",
                position: "absolute",
                left: 0
            }}
            // animatedValueX={this._deltaX}
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
        debounceSetState3(this.props.handleDrag, true)
        this.setState({isMoving: true});
      }
    }

    onStopMoving() {
      this.setState({isMoving: false});
    }
}

export default Row