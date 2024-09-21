import { style } from "@vanilla-extract/css";

export const containerStyle = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  fontFamily: "Arial, sans-serif",
});

export const lottieStyle = style({
  width: "80%",
  height: "auto",
});

export const textStyle = style({
  marginTop: "20px",
  fontSize: "18px",
  fontWeight: "bold",
  color: "#333",
  textAlign: "center",
});

export const responsiveTextStyle = style({
  "@media": {
    "screen and (max-width: 600px)": {
      fontSize: "16px",
    },
    "screen and (min-width: 601px) and (max-width: 1200px)": {
      fontSize: "17px",
    },
    "screen and (min-width: 1201px)": {
      fontSize: "18px",
    },
  },
});
