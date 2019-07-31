import React from "react";
import styled from '@emotion/styled'

const ContainerHeader = styled.div({
    display: "flex",
    height: "40px",
    backgroundColor: '#fe4a49',
    color: "white",
    position: "fixed",
    top: 0,
    width: "100%",
    justifyContent: "center"
    
})

class Header extends React.Component {
    render () {
        return (
            <ContainerHeader>
                <h1 style={{fontSize: "1rem", fontFamily: "Roboto", fontWeight: "700"}}>Foodie</h1>
            </ContainerHeader>
        )
    }
}

export default Header