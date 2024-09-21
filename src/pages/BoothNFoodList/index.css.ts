import { style } from "@vanilla-extract/css";

export const cardContainer = style({
  margin: "10px",
});
export const imgContainer = style({
  margin: "0px 10px",
  padding: "8px",
  borderRadius: "12px",
  backgroundColor: "#fff",
  "@media": {
    "(max-width: 1000px)": {
      width: "30%",
      margin: "0px auto",
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
