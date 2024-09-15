import { style } from "@vanilla-extract/css";
import { vars } from "../../../shared/styles/vars.css";

export const container = style({
  display: "flex",
  padding: "8px",
  marginBottom: "7px",
  height: "114px",
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
  justifyContent: "space-between",
  alignItems: "center",
});

export const contentDiv2 = style({
  display: "flex",
  marginBottom: "8px",
  alignItems: "center",
});

export const image = style({
  aspectRatio: "1 / 1",
  borderRadius: "16px 0px 0px 16px",
  marginRight: "16px",
});
export const title = style({
  fontFamily: vars.font.pyeongChangBold,
  fontSize: "18px",
  lineHeight: "22px",
});
export const icon = style({
  color: vars.color.blue1,
  fontSize: "30px",
});
export const category = style({
  border: "1.5px solid #000",
  borderRadius: "14px",
  marginRight: "8px",
  lineHeight: "20px",
  padding: "2px 8px",
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
});
export const detailBtnIcon = style({
  fontSize: "18px",
});
