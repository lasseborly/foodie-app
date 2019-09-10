import React, {useState} from "react";
import styled from '@emotion/styled'

import { Div } from '../layouts/layout'

const ImgContainer = styled.img(({loaded}) => ({
    transition: "opacity 0.3s",
    opacity: loaded ? 1 : 0
}))

const Image = ({style, src, ...rest}) => {
    const [loaded, setImgLoadingStatus] = useState(false)
    return <ImgContainer
        src={src}
        style={style} 
        onLoad={() => setImgLoadingStatus(true)}
        loaded={loaded}
        {...rest} 
        />
}

export default Image
