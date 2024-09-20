import { keyframes, style } from "@vanilla-extract/css";

const floating = keyframes({
  "0%": {
    transform: "translateY(0)",
  },
  "100%": {
    transform: "translateY(-7px)",
  },
});
export const container = style({
  display: "flex",
  animation: `3s ease 0s infinite alternate ${floating}`,
  position: "relative",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
});

export const mapImg = style({
  marginTop: "8vh",
  width: "700px",
  paddingRight: "20px",
});
