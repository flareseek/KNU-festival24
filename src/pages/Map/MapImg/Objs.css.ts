import { keyframes, style } from "@vanilla-extract/css";
import { vars } from "../../../shared/styles/vars.css";

export const movDiv = style({
  position: "absolute",
  zIndex: 1,
});
const floatingDrop = keyframes({
  "0%": {
    filter: `drop-shadow(0px 4px 4px ${vars.color.green1})`,
  },
  "100%": {
    filter: `drop-shadow(0px 0px 3px ${vars.color.green1})`,
  },
});
export const imgDrop = style({
  animation: `3s ease 0s infinite alternate ${floatingDrop}`,
});
export const container = style({
  position: "relative",
  width: 0,
  height: 0,
});

export const labelBtn = style({
  display: "block",
  background: vars.color.white,
  boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
  width: "fit-content",
  margin: "0 auto",
  padding: "3px 10px",
  borderRadius: "10px",
});
export const labelBtnText = style({
  fontFamily: vars.font.pyeongChangBold,
  fontSize: "14px",
  whiteSpace: "nowrap",
  background: `linear-gradient(90deg, ${vars.color.green3}, ${vars.color.green1}, ${vars.color.blue2})`,
  WebkitBackgroundClip: "text",
  color: "transparent",
});
