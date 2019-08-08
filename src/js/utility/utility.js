import { colors } from '../../style/theme'

export const setStatusbarColor = (key = "white") => {
    const body = document.querySelector("body")
    const statusbarColor = colors[key] || key
    body.setAttribute("style", `background-color: ${statusbarColor}`)
}