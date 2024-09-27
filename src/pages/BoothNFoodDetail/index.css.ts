import { style } from "@vanilla-extract/css";

const mobileBreakpoint = "1000px";

export const layout = style({
  "@media": {
    [`(min-width: ${mobileBreakpoint})`]: {
      display: "grid",
      gap: "20px",
      gridTemplateColumns: "1fr 1fr",
    },
  },
});

export const descriptionContainer = style({
  position: "relative",
  zIndex: 0,
  margin: "30px 20px",
});

export const description = style({
  fontSize: "15px",
  padding: "16px",
  background: "rgba(255, 255, 255, 0.70)",
  borderRadius: "10px",
});
export const sparkles = style({
  filter: "drop-shadow(0 5px 5px #fff)",
  position: "absolute",
});
export const sparkles1 = style({
  top: -10,
  left: 0,
});
export const sparkles2 = style({
  bottom: -10,
  right: 5,
});
