import { style } from "@vanilla-extract/css";

const breakpoints = {
  tablet: 768,
  desktop: 1024,
};

export const footer = style({
  color: "#fff",
  marginTop: "20px",
  padding: "20px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  "@media": {
    [`screen and (min-width: ${breakpoints.tablet}px)`]: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
    },
  },
});

export const footerLogo = style({
  width: "60vw",
  height: "auto",
  maxWidth: "200px",
  marginBottom: "15px",
  "@media": {
    [`screen and (min-width: ${breakpoints.tablet}px)`]: {
      width: "20vw",
      maxWidth: "150px",
      marginBottom: 0,
    },
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      width: "15vw",
      maxWidth: "180px",
    },
  },
});

export const footerText = style({
  fontSize: "0.7rem",
  color: "#fff",
  margin: "0",
  textAlign: "center",
  lineHeight: "1.4",
  "@media": {
    [`screen and (min-width: ${breakpoints.tablet}px)`]: {
      fontSize: "0.8rem",
      textAlign: "right",
    },
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      fontSize: "0.9rem",
    },
  },
});
