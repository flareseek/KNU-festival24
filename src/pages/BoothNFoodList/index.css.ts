import { style } from "@vanilla-extract/css";

export const cardContainer = style({
  margin: "10px",
});
export const imgContainer = style({
  margin: "0px 10px",
  borderRadius: "12px",
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  padding: "8px 30%",
  "@media": {
    "screen and (max-width: 768px)": {
      backgroundColor: "#fff",
      padding: "8px",
    },
  },
});
export const imgContainer2 = style({
  borderRadius: "8px",
  overflow: "hidden",
});
export const tabContainer = style({
  margin: "10px",
});
