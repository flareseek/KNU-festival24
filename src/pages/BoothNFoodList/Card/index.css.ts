import { style } from "@vanilla-extract/css";
import { vars } from "../../../shared/styles/vars.css";

export const container = style({
  display: "flex",
  padding: "8px",
  marginBottom: "7px",
  height: "100px",
  borderRadius: "20px",
  backgroundColor: vars.color.white,
});
export const contentContainer = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "8px",
  width: "100%",
});
export const contentDiv13 = style({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "start",
});

export const contentDiv2 = style({
  display: "flex",
  marginBottom: "8px",
  width: "40%",
  alignItems: "center",
});
export const description = style({
  fontSize: "12px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
});

export const image = style({
  aspectRatio: "2 / 3",
  borderRadius: "16px 0px 0px 16px",
  marginRight: "16px",
  objectFit: "cover",
  objectPosition: "left",
});
export const title = style({
  fontFamily: vars.font.pyeongChangBold,
  fontSize: "16px",
  lineHeight: "22px",
  width: "55vw",
});
export const order = style({
  backgroundColor: vars.color.blue1,
  borderRadius: "99px",
  padding: "4px 8px",
  color: vars.color.white,
});
export const detailBtn = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  padding: "7px 10px",
  cursor: "pointer",
  borderRadius: "99px",
  background: vars.color.blue2,
  color: vars.color.white,
  fontSize: "12px",
});
export const detailBtnIcon = style({
  fontSize: "12px",
});
