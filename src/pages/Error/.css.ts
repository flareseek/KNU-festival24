import { style } from "@vanilla-extract/css";

export const wrapContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "80vh",
  padding: "0 20px",
});

export const lottieStyle = style({
  width: "90%",
  maxWidth: "500px",
});

export const textStyle = style({
  fontSize: "24px",
});
