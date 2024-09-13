import { style } from "@vanilla-extract/css";
import { vars } from "../../../shared/styles/vars.css";

export const tabBtns = style({
  display: "flex",
  justifyContent: "space-between",
  margin: "10px 30px",
  padding: "4px",
  borderRadius: "40px",
  backgroundColor: vars.color.white,
});

export const tabBtn = style({
  flexGrow: 1,
  fontWeight: "bold",
  fontSize: "17px",
  padding: "10px 4px",
  borderRadius: "40px",
});

export const activeTabBtn = style({
  color: vars.color.white,
  background: `linear-gradient(90deg, ${vars.color.green3}, ${vars.color.green1}, ${vars.color.blue2})`,
});
export const inactiveTabBtn = style({
  color: vars.color.blue1,
});
