import chroma from "chroma-js";

export const colors = {
  white: "#FFFFFF",
  themeLight1: "#FFF5F0",
  themeLight2: "#F9F0EA",
  themeRed1: "#FF8B7C",
  themeRed2: "#FB7463",
  themeRed3: "#FE6450",
  themeDark1: "#876863",
  themeDark2: "#270101",
  themeDark3: "#2c2221",
  themeDark4: "#4A4643",
  lightBrown1: "#F0DBB5",
  lightBrown2: "#FFD819",
  grey1: "#EDE4E3",
  grey2: "#C0C0C0",
  grey3: "#999999",
  grey4: "#6b6b6b",
  cardColor1a: "#FFC599",
  cardColor1b: "#F18603",
  cardColor2a: "#F0DBB5",
  cardColor2b: "#FFD819",
  cardColor3a: "#DAE69B",
  cardColor3B: "#d7f249",
  cardColor4a: "#FFF5F0",
  cardColor4b: "#831B4C",
  cardColor5a: "#fae2b4",
  cardColor5b: "#EFA007",
  cardColor6a: "#EDD9DA",
  cardColor6b: "#A7424A",
  navy1: "#081724"
};

export const shadows = {
  cardShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)",
  cardShadowWide: "0px 52px 70px -23px rgba(122,122,122,0.39)",
  topNavigationShadow: "0px 4px 4px rgba(0, 0, 0, 0.05)",
  bottomNavigationShadow: "0px -4px 4px rgba(0, 0, 0, 0.05)",
  sectionShadow: "0px 3px 4px rgba(0, 0, 0, 0.02)",
  // buttonShadow: (color = "231, 47, 47") => `0px 3px 8px ${chroma(color).rgba().alpha(0.2).css()}`,
  badgeShadow: `0px 3px 8px #87686350`,
  uiCompOuterShadow: "0px 1px 1px rgba(0, 0, 0, 0.25)",
  uiCompShadow: "0px 1px 1px rgba(0, 0, 0, 0.5), inset 0px 1px 0.5px rgba(0, 0, 0, 0.02)",
  overlayMenu: "0px -10px 4px rgba(0, 0, 0, 0.05)"
};

export const breakpoints = ["40em", "52em", "64em", "80em"];

export const space = ["0.25rem", "0.5rem", "0.75rem", "1rem", "1.5rem", "2rem"];

export default { colors, shadows, breakpoints, space };
