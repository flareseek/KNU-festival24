import { style } from "@vanilla-extract/css";
import { vars } from "../../../shared/styles/vars.css";

export const container = style({
  display: "flex",
  padding: "8px",
  marginBottom: "16px",
  borderRadius: "20px",
  backgroundColor: vars.color.white,
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.2s ease-in-out",
  cursor: "pointer",
  ":hover": {
    transform: "translateY(-2px)",
  },
});

export const image = style({
  flexShrink: 0,
  width: "80px",
  height: "80px",
  borderTopLeftRadius: "16px",
  borderBottomLeftRadius: "16px",
  objectFit: "cover",
  marginRight: "16px",
});

export const contentContainer = style({
  flex: "1 1 auto",
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  marginRight: "16px",
});

export const textContainer = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

export const title = style({
  fontFamily: vars.font.pyeongChangLight,
  fontSize: "16px",
  lineHeight: "24px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export const description = style({
  fontSize: "12px",
  lineHeight: "20px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export const rightContainer = style({
  flexShrink: 0,
  display: "flex",
  flexDirection: "column",
  padding: "8px 8px 8px 0",
  justifyContent: "space-between",
  alignItems: "flex-end",
});

export const order = style({
  borderRadius: "99px",
  padding: "4px 8px",
  border: `1px solid #2c2c2c`,
  fontSize: "12px",
  fontWeight: "bold",
});

export const detailBtn = style({
  gap: "8px",
  color: vars.color.blue1,
  fontSize: "12px",
  fontWeight: "bold",
  transition: "background-color 0.2s ease-in-out",
  ":hover": {
    backgroundColor: vars.color.blue3,
  },
});

export const detailBtnIcon = style({
  fontSize: "14px",
  fontWeight: "bold",
});
