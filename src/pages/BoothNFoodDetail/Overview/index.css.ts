import { style } from "@vanilla-extract/css";
import { vars } from "../../../shared/styles/vars.css.ts";

export const container = style({
  position: "relative",
  width: "100%",
  aspectRatio: "16 / 9",
});
export const bottomContainer = style({
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  bottom: "0",
  width: "calc(100% - 20px)",
  padding: "10px",
  background: "linear-gradient(rgba(0, 0, 0, 0), rgba(255, 255, 255, 180))",
});

export const category = style({
  position: "absolute",
  top: "0",
  right: "0",
  margin: "10px",
  padding: "6px",
  fontSize: "20px",
  borderRadius: "10px",
  backgroundColor: "rgba(255, 255, 255, 0.5)",
});
export const coverImg = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});
export const keywordLabel = style({
  fontFamily: vars.font.pyeongChangLight,
  fontSize: "15px",
  background: "rgba(255, 255, 255, 0.50)",
  borderRadius: "10px",
  padding: "4px 8px",
});
export const hoursContainer = style({
  display: "flex",
  gap: "10px",
});
export const hoursLabel = style({
  fontFamily: vars.font.pyeongChangLight,
  fontSize: "15px",
  display: "flex",
  alignItems: "center",
});
