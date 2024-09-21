import { style } from "@vanilla-extract/css";
import { vars } from "../../../shared/styles/vars.css";

export const tabsContainer = style({
  borderRadius: "10px",
  backgroundColor: "rgba(255, 255, 255, 0.5)",
});
export const tabContainer = style({
  display: "flex",
});
export const bottomTabContainer = style({
  backgroundColor: vars.color.white,
  borderRadius: "0px 0px 10px 10px",
});

export const tabBtn = style({
  flexGrow: 1,
  fontWeight: "bold",
  fontSize: "17px",
  height: "42px",
});
export const topBtns = style({
  fontSize: "14px",
  borderRadius: "10px 10px 0px 0px",
});
export const bottomBtns = style({
  borderRadius: "8px",
  width: "50%",
  margin: "3px",
});
export const activeTopBtn = style({
  backgroundColor: "#fff",
  color: vars.color.blue1,
});
export const activeBottomBtn = style({
  border: `1px solid #2c2c2c`,
  color: "#2c2c2c",
});
