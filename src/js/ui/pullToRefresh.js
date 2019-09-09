import React from "react";
import Interactable from 'react-interactable/noNative'
import styled from '@emotion/styled'
import { Animated } from 'animated';

const styles = {
    cover: {
      height: "100%",
      backgroundColor: '#e0e0e0',
      width: "100%",
    },
    label: {
      textAlign: 'center',
      fontSize: 18
    }
};

const ContainerDrawer = styled.div({
    display: "flex",
    flexDirection: "column",
    border: "3px solid black",
    width: "80%",
    overflow: "hidden"
})

const Item = styled.div({
    display: "flex",
    width: "100%",
    borderBottom: "1px solid red"
})


class PullToRefresh extends React.Component {
    // _deltaX = new Animated.Value(0);
    
    componentDidMount() {
        setInterval(() => {
            // console.log(this._deltaY)
        }, 100)
    }
    render () {
        return (
            <ContainerDrawer>
                <Interactable.View
                    onDrag={(e) => console.log(e)}
                    style={{border: "1px solid red"}}
                    snapPoints={[{y: 0}]}
                    boundaries={{bottom: 200}}
                    // animatedValueY={this._deltaY}
                    verticalOnly={true}>
                    <div style={styles.cover}>
                        {
                            Array(50).fill().map((item, i) => <Item key={i}>{i}</Item> )
                        }
                    </div>
                </Interactable.View>
            </ContainerDrawer>
        )
    }
}

export default PullToRefresh