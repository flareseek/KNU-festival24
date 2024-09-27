import { style } from "@vanilla-extract/css";

export const container = style({
  position: "relative",
  width: "100%",
  height: "100%",
});
export const zoomInBtn = style({
  position: "absolute",
  top: "5px",
  left: "5px",
  cursor: "pointer",
  padding: "3px",
  borderRadius: "5px",
  backgroundColor: "rgba(255, 255, 255, 0.3)",
});
export const image = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

export const placeBtn = style({
  position: "absolute",
  top: "5px",
  right: "5px",
  cursor: "pointer",
  padding: "3px",
  borderRadius: "5px",
  backgroundColor: "rgba(255, 255, 255, 0.3)",
});
