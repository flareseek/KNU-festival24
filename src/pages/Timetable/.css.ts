import { style, styleVariants } from "@vanilla-extract/css";
import { vars } from "../../shared/styles/vars.css.ts";

export const section = style({
  padding: "20px",
  fontFamily: vars.font.pretendardRegular,
  "@media": {
    "screen and (max-width: 768px)": {
      padding: "10px",
    },
  },
});

const baseFilterButton = style({
  padding: "10px 15px",
  margin: "0 5px 10px 0",
  border: "none",
  borderRadius: "20px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
  backgroundColor: "rgba(79, 205, 197, 0.5)",
  "@media": {
    "screen and (max-width: 768px)": {
      padding: "8px 12px",
      margin: "0 3px 8px 0",
    },
  },
});

export const filterButton = styleVariants({
  default: [
    baseFilterButton,
    {
      color: vars.color.white,
      ":hover": {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
      },
    },
  ],
  active: [
    baseFilterButton,
    {
      fontWeight: "bold",
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      color: vars.color.white,
      ":hover": {
        backgroundColor: "rgba(255, 255, 255, 0.4)",
      },
    },
  ],
});

export const timeTableItem = style({
  backgroundColor: vars.color.white,
  borderRadius: "8px",
  padding: "15px",
  marginBottom: "15px",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  "@media": {
    "screen and (max-width: 768px)": {
      padding: "10px",
      marginBottom: "10px",
    },
  },
});

export const timeTableTitle = style({
  fontSize: "1.2rem",
  fontWeight: "bold",
  marginBottom: "10px",
  fontFamily: vars.font.pyeongChangBold,
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "1rem",
      marginBottom: "8px",
    },
  },
});

export const timeTableDescription = style({
  fontSize: "0.9rem",
  color: "#6c757d",
  marginBottom: "10px",
  fontFamily: vars.font.pretendardRegular,
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "0.8rem",
    },
  },
});

export const timeTableTime = style({
  fontSize: "0.9rem",
  fontWeight: "bold",
  color: vars.color.blue1,
  fontFamily: vars.font.pretendardRegular,
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "0.8rem",
    },
  },
});

export const artistInfoContainer = style({
  marginTop: "15px",
  "@media": {
    "screen and (max-width: 768px)": {
      marginTop: "10px",
    },
  },
});

export const artistInfoTitle = style({
  fontSize: "1rem",
  fontWeight: "bold",
  marginBottom: "10px",
  fontFamily: vars.font.pyeongChangBold,
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "0.9rem",
      marginBottom: "8px",
    },
  },
});

export const artistItem = style({
  display: "flex",
  alignItems: "center",
  marginBottom: "10px",
  "@media": {
    "screen and (max-width: 768px)": {
      marginBottom: "8px",
    },
  },
});

export const artistImage = style({
  width: "100px",
  height: "100px",
  marginRight: "10px",
  objectFit: "cover",
  "@media": {
    "screen and (max-width: 768px)": {
      width: "80px",
      height: "80px",
    },
  },
});

export const artistName = style({
  fontSize: "0.9rem",
  fontFamily: vars.font.pretendardRegular,
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "0.8rem",
    },
  },
});

export const currentIndicator = style({
  backgroundColor: vars.color.blue1,
  color: vars.color.white,
  padding: "2px 8px",
  borderRadius: "4px",
  display: "inline-block",
  marginTop: "8px",
  fontFamily: vars.font.pretendardRegular,
  "@media": {
    "screen and (max-width: 768px)": {
      fontSize: "0.8rem",
    },
  },
});

export const timeSeparator = style({
  margin: "16px 0",
  border: "none",
  borderTop: "1px dashed #d9d9d9",
  "@media": {
    "screen and (max-width: 768px)": {
      margin: "12px 0",
    },
  },
});
