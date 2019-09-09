import React from "react";
import Interactable from 'react-interactable/noNative'
import styled from '@emotion/styled'

const styles = {
    cover: {
      left: 0,
      right: 0,
      height: 75,
      backgroundColor: '#e0e0e0',
      justifyContent: 'center',
      width: "100%"
    },
    label: {
      textAlign: 'center',
      fontSize: 18
    }
};

const ContainerSlider = styled.div({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center"
})

const ContainerItem = styled.div({
    backgroundColor: '#fea549', 
    marginBottom: 50,
    border: "1px solid black",
    width: "200px"
})


class Sliders extends React.Component {

    render () {
        return (
            <ContainerSlider>
                <div style={{border: "1px solid black", fontSize: "16px"}} onClick={() => {
                    this.interactableRef.snapTo({index: 0});
                }}>
                    Snap to
                </div>

                <ContainerItem>
                    <Interactable.View
                        ref={(ref) => { this.interactableRef = ref }}
                        snapPoints={[{x: 0}, {x: -230}]}
                        horizontalOnly={true}>
                        <div style={styles.cover}>
                            <span style={styles.label}>Default Slider</span>
                        </div>
                    </Interactable.View>
                </ContainerItem>
                
                <ContainerItem>
                    <Interactable.View
                        snapPoints={[{x: 0}, {x: -230}]}
                        boundaries={{right: 0}}
                        horizontalOnly={true}>
                        <div style={styles.cover}>
                            <span style={styles.label}>Slider with limits</span>
                        </div>
                    </Interactable.View>
                </ContainerItem>

                <ContainerItem>
                    <Interactable.View
                        snapPoints={[{x: 0}, {x: -230}]}
                        boundaries={{right: 0, bounce: 0.2, haptics: true}}
                        horizontalOnly={true}>
                        <div style={styles.cover}>
                            <span style={styles.label}>Limits with bounce</span>
                        </div>
                    </Interactable.View>
                </ContainerItem>

                <ContainerItem>
                    <Interactable.View
                        snapPoints={[{x: 0}, {x: -230}]}
                        dragWithSpring={{tension: 1000, damping: 0.7}}
                        horizontalOnly={true}>
                        <div style={styles.cover}>
                            <span style={styles.label}>Drag via spring</span>
                        </div>
                    </Interactable.View>
                </ContainerItem>

                <ContainerItem>
                    <Interactable.View
                        snapPoints={[{x: 0}, {x: -230}]}
                        dragWithSpring={{tension: 2000, damping: 0.5}}
                        springPoints={[{x: 0, tension: 10000, damping: 0.5, influenceArea: {left: 0}}]}
                        horizontalOnly={true}>
                        <div style={styles.cover}>
                            <span style={styles.label}>Drag with spring resistance</span>
                        </div>
                    </Interactable.View>
                </ContainerItem>

                <ContainerItem>
                    <Interactable.View
                        snapPoints={[{x: 0}, {x: -230}]}
                        dragWithSpring={{tension: 2000, damping: 0.5}}
                        springPoints={[{x: 0, tension: 10000, damping: 0.5, influenceArea: {left: 0}}]}
                        horizontalOnly={true}>
                        <div style={styles.cover}>
                            <span style={styles.label}>Drag with spring resistance</span>
                        </div>
                    </Interactable.View>
                </ContainerItem>

                <ContainerItem>
                    <Interactable.View
                        snapPoints={[{x: 0}, {x: -230}]}
                        dragWithSpring={{tension: 2000, damping: 0.5}}
                        springPoints={[{x: 0, tension: 10000, damping: 0.5, influenceArea: {left: 0}}]}
                        horizontalOnly={true}>
                        <div style={styles.cover}>
                            <span style={styles.label}>Drag with spring resistance</span>
                        </div>
                    </Interactable.View>
                </ContainerItem>
            </ContainerSlider>
        )
    }
}

export default Sliders