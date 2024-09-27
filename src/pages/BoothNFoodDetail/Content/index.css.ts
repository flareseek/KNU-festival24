import { style } from "@vanilla-extract/css";
import { vars } from "../../../shared/styles/vars.css";

export const container = style({
  padding: "10px 0px",
  borderTop: "1px dashed white",
});
export const cards = style({
  background: "rgba(255, 255, 255, 0.50)",
  padding: "10px 22px",
});

export const h3 = style({
  display: "inline-block",
  fontSize: "20px",
  color: "white",
  fontFamily: vars.font.pyeongChangLight,
  background: vars.color.blue2,
  borderRadius: "10px",
  border: "1px solid white",
  padding: "4px 6px",
  marginBottom: "10px",
  marginLeft: "10px",
});

export const card = style({
  borderRadius: "10px",
  height: "70px",
  padding: "7px",
  marginBottom: "10px",
  background: "white",
  display: "flex",
  justifyContent: "space-between",
  fontSize: "17px",
});
export const cardInfo = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "5px",
});
export const cardHeader = style({
  fontWeight: "bold",
});
export const cardImg = style({
  aspectRatio: "1 / 1",
  height: "100%",
  borderRadius: "10px",
  objectFit: "cover",
});
