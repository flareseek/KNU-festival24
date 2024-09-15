import { style } from "@vanilla-extract/css";
import { vars } from "../../shared/styles/vars.css";

const mobileBreakpoint = "1000px";

export const headerStyles = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 20px",
  position: "relative",
});

export const logoStyles = style({
  width: "4em",
  height: "auto",
  fill: vars.color.green2,
  ":hover": {
    fill: vars.color.green1,
  },
});

export const currentPageStyles = style({
  color: "white",
  fontSize: "16px",
  fontWeight: "bold",
});

export const toggleBtnStyles = style({
  background: "none",
  border: "none",
  color: "white",
  fontSize: "24px",
  cursor: "pointer",
  display: "block",
  height: "1.5em",
  "@media": {
    [`(min-width: ${mobileBreakpoint})`]: {
      display: "none",
    },
  },
});

const menuTransition = "transform 0.3s ease-out, opacity 0.3s ease-out";

export const menuStyles = style({
  position: "absolute",
  top: "100%",
  left: 0,
  right: 0,
  padding: "20px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  transform: "translateX(-100%)",
  opacity: 0,
  pointerEvents: "none",
  transition: menuTransition,
  selectors: {
    "&.active": {
      transform: "translateX(0)",
      opacity: 1,
      pointerEvents: "auto",
      backdropFilter: "blur(5px)",
    },
  },
  "@media": {
    [`(min-width: ${mobileBreakpoint})`]: {
      position: "static",
      display: "flex",
      flexDirection: "row",
      boxShadow: "none",
      padding: 0,
      transform: "none",
      opacity: 1,
      pointerEvents: "auto",
      transition: "none",
    },
  },
});

export const menuListStyles = style({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  "@media": {
    [`(min-width: ${mobileBreakpoint})`]: {
      flexDirection: "row",
      alignItems: "center",
    },
  },
});

export const menuItemStyles = style({
  margin: "16px",
  fontSize: "large",
  "@media": {
    [`(min-width: ${mobileBreakpoint})`]: {
      margin: "0 0 0 20px",
    },
  },
});

export const menuItemLinkStyles = style({
  display: "inline-block",
  padding: "10px 15px",
  color: "white",
  textDecoration: "none",
  fontSize: "16px",
  borderRadius: "20px",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  transition: "background-color 0.3s ease",
  ":hover": {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
});

export const highlightStyles = style({
  fontWeight: "bold",
  backgroundColor: "rgba(255, 255, 255, 0.3)",
});