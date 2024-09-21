import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  height: "100%",
});
export const zoomInBtn = style({
  position: "absolute",
  cursor: "pointer",
  margin: "5px",
  padding: "3px",
  borderRadius: "5px",
  backgroundColor: "rgba(255, 255, 255, 0.3)",
});
export const image = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});
