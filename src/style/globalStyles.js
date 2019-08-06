import { colors } from './theme'

export default {
    'body': {
        fontFamily: "Montserrat, sans-serif",
        fontSize: "16px",
        margin: 0,
        padding: 0,
        width: "100%",
        position: "fixed",
        overflow: "hidden",
        display: "flex"
    },

    '#root': {
        flex: 1,
        minHeight: "100vh",
        width: "100vw",
        height: "100vh",
        overflowY: "scroll",
        // "-webkit-overflow-scrolling": "touch",
    },

    "*": { 
        boxSizing: "border-box" 
    }, 

    "a": {
        textDecoration: "none",
        color: "inherit"
    },

    "h1,h2,h3,h4,h5,h6,p": {
        fontWeight: "normal",
        fontStyle: "normal",
        padding: 0,
        margin: 0
      }
}