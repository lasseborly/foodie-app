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

const ContainerDrawer = styled.div({
    display: "flex",
    flexDirection: "column",
})

const ContainerItem = styled.div({
    backgroundColor: '#fea549', 
    marginBottom: 50,
    border: "1px solid black"
})


class Drawers extends React.Component {
    render () {
        return (
            <ContainerDrawer>

                <ContainerItem>
                    <Interactable.View
                        snapPoints={[{x: 0}, {x: -230}]}
                        horizontalOnly={true}>
                        <div style={styles.cover}>
                            <span style={styles.label}>Default drawer</span>
                        </div>
                    </Interactable.View>
                </ContainerItem>
                
                <ContainerItem>
                    <Interactable.View
                        snapPoints={[{x: 0}, {x: -230}]}
                        boundaries={{right: 0}}
                        horizontalOnly={true}>
                        <div style={styles.cover}>
                            <span style={styles.label}>Drawer with limits</span>
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
                        springPoints={[{x: 0, tension: 6000, damping: 0.5, influenceArea: {left: 0}}]}
                        horizontalOnly={true}>
                        <div style={styles.cover}>
                            <span style={styles.label}>Drag with spring resistance</span>
                        </div>
                    </Interactable.View>
                </ContainerItem>

            </ContainerDrawer>
        )
    }
}

export default Drawers