import { style } from "@vanilla-extract/css";

export const container = style({
  position: "relative",
  width: "100%",
  aspectRatio: "16 / 9",
});
export const bottomContainer = style({
  position: "absolute",
  bottom: "16px",
  width: "100%",
  padding: "6px",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
});

export const coverImg = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});
